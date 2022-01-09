Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método `appendChild` que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

* insertBefore(pai, filho): Coloca um nó antes do outro.
* replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
* removeChild(elemento): Remove um nó da árvore.