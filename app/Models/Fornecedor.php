<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    use HasFactory;
    protected $table = 'fornecedores';
    // public $timestamps = false;

    protected $fillable = [
        'id',
        'nome',
        'telefone',
        'email',
        'endereco',
        'cnpj',
    ];

    public function movimentosEstoque()
    {
        return $this->hasMany(MovEstoque::class);
    }

    public function movimentosFinanceiros()
    {
        return $this->hasMany(MovFinanceira::class);
    }
}
