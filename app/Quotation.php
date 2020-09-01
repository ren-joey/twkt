<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quotation extends Model
{
    use SoftDeletes;

    protected $fillable = ['status', 'price'];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function material()
    {
        return $this->belongsTo('App\Material');
    }

    public function order() {
        return $this->belongsTo('App\Order');
    }

    // 將輸出的 timestamp 統一格式化
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
