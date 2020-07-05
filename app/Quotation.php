<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quotation extends Model
{
    use SoftDeletes;

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function material()
    {
        return $this->belongsTo('App\Material');
    }
}
