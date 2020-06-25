<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $visible = ['id', 'col_name', 'tw_name'];

    public function permissionGroups()
    {
        return $this->belongsToMany('App\PermissionGroup');
    }
}
