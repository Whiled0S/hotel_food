import Worker from "./worker";

export default class RPC {

  static async getIndexData(location) {
    const message = Worker.createMessage('getIndexData', { location });
    const request = Worker.createRequest([ message ]);

    const response = await Worker.sendRequest(request);

    // eslint-disable-next-line no-console
    console.log(response);
  }
}
