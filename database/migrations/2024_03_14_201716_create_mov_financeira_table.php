<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mov_financeira', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_fornecedor')->nullable();
            $table->unsignedBigInteger('id_cliente')->nullable();
            $table->float('valor')->nullable();
            $table->string('tipo', 15)->nullable();
            $table->datetime('data_limite')->nullable();
            $table->datetime('data_pagto')->nullable();
            $table->foreign('id_fornecedor')->references('id')->on('fornecedores')->onDelete('set null');
            $table->foreign('id_cliente')->references('id')->on('clientes')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mov_financeira');
    }
};
