<?php

require "Models/Product.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$products = Product::getAll();

$json = json_encode($products);

print_r($json);
