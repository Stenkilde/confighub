var request = require('./request.js');

/**
 * Get collection of articles
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {

    return request.get('http://localhost:8000/files')
        .then(function(response) {
            return {
                collection: response
            };
        });
}

function get(id) {
    return request.get('http://localhost:8000/file/' + id)
        .then(function(response) {
            return {
                file: response
            };
        });
}

module.exports = {
    collection: collection,
    get: get
};
