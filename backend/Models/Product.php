<?php

require "Connection.php";

class Product 
{
    public $idProduto;
    public $nomeProduto;
    public $descricao;
    public $preco;
    public $imagem;

    public static function getAll()
    {
        $connection = Connection::getDb();
        $sql = $connection->query("SELECT * FROM produtos"); 
        return $sql->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerClient()
    {
        $connection = Connection::getDb();

        $sql = $connection->query("INSERT INTO pedido_cliente (nome, nome_produto, quantidade, endereco, telefone, id_pedido) values ('$this->nome', '$this->produto', '$this->quantidade', '$this->endereco', '$this->telefone', '$this->id')");
        
        if ($sql->rowCount() > 0) {
            return true;
        }
        else {
            return false;            
        }
    }
}