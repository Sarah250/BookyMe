import authHeader from './auth-header'
import Request from '../utils/Request'

class UserService {

  registerUser(user) {
    let body = JSON.stringify(user);

    let request = new Request(`${process.env.API_ENDPOINT}/users/register`)

    request.acceptJson()
    request.isJson()
    return request.post(body)
  }

  updateAccount(user) {
    let body = JSON.stringify(user);

    let request = new Request(`${process.env.API_ENDPOINT}/users/account`)

    request.acceptJson()
    request.appendHeader("Authorization", authHeader());
    request.isJson()

    return request.put(body)
  }

  updatePassword(user) {
    let body = JSON.stringify(user);

    let request = new Request(`${process.env.API_ENDPOINT}/users/password`)

    request.acceptJson()
    request.appendHeader("Authorization", authHeader());
    request.isJson()
    return request.patch(body)
  }

  getCatalog(id) {
    let request = new Request(`${process.env.API_ENDPOINT}/catalog/store/${id}`);

    request.isJson()
    request.acceptJson()

    return request.get()
  }

  getCategories() {
    let request = new Request(`${process.env.API_ENDPOINT}/stores/categories`)

    request.isJson()
    request.acceptJson()

    return request.get()
  }

  getFavorites() {

    let request = new Request(`${process.env.API_ENDPOINT}/users/favorite`)

    request.isJson()
    request.appendHeader("Authorization", authHeader())
    request.acceptJson()

    return request.get()
  }

  getBookingUserCurrent(){

    let request = new Request(`${process.env.API_ENDPOINT}/booking/user/current`)

    request.isJson()
    request.appendHeader("Authorization", authHeader())
    request.acceptJson()

    return request.get()

  }

  getBookingUserConcluded(){

    let request = new Request(`${process.env.API_ENDPOINT}/booking/user/concluded`)

    request.isJson()
    request.appendHeader("Authorization", authHeader())
    request.acceptJson()

    return request.get()

  }

  deleteFavorite(id) {
    let request = new Request(`${process.env.API_ENDPOINT}/users/favorite/${id}`);

    request.isJson()
    request.appendHeader("Authorization", authHeader())
    request.acceptJson()

    return request.delete()
  }

  addFavorite(id) {
    let request = new Request(`${process.env.API_ENDPOINT}/users/favorite`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())
    request.appendParam("favorite", id)

    return request.post()
  }

  getStoresByCategory(category) {
    let request = new Request(`${process.env.API_ENDPOINT}/stores`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())
    request.appendParam("category", category)

    return request.get()
  }

  getStoreData(id) {
    let request = new Request(`${process.env.API_ENDPOINT}/stores`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())
    request.appendParam("_id", id)

    return request.get()
  }

  getStoresData() {
    let request = new Request(`${process.env.API_ENDPOINT}/stores`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())

    return request.get()
  }

  getStoreBySearch(keyword, category) {
    let request = new Request(`${process.env.API_ENDPOINT}/stores`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())
    request.appendParam("search", keyword)
    request.appendParam("category", category)

    return request.get()
  }

  getReviewsStore(id){
    let request = new Request(`${process.env.API_ENDPOINT}/review/store/${id}`)

    request.isJson()
    request.acceptJson()
    request.appendHeader("Authorization", authHeader())

    return request.get()
  }

  getProfileData() {

    let request = new Request(`${process.env.API_ENDPOINT}/users/validation`)

    request.isJson()
    request.acceptJson()

    request.appendHeader("Authorization", authHeader())


    return request.get()
  }

  makeBooking(booking, storeID) {

    let body = JSON.stringify(booking)
    console.log(body)

    let request = new Request(`${process.env.API_ENDPOINT}/booking/${storeID}`)

    request.isJson()
    request.acceptJson()

    request.appendHeader("Authorization", authHeader())

    return request.post(booking)

  }

  getNotifications(read) {
    let request = new Request(`${process.env.API_ENDPOINT}/notification`);

    request.isJson();
    request.appendHeader("Authorization", authHeader());
    request.acceptJson();
    request.appendParam("read", read);

    return request.get();
  }

  markAsRead(id) {
    let request = new Request(`${process.env.API_ENDPOINT}/notification/${id}`);

    request.isJson();
    request.appendHeader("Authorization", authHeader());
    request.acceptJson();

    return request.patch();
  }
}

export default new UserService();
