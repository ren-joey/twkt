<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function quotation()
    {
        return $this->belongsTo(Quotation::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    // 將輸出的 timestamp 統一格式化
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
