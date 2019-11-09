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

  static createMessage(type, payload) {
    return {type, payload};
  }

  static createRequest(messages) {
    const sessionId = Worker.getSessionId();

    return {messages, sessionId};
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
