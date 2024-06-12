let displayValue = '0';
        let firstNumber = null;
        let secondNumber = null;
        let currentOperator = null;

        const display = document.getElementById('display');
        const numberButtons = document.querySelectorAll('.number');
        const operatorButtons = document.querySelectorAll('.operator');
        const equalsButton = document.getElementById('equals');
        const clearButton = document.getElementById('clear');

        function updateDisplay() {
            display.textContent = displayValue;
        }

        function handleNumberClick(button) {
            if (displayValue === '0') {
                displayValue = button.textContent;
            } else {
                displayValue += button.textContent;
            }
            updateDisplay();
        }

        function handleOperatorClick(button) {
            if (firstNumber === null) {
                firstNumber = parseFloat(displayValue);
            } else if (currentOperator) {
                secondNumber = parseFloat(displayValue);
                firstNumber = operate(currentOperator, firstNumber, secondNumber);
                displayValue = firstNumber.toString();
            }
            currentOperator = button.textContent;
            displayValue = '0';
            updateDisplay();
        }

        function clearDisplay() {
            displayValue = '0';
            firstNumber = null;
            secondNumber = null;
            currentOperator = null;
            updateDisplay();
        }

        function handleEqualsClick() {
            if (currentOperator && firstNumber !== null) {
                secondNumber = parseFloat(displayValue);
                displayValue = operate(currentOperator, firstNumber, secondNumber).toFixed(3);
                displayValue = displayValue.toString();
                firstNumber = null;
                secondNumber = null;
                currentOperator = null;
                updateDisplay();
            }
        }

        function operate(operator, a, b) {
            switch (operator) {
                case '+':
                    return add(a, b);
                case '-':
                    return subtract(a, b);
                case '*':
                    return multiply(a, b);
                case '/':
                    return divide(a, b);
            }
        }

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }

        function divide(a, b) {
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        }

        function initialize() {
            numberButtons.forEach(button => {
                button.addEventListener('click', () => handleNumberClick(button));
            });

            operatorButtons.forEach(button => {
                button.addEventListener('click', () => handleOperatorClick(button));
            });

            equalsButton.addEventListener('click', handleEqualsClick);

            clearButton.addEventListener('click', clearDisplay);
        }

        initialize();