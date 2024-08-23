# DDD ( Domain-Driven Design )

Design dirigido à domínio

## Domínio

> Entidades

* Usuário ✅
* Produto ✅
* Estoque ✅
* Historico-de-vendas ✅
* Vendas ✅
* Historico-do-estoque ✅
* Ordens de serviço ✅
* Fornecedor ✅

> Casos de Uso

* rastreamento-de-produto-use-case ✅
* definir-quantidade-minima-no-estoque-use-case ✅
* receber-alerta-quando-o-produto-estiver-pouco-use-case ✅
* visualizar-historico-de-vendas-use-case ✅
* visualizar-historico-do-estoque-use-case ✅
* definir-id-no-produto-use-case ✅
* definir-caracteristicas-extras-do-produto-use-case ✅
* definir-limite-minimo-do-produto-use-case ✅
* definir-limite-maximo-do-produto-use-case ✅
* verificar-estoque-use-case ✅
* solicitar-compra-de-produtos-use-case ✅
* notificar-solicitacao-de-compra-de-produtos-use-case ✅
* visualizar-produtos-vendidos-use-case ✅
* visualizar-lucro-gerado-dos-prdutos-use-case ✅
* visualizar-tendencia-do-estoque-no-periodo-use-case ✅
* criar-ordens-de-compra-use-case ✅
* deletar-ordens-de-compra-use-case ✅
* alterar-ordens-de-compra-use-case ✅
* visualizar-ordens-de-compra-use-case ✅
* solicitar-ordens-de-compra-de-produtos-automaticamente-use-case ✅
* receber-atualizacao-de-data-de-entrega-de-produtos-dos-fornecedores-use-case ✅



### Explicação

> Boa parte das entidades podem ser identificadas na entrevista como Sujeitos e/ou predicativo do sujeito exemplo: 

```javascript
    // -> Precisamos de uma solução que nos permita rastrear cada produto individualmente
```

> Eliminando os termos desnecessários ou que não impactam direito a aplicação temos 

```javascript
    // (Nós, usuários ) Rastrear cada produto individualmente
```

> Portanto temos o `Usuario` e `Produto` como entidades.

> Ainda Utilizando a mesma lógica e exemplo podemos analisar os verbos como casos de uso, como no exemplo

```javascript
    // (Nós, usuários ) Rastrear cada produto individualmente
```

> O verbo `Rastrear` que irá orquestrar esse caso de uso envolvendo as duas entidades `Usuario` e `Produto`. sendo assim temos o caso de uso `track-product-use-case.ts`

> Para as demais entidades e casos de uso basta aplicar a memsa lógica, exceto para os casos em que os casos de uso e entidades não ficam explícita na entrevisa como Ordens de serviço, vendas e histórico de vendas, elas são citadas na entrevista de forma bem resumida, porém quando analisada a aplicação é notorio a necessidade dessas entidades.