<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Hash;
use App\User;
class AccountController extends Controller
{
    // this function creates a customer
    public function register(Request $request){
        // vaildates http request
        $validator = Validator::make($request->all(),[
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|email|unique:users',
            'phone'=>'required|max:11',
            'password'=>'required|min:6',
            'password_confirm'=>'same:password'
        ]);
        if($validator->fails()){
            // report error
            return response()->json(['message'=>$validator->errors()->first()],400);
            // return response()->json(['status'=>400,'message'=>'Bad Request','error'=>$validator->errors()]);
        }else{
            try {
                // creates user
                if($request->admin){
                    $group_id=200;
                }else{
                    $group_id = 100;
                }
                $user = User::create(['group_id'=>$group_id,'name'=>$request->first_name.' '.$request->last_name,'email'=>$request->email,
                    'phone'=>$request->phone,'password'=>Hash::make($request->password),
                ]);
                $success = ['token'=>$user->createToken('myapp')->accessToken,'name'=>$user->name];
                return response()->json(['response'=>$success],200);
            } catch (\Exception $ex) {
                // return error in creating user
                return response()->json(['message'=>'Internal Server Error'],500);
            }
        }
    }
    public function login(Request $request){
        // vaildates http request
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required',
        ]);
        if($validator->fails()){
            // report error
            return response()->json(['message'=>$validator->errors()->first()],400);
        }else{
                // checks users credentials
                if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
                    $user = Auth()->user();
                    $success = ['token'=>$user->createToken('myapp')->accessToken,'name'=>Auth()->user()->name,'email'=>Auth()->user()->email,'phone'=>Auth()->user()->phone,'group_id'=>Auth()->user()->group_id];    
                    // $success = ['token'=>$user->createToken('MyApp')->accessToken];    
                    return response()->json(['response'=>$success],200);
                }else{
                    // return login error
                    return response()->json(['message'=>'Invalid credentials'],400);
                }
        }
    }
}