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
        calculate: function () {
            switch (this.operation) {
                case "+":
                    this.result = this.number1 + this.number2;
                    break;
                case "-":
                    this.result = this.number1 - this.number2;
                    break;
                case "*":
                    this.result = this.number1 * this.number2;
                    break;
                case "/":
                    this.result = this.number1 / this.number2;
                    break;
            }
        },
        calculate2: function () {
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