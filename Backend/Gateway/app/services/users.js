const Request = require('../utils/Request');

module.exports.login = (user) => {

    let request = new Request(`${process.env.USER_SERVICE_ENDPOINT}/user/authentication`);

    request.isJson();

    return request.post(user);
}

module.exports.register = (user) => {

    let request = new Request(`${process.env.USER_SERVICE_ENDPOINT}/user/register`);

    request.isJson();

    return request.post(user);
}


module.exports.updateAccount = (token, info) => {
    let request = new Request(`${process.env.USER_SERVICE_ENDPOINT}/user/account`);

    request.isJson();

    request.appendHeader("Authorization", token);

    return request.put(info);
}

module.exports.updatePassword = (token, info) => {
    let request = new Request(`${process.env.USER_SERVICE_ENDPOINT}/user/password`);

    request.isJson();

    request.appendHeader("Authorization", token);

    return request.patch(info);
}

module.exports.validateToken = (token) => {
    let request = new Request(`${process.env.USER_SERVICE_ENDPOINT}/user/validation`);

    request.isJson();
    request.appendHeader("Authorization", token);

    return request.get();
}