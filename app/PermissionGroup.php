<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PermissionGroup extends Model
{
    protected $visible = ['id', 'col_name', 'tw_name', 'bg_color', 'text_color'];

    public function userInformation()
    {
        return $this->hasMany('App\UserInformation');
    }

    public function menus()
    {
        return $this->belongsToMany('App\Menu');
    }
}
