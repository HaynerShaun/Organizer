'use strict'

class FinanceController {

    * index (request, response) { 
        yield response.sendView('finance') 
    }
}

module.exports = FinanceController
