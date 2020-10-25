<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class UserNotification extends Model
{
    protected $guarded = ['id'];

    // 將輸出的 timestamp 統一格式化
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
