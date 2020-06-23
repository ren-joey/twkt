<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function quote()
    {
        return $this->belongsTo(Quote::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}
