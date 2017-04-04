'use strict'

class ListController {

    * index (request, response) { 
        yield response.sendView('Lists') 
    }

}

module.exports = ListController
