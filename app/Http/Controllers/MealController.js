'use strict'

class MealController {

    * index (request, response) { 
        yield response.sendView('meal') 
    }

}

module.exports = MealController
