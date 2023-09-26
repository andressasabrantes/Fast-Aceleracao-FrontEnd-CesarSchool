// Tipos Básicos

// Números inteiros ou de ponto flutuante
let age: number = 30;

// Cadeias de caracteres
let user: string = "John";

// Valores verdadeiros ou falsos
let isActive: boolean = true;

// Tipos especiais: null e undefined
let nullableValue: null = null;
let undefinedValue: undefined = undefined;

// Função que não retorna valor (void)
function logMessage(): void {
    console.log("Hello");
}

// Tipos Avançados

// Arrays tipados de números
let numbers: number[] = [1, 2, 3];

// Tuplas: array com tipos específicos e número fixo de elementos
let person: [string, number] = ["John", 30];

// Enum: conjunto de valores nomeados
enum Color { Red, Green, Blue };
let color: Color = Color.Red;

// Any: aceita qualquer tipo, evite quando possível
let dynamicValue: any = "dynamic";

// Object: representa qualquer objeto JavaScript
let genericObject: object = { key: "value" };
