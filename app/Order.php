<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    // all fields fillable
    protected $guarded = ['id'];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function orderMaterials()
    {
        return $this->hasMany('App\OrderMaterial');
    }

    // 將輸出的 timestamp 統一格式化
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
