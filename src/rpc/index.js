/* eslint-disable no-console */
import Worker from './worker';

export default class RPC {

  static async getIndexData(location) {
    return Worker.sendOneMessage('getIndexData', { location });
  }

  static async getBusinessesByCategory(location, categoryId) {
    return Worker.sendOneMessage('getBusinessesByCategory', { location, categoryId });
  }

  static async getRestaurantData(businessId, location) {
    const types = ['getProductsByBusiness', 'getLocationInfo'];
    const payloads = [{ businessId }, { location }];

    return Worker.sendMessageGroup(types, payloads);
  }

  static async getProductsByBusiness(businessId) {
    return Worker.sendOneMessage('getProductsByBusiness', { businessId });
  }

  static async getProductByCategory(businessId, categoryId) {
    return Worker.sendOneMessage('getProductByCategory', { businessId, categoryId });
  }

  static async getProduct(productId) {
    return Worker.sendOneMessage('getProduct', { productId });
  }

  static async addIntoCart(location, productId, quantity) {
    return Worker.sendOneMessageNotificationPriority('addIntoCart', { location, productId, quantity });
  }

  static async getCart(location) {
    const types = ['getCart', 'getSuggestedProducts'];
    const payloads = [{ location }, { location }];

    return Worker.sendMessageGroup(types, payloads);
  }

  static deleteFromCart(productId) {
    Worker.sendOneMessage('deleteFromCart', { productId });
  }

  static clearCart() {
    Worker.sendOneMessage('clearCart', {});
  }

  static clearCartAndAddItem(location, productId, quantity) {
    const types = ['clearCart', 'addIntoCart'];
    const payloads = [{}, { location, productId, quantity }];

    Worker.sendMessageGroup(types, payloads);
  }

  static async processCheckout(location, acceptTermsOfUse, comment) {
    return Worker.sendOneMessage('processCheckout', { location, acceptTermsOfUse, comment });
  }

  static async checkPayment(orderId) {
    return Worker.sendOneMessage('checkPayment', { orderId });
  }

  static async getOrder(orderId) {
    return Worker.sendOneMessage('getOrder', { orderId });
  }

  static async getOrders() {
    return Worker.sendOneMessage('getOrders', {});
  }
}
