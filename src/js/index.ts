new Vue({
    el: '#app',
    data: {
        number1: 0,
        number2: 0,
        operation: '+',
        result: 0
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
        }
    }
})