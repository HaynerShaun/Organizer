'use strict'

class CalendarController {

    * index (request, response) { 
        yield response.sendView('calendar') 
    }

}

module.exports = CalendarController
