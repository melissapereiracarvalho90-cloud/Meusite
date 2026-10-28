//Array
const protudos=["Arros 5kg",24.90,"Mercearia"]

//objeto ou lista para quem veio do pyton
//chave / index: valor / resultado

console.log(protudos[0])
console.log(protudos[1])
console.log(protudos[2])

const produtos= [ 
    {
    nome:"Arroz 5kg",
    preco:25.90,
    categoria:"Mercearia"
},

 {
    nome:"2kg de linguiça",
    preco:40.00,
    categoria:"frios"
},

{
    nome:"Suco natural de maracuja 2L",
    preco:23.99,
    categoria:"Mercearia"
}]

const valoresProduto = produtos.map((produto)=>produto.preco)
const menorValor = Math.min(...valoresProduto)
const produtoMenorValor = produtos.filter((produto)=>produto.preco == menorValor)
console.log(produtoMenorValor)

const produtoencontrado = produtos.find((produto)=>produto.nome =="2kg de linguiça")
console.log(produtoencontrado)

const somaPrecoProdutos = protudos.reduce((total,produto)=>total + produto.preco,0)
console.log(somaPrecoProdutos)

const produtoString = JSON.stringify(produtos)
localStorage.setItem("Produtos",produtoString)

console.log(produtosLocalStorage)


const listProjetos = document.getElementById("lista-produtos")
listProjetos.innerHTML=produtosLocalStorage.map((produto)=>
    <article>
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <p> {produto.categoria}</p>
    </article>).join("")
