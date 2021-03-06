<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Material extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'created_by');
    }

    public function orderMaterial()
    {
        return $this->hasMany('App\OrderMaterial');
    }

    public function quotation()
    {
        return $this->hasOne('App\Quotation');
    }
}
