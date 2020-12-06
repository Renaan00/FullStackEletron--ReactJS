SELECT * 
FROM produtos 
JOIN pedido_cliente
ON produtos.idproduto = pedido_cliente.id_pedido;