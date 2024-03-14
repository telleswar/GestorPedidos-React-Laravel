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
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 120);
            $table->float('custo')->nullable();
            $table->string('tipo', 40)->nullable();
            $table->longText('descricao')->nullable();
            $table->float('preco_unitario');
            $table->integer('estoque')->default(0);
            $table->unsignedBigInteger('id_fornecedor')->nullable();
            $table->foreign('id_fornecedor')->references('id')->on('fornecedores')->onDelete('set null');
            $table->string('imagem')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
