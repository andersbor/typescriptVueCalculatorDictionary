var simpleDictionary: { [id: string]: number };

// https://stackoverflow.com/questions/13242656/typescript-higher-order-function-types
// https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript
var operations: { [id: string]: ((x: number, y: number) => number); } = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y
}

new Vue({
    el: '#app',
    data: {
        number1: 0,
        number2: 0,
        operation: '+',
        result: 0,
        expression: "",
        result2: 0,
        stack: ['2', '3', '+']
    },
    methods: {
        calculate(num1: number, operation: string, num2: number): void {
            switch (operation) {
                case "+":
                    this.result = num1 + num2;
                    break;
                case "-":
                    this.result = num1 - num2;
                    break;
                case "*":
                    this.result = num1 * num2;
                    break;
                case "/":
                    this.result = num1 / num2;
                    break;
            }
        },
        calculateByDictionary(num1: number, operation: string, num2: number): void {
            let oper = operations[operation]
            console.log("operation " + oper)
            this.result = oper(num1, num2)
        },
        calculate2(): void {
            //console.log(this.expression)
            this.result2 = eval(this.expression)
            //console.log(this.result2)
            while (this.stack.length > 1) {
                let element1 = this.stack.pop()
                if (element1 == "+") {
                    let operand1 = Number(this.stack.pop())
                    let operand2 = Number(this.stack.pop())
                    let result = operand1 + operand2
                    console.log(result)
                    this.stack.push(result)
                }
            }
        }
    }
})