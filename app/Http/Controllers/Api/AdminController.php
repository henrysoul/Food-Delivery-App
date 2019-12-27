<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class AdminController extends Controller
{
    public function delivery_guys(){
        try{
            $delivey_guy = DB::table('users')
            ->select('users.*','delivery_guy.*')
            ->leftJoin('delivery_guy','users.id','delivery_guy.user_id')
            ->where('users.group_id',200)
            ->get();
            return response()->json(['data'=>$delivey_guy],200);
        } catch (\Exception $ex) {
            return response()->json(['message'=>'Internal Server Error'],500);
        } 
    }
}
