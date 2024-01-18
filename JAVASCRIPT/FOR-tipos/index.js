/* Tipos de for */

// - Certamente, vou explicar cada tipo de loop for mais detalhadamente.

// For tradicional

/*

for (inicialização; condição; incremento/decremento) {
    // Código a ser executado
}

*/

/*

- Inicialização: Geralmente é usado para iniciar uma variável de controle.

- Condição: Define a condição que precisa ser verdadeira para continuar a execução do loop.

- Incremento/Decremento: Geralmente é usado para aumentar ou diminuir o valor da variável de controle.

*/

//exemplo: abaixo!

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - A seguir temos um exemplo simples de um loop for que imprime os números de 1 a 5:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



/*

Neste exemplo:

- Inicialização: let i = 1; - Inicializa a variável i com o valor 1.

- Condição: i <= 5; - O loop continuará enquanto a variável i for menor ou igual a 5.

- Incremento: i++ - Incrementa a variável i após cada iteração.


O resultado será:

1
2
3
4
5

- Você pode ajustar a inicialização, condição e incremento/decremento para
atender às necessidades específicas do seu código.
 
- O for é uma ferramenta poderosa para controlar fluxos de repetição em JavaScript.

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  FOR IN:

const objeto = { a: 1, b: 2, c: 3 };
for (const propriedade in objeto) {
    console.log(propriedade, objeto[propriedade]);
}

/* - O loop for/in itera sobre as propriedades enumeráveis de um objeto.
   - Cada iteração fornece o nome da propriedade.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  FOR OFF:

const array = [1, 2, 3, 4, 5];
for (const elemento of array) {
    console.log(elemento);
}


/* - O loop for/of itera sobre os valores de objetos iteráveis, como arrays, strings ou objetos Map/Set.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  For Each (Método de Array):

const array = [1, 2, 3, 4, 5];
array.forEach(function(elemento) {
    console.log(elemento);
});

/*
    -Embora não seja um loop for tradicional,
     o método forEach de arrays é uma alternativa para iterar sobre elementos de um array.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do/While:

let i = 0;
do {
    console.log("Iteração", i + 1);
    i++;
} while (i < 5);

/*
    -O loop do/while executa o código pelo menos uma vez e, em seguida, verifica a condição.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// While:

let i = 0;
while (i < 5) {
    console.log("Iteração", i + 1);
    i++;
}

/*
    - O while é uma estrutura de controle de fluxo em JavaScript que permite executar
      um bloco de código enquanto uma condição específica for verdadeira. 

    - Sua sintaxe básica é a seguinte:

*/

/*
    A condição ( i < 5 ):

    - Condição: A expressão condicional é avaliada antes da execução do bloco de código.
    
    - Se a condição for verdadeira, o bloco de código dentro do while é executado.
    
    - Se a condição for falsa desde o início, o bloco de código nunca será executado.

*/

    Vamos ver um exemplo prático para entender melhor como o while funciona:

    let contador = 0;

    while (contador < 5) {
     console.log("Iteração", contador + 1);
     contador++;
}

/*
    - Inicialização: let contador = 0; - Inicia a variável contador com o valor 0.

    - Condição: contador < 5; - O bloco de código é executado enquanto contador for menor que 5.

    - Bloco de Código: console.log("Iteração", contador + 1); - Imprime o número da iteração.

    - Alteração da Condição: contador++; - Incrementa o valor da variável contador após cada iteração.

*/

resultado:

Iteração 1
Iteração 2
Iteração 3
Iteração 4
Iteração 5


-Após a quinta iteração, a condição contador < 5 se torna falsa, e o loop while é encerrado.
 O while é útil quando você não sabe antecipadamente quantas iterações serão necessárias e 
 a condição de parada é baseada em alguma lógica específica.