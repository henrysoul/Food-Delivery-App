<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Api\MenuItems;

class WebsiteController extends Controller
{
    public function index(){
        try {
            $items = MenuItems::where('available',1)->get();
            return response()->json(['data'=>$items],200);
        } catch (\Exception $ex) {
            return response()->json(['message'=>'Internal Server Error'],500);
        }
    }
}
