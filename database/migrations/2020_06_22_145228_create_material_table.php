<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('material', function (Blueprint $table) {
            $table->id();

            $table->char('serial_number', 32)->unique()->nullable();    // 1原料編號
            $table->char('name', 32);                                   // *2原料名稱
            $table->char('moq', 32);                                    // *3MOQ
            $table->bigInteger('quote_id')->nullable();                 // 4報價 5報價日期
            $table->text('spec_1');                                     // *6規格一
            $table->text('spec_2');                                     // *7規格二
            $table->char('origin_name', 32)->nullable();                // 8原廠名稱
            $table->char('origin', 32);                                 // *9原料產地
            $table->text('patent');                                     // *10專利
            $table->text('certification');                              // *11認證
            $table->integer('report')->nullable();                      // 12臨床研究/文獻報告
            $table->text('function');                                   // *13功能
            $table->text('allergen')->nullable();                       // 14原料來源含有過敏原
            $table->text('feature')->nullable();                        // 15原料特性
            $table->text('process')->nullable();                        // 16加工製程
            $table->text('dosage_form')->nullable();                    // 17適用劑型
            $table->text('list');                                       // *17可供食品使用原料彙整一覽表
            $table->text('gov_limit')->nullable();                      // 18衛福部法規限制
            $table->char('dosage_amount', 32);                          // *19建議劑量
            $table->text('image_json')->nullable();                     // 20上傳產品資訊(jpg./pdf.檔案)
            $table->text('cuzo')->nullable();                           // 21常備庫存
            $table->text('comment')->nullable();                        // 22其他

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
        Schema::dropIfExists('material');
    }
}
