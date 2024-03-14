<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produtos';
    // public $timestamps = false;

    protected $fillable = [
        'id',
        'nome',
        'custo',
        'tipo',
        'descricao',
        'preco_unitario',
        'estoque',
        'imagem'
    ];

    // public function fornecedor()
    // {
    //     return $this->belongsTo(Fornecedor::class, 'id_fornecedor');
    // }

    public function itensPedido()
    {
        return $this->hasMany(ItemPedido::class);
    }

    public function movimentosEstoque()
    {
        return $this->hasMany(MovEstoque::class);
    }

}
