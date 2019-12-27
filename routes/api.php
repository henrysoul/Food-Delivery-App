<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Route::get('/login',function(){
//     return response()->json(['unathorized',401]);
// });

Route::post('register','Api\AccountController@register');
Route::post('login','Api\AccountController@login');  
Route::get('login',function(){
    return "Un Authorised";
})->name('login');

Route::get("test",function(){
    return(Storage::url('photo5e04c34aade7a.JPG'));
});

Route::get('menu_website','Api\WebsiteController@index');

// secured routes
Route::group(['middleware'=>'auth:api'],function(){
    Route::post('add_menu_items','Api\MenuItemsController@save');   
    Route::get('menu_items','Api\MenuItemsController@index');   
    Route::post('update_menu_item/{id}','Api\MenuItemsController@update');   
    Route::get('delete_menu_item/{id}','Api\MenuItemsController@delete'); 
    
    Route::get('delivery_guys','Api\AdminController@delivery_guys'); 
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

