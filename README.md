# TypeScript Basico

## Annotation(anotação)

### Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações

- `number:` representa um valor numérico.
- `string:` representa um valor de string.
- `boolean:` representa um valor booleano.
- `any:` representa qualquer valor e é o tipo padrão se nenhum tipo for especificado.
- `void:` representa uma função que não retorna nada.
- `null e undefined:` representam respectivamente valores nulos e indefinidos.
- `object`: representa um valor não primitivo, como um array, função ou objeto.
- `Array:` representa um array de um tipo específico, como Array<string> para um array de strings.
- `Tuple:` representa um array com um número fixo de elementos de tipos específicos, como [string, number] para um array com uma string seguida por um número.

## Inference (Inferência)

- O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado. Ou seja caso uma `const` seja declarada com um valor ja fixo "const produto = "seu produto", ele automaticamente define como `String`.
