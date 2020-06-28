<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_information', function (Blueprint $table) {
            $table->id();

            // $table->bigInteger('user_id');
            $table->char('serial_number', 32)->unique();        // 客戶編號
            $table->char('name', 32);                           // 客戶名稱
            $table->char('tax_id', 32)->unique()->nullable();   // 統一編號
            $table->char('phone', 32)->nullable();              // 電話號碼 (國碼)
            $table->char('fax', 32)->nullable();                // 傳真號碼 (國碼)
            $table->text('address')->nullable();                // 公司地址
            $table->text('email')->nullable();                  // email
            $table->char('line_id', 32)->nullable();            // line ID
            $table->char('wechat_id', 32)->nullable();          // wechat ID
            $table->char('whatsapp_id', 32)->nullable();        // whatsapp ID
            $table->text('url')->nullable();                    // 公司首頁
            $table->char('liaison_name', 32)->nullable();       // 客戶聯絡人
            $table->char('liaison_phone', 32)->nullable();      // 聯絡人手機
            $table->text('service')->nullable();                // 公司營業項目(選項)
            $table->bigInteger('permission_group_id');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_information');
    }
}
