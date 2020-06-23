<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderMaterial extends Model
{
    use SoftDeletes;

    public function order()
    {
        return $this->belongsTo('App/Order');
    }

    public function material()
    {
        return $this->hasOne('App/Material');
    }
}
