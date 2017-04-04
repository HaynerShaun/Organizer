'use strict'

class ShoppingController {

    * index (request, response) { 
        yield response.sendView('shopping') 
    }

}

module.exports = ShoppingController
