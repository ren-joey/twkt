<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            // edit | verify | confirm | quoting | complete
            $table->char('status', 32)->default('edit');
            $table->char('function', 32);
            $table->char('dosage_form', 32);
            $table->char('each_pill', 32)->nullable();
            $table->char('each_bag', 32)->nullable();
            $table->char('each_bottle', 32)->nullable();
            $table->char('pill_in_box', 32)->nullable();
            $table->char('bag_in_box', 32)->nullable();
            $table->char('bottle_in_box', 32)->nullable();
            $table->char('package', 32);
            $table->text('test')->nullable();
            $table->text('description')->nullable();
            $table->text('order_details')->nullable();
            $table->bigInteger('created_by');
            // $table->bigInteger('agent')->nullable();

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
        Schema::dropIfExists('orders');
    }
}
