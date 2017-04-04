'use strict'

class UserController {

    * profile (request, response) { 
        yield response.sendView('profile') 
    }
}

module.exports = UserController
