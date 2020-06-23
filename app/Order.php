<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function materials()
    {
        return $this->hasMany('App\OrderMaterial');
    }
}
