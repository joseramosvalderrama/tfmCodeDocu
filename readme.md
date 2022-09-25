# Formas de programar orientado a objetos en JS

## Clousure
- Permite encapsular atributos

## Factory
- Permite encapsular métodos

## Constructor
- Construcción con new

## Constructor (Prototype)
- Facilita la herencia, pero impide utilizar clousures o factorías para encapsular.


# Propuesta (index.js y proposal_class)
Usar los modulos de Javascript de la forma en la que se sugiere en:  [Stop-using-javascript-classes](https://medium.com/giant-machines/stop-using-javascript-classes-d0b6890ef097)

De esta forma, se usa clousure para encapsular atributos y métodos (aunque realmente son funciones que modifican los valores de los atributos). La forma de escribir es la más simple de todas y la identación queda al mismo nivel que tendríamos en un lenguaje como Java. Es cierto que no se podrían exponer atributos de forma pública pero no es algo determinante a la hora de implementar patrones de diseño.

