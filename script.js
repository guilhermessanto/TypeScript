"use strict";
/* Annotation */
let produtoUm = "Livro";
const precoUm = 200;
const carroUm = {
    marca: "audi",
    portas: 5,
};
/* const, let e var só podem ser substituidas pelo mesmo tipo, no caso como produto foi declarado como string não posso passar como number */
//produto = 300;
/* inferencia  */
const produtoDois = "Livro";
let precoDois = 200;
const carroDois = {
    marca: "Audi",
    portas: 5,
};
const barato = precoDois < 200 ? true : "produto caro";
/* Funtions */
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
