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

  static async getBusinessesByCategory(location, categoryId) {
    const message = Worker.createMessage('getBusinessesByCategory', {location, categoryId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getBusinessesByCategory', response);
  }

  static async getRestaurantData(businessId, location) {
    const productsMessage = Worker.createMessage('getProductsByBusiness', {businessId});
    const locationMessage = Worker.createMessage('getLocationInfo', {location});

    const request = Worker.createRequest([productsMessage, locationMessage]);

    const response = await Worker.sendRequest(request);

    return [
      Worker.getResponseMessage('getProductsByBusiness', response),
      Worker.getResponseMessage('getLocationInfo', response)
    ];
  }

  static async getProductsByBusiness(businessId) {
    const message = Worker.createMessage('getProductsByBusiness', {businessId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getProductsByBusiness', response);
  }

  static async getProductByCategory(businessId, categoryId) {
    const message = Worker.createMessage('getProductByCategory', {businessId, categoryId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getProductByCategory', response);
  }
}
