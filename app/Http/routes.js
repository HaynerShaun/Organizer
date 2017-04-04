'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'AuthController.index')
Route.get('login', 'AuthController.index')
Route.get('logout', 'AuthController.logout')
Route.get('register', 'AuthController.register')
Route.get('home', 'AuthController.home')

Route.get('profile', 'UserController.profile')

Route.get('calendar', 'CalendarController.index')

Route.get('finance', 'FinanceController.index')

Route.get('lists', 'ListController.index')

Route.get('meal', 'MealController.index')

Route.get('shopping', 'ShoppingController.index')



Route.post('login', 'AuthController.login')
Route.post('register', 'AuthController.create')