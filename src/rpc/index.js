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

  static async getProduct(productId) {
    const message = Worker.createMessage('getProduct', {productId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getProduct', response);
  }

  static async addIntoCart(location, productId, quantity) {
    const message = Worker.createMessage('addIntoCart', {location, productId, quantity});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('addIntoCart', response);
  }

  static async getCart(location) {
    const cartMessage = Worker.createMessage('getCart', {location});
    const suggestedMessage = Worker.createMessage('getSuggestedProducts', {location});

    const request = Worker.createRequest([cartMessage, suggestedMessage]);

    const response = await Worker.sendRequest(request);

    return [
      Worker.getResponseMessage('getCart', response),
      Worker.getResponseMessage('getSuggestedProducts', response)
    ];
  }

  static deleteFromCart(productId) {
    const message = Worker.createMessage('deleteFromCart', {productId});
    const request = Worker.createRequest([message]);

    Worker.sendRequest(request);
  }

  static clearCart() {
    const message = Worker.createMessage('clearCart', {});
    const request = Worker.createRequest([message]);

    Worker.sendRequest(request);
  }

  static async processCheckout(location, acceptTermsOfUse, comment) {
    const message = Worker.createMessage('processCheckout', {location, acceptTermsOfUse, comment});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('processCheckout', response);
  }

  static async getOrder(orderId) {
    const message = Worker.createMessage('getOrder', {orderId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('getOrder', response);
  }

  static async checkPayment(orderId) {
    const message = Worker.createMessage('checkPayment', {orderId});
    const request = Worker.createRequest([message]);

    const response = await Worker.sendRequest(request);

    return Worker.getResponseMessage('checkPayment', response);
  }
}
