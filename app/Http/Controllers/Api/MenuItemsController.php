<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Api\MenuItems;
use Validator;
use Illuminate\Support\Facades\Storage;

class MenuItemsController extends Controller
{
    public function  index(){
        try {
            
            $items = MenuItems::orderBy('food_type')->get();
            return response()->json(['data'=>$items],200); 

        } catch (\Exception $ex) {
            return response()->json(['message'=>'Internal Server Error'],500);
        }
    }
    public function save(Request $request){
        // vaildates http request
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
                // saves item
                    if($request->hasfile('picture')){
                        $file = $request->file('picture');
                        $photo_url = "photo".uniqid().'.'.$file->getClientOriginalExtension();
                        // $path = Storage::disk('public')->putFileAs(
                        //     'uploads', $file, $photo_url
                        // );
                         $file->move(public_path("images"),$photo_url);
                        $request['picture'] = $photo_url;
                        MenuItems::create(['food_type'=>$request->food_type,'price'=>$request->price,'available'=>$request->available,
                            'quantity'=>$request->quantity,'picture'=>$photo_url,'description'=>$request->description
                        ]); 
                    }
                    return $photo_url;
                    return response()->json(['message'=>"Item saved successfully"],200); 
                }catch (\Exception $ex) {
                   return response()->json(['message'=>'Internal Server Error'],500);
               }
        }
    }

    public function update(Request $request,$id){
        try {
            if($request->hasfile('picture')){
                $file = $request->file('picture');
                $photo_url = "photo".uniqid().'.'.$file->getClientOriginalExtension();
                $file->move(public_path("images"),$photo_url);
                $request['picture'] = $photo_url;
                MenuItems::find($id)->update(['food_type'=>$request->food_type,'price'=>$request->price,'available'=>$request->available,
                    'quantity'=>$request->quantity,'picture'=>$photo_url,'description'=>$request->description
                ]); 
            }else{
                MenuItems::find($id)->update($request->all());
            }
            return response()->json(['message'=>"Item updated successfully"],200); 
        } catch (\Exception $ex) {
            return response()->json(['message'=>'Internal Server Error'],500);
        }
    }

    public function delete($id){
        try {
            MenuItems::find($id)->delete();
            return response()->json(['message'=>"Item deleted successfully"],200); 
        } catch (\Exception $ex) {
            return response()->json(['message'=>'Internal Server Error'],500);
        }
    }

    
}
