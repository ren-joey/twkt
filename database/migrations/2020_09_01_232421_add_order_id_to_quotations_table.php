<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOrderIdToQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quotations', function (Blueprint $table) {
            // quoting | verify | complete
            $table->string('status', 32)->default('quoting')->change();
            $table->bigInteger('order_id');
            $table->integer('price')->nullable()->change();
            $table->date('arrival_date')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quotations', function (Blueprint $table) {
            $table->string('status', 32)->default('edit')->change();
            $table->dropColumn('order_id');
            $table->integer('price')->change();
            $table->date('arrival_date')->change();
        });
    }
}
