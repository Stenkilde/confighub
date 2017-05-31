var request = require('./request.js');

function post(rating) {

    console.log(rating);

    return request.post('http://localhost:8000/rate', rating)
        .then(function(response) {
            return {
                rating: response
            };
        });
}

module.exports = {
    post: post
};
