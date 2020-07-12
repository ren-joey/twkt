<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialCategory extends Model
{
    protected $visible = ['id', 'serial_number', 'col_name', 'tw_name'];
}
