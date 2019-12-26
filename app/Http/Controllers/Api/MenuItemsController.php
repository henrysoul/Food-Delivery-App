<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Api\MenItems;

class MenuItemsController extends Controller
{
    public function save(Request $request){
        // vaildates http request
        return $request->all();
        $validator = Validator::make($request->all(),[
            'food_type'=>'required',
            'price'=>'required|numeric',
            'available'=>'required',
            'quantity'=>'required|numeric',
            'picture'=>'required',
            'description'=>'required'
        ]);

        if($validator->fails()){
            // report error
            return response()->json(['message'=>$validator->errors()->first()],400);
        }else{
               try {
                MenItems::create($request->all());   
               } catch (\Exception $ex) {
                   return $ex;
                   return response()->json(['message'=>'Internal Server Error'],500);
               }
        }
    }
}
