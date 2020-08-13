<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderFormColumn extends Model
{
    protected $visible = ['id', 'col_name', 'col_option', 'tw_name', 'type', 'description', 'required'];
}
