<?php

namespace App\Model\Api;

use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
    protected $table = 'menu_items';
    protected $fillable = ['food_type','price','description','quantity','picture','available'];
}
