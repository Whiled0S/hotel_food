/* eslint-disable no-console */
import Worker from "./worker";

export default class RPC {

  static preventError(responseMessage, callback) {
    if (!responseMessage)
      return console.error('Ошибка в RPC запросе');

    try {
      callback();
    } catch (error) {
      console.log(error);
    }
  }

  static async getIndexData(location) {
    const message = Worker.createMessage('getIndexData', {location});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getIndexData', response);
  }
}
