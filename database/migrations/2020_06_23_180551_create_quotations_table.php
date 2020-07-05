<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotations', function (Blueprint $table) {
            $table->id();

            // edit | verify | confirm | complete
            $table->char('status', 32)->default('edit');
            $table->bigInteger('material_id');
            // $table->bigInteger('user_information_id');
            $table->bigInteger('created_by');
            $table->integer('price');
            $table->char('currency')->default('TWD');
            $table->date('arrival_date');

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
        Schema::dropIfExists('quotations');
    }
}
