<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
class AccountController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|email|unique:users',
            'phone'=>'phone|required',
            'password'=>'required',
            'password_confirm'=>'requred|same:password'
        ]);

        if($validator->fails()){
            return response()->json(['status_code'=>500,'message'=>'validation error']);
        }
        return response()->json(['status_code'=>200,$request->all()]);
    }
}
