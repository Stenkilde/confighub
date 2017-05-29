var request = require('./request.js');

function auth(user) {
    return request.post('http://localhost:8000/login', user)
        .then(function(response) {
            return {
                user: response
            };
        });
}

function register(user) {
    return request.post('http://localhost:8000/register', user)
        .then(function(response) {
            return {
                user: response
            }
        })
}

function me() {

}

function getUser(id) {
    return request.get('http://localhost:8000/user/' + id)
        .then(function(response) {
            return {
                user: response
            };
        });
}

module.exports = {
    auth: auth,
    register: register,
    me: me,
    getUser: getUser
};
