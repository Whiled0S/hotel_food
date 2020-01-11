import uuid from 'uuid/v1';

export default class Worker {
  static URL = '/api/rpc';

  static getSessionId() {
    if (!localStorage.getItem('sessionId'))
      localStorage.setItem('sessionId', uuid());

    return localStorage.getItem('sessionId');
  }

  static getResponseMessage(type, response) {
    return response.messages.find(message => message.type === type);
  }

  static getErrorMessage(response) {
    return response.messages.find(message => message.type === 'error');
  }

  static getNotificationMessage(response) {
    return response.messages.find(message => message.type === 'notification');
  }

  static createMessage(type, payload) {
    return { type, payload };
  }

  static createRequest(messages) {
    const sessionId = Worker.getSessionId();

    return { messages, sessionId };
  }

  static async sendOneMessage(type, payload) {
    const message = Worker.createMessage(type, payload);
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage(type, response) || Worker.getErrorMessage(response);
  }

  static async sendOneMessageNotificationPriority(type, payload) {
    const message = Worker.createMessage(type, payload);
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('notification', response) || Worker.getResponseMessage(type, response);
  }

  static async sendMessageGroup(types, payloads) {
    const messages = types.map((type, index) => Worker.createMessage(type, payloads[index]));
    const request = Worker.createRequest(messages);

    const response = await Worker.sendRequest(request);

    return types.map(type => Worker.getResponseMessage(type, response));
  }

  static async sendRequest(request) {
    const response = await fetch(Worker.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });

    return await response.json();
  }
}
