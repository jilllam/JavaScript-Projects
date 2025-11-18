//Create an object to keep track of values
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    //Checks if we are waiting for the second operand,
    //if so the new digit replaces the current display value
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overwrites display value if it is 0, otherwise concatenates the new digit
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    //If waiting for second operand, do not allow decimal yet
    if (Calculator.Wait_Second_Operand === true) return;

    //Checks if display value already has a decimal
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//Handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;

    const Value_Of_Input = parseFloat(Display_Value);

    //Checks if an operator exists and waiting for second operand
    //Updates operator and exits
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    //If first operand is null, set it to the input value
    if (First_Operand == null) {
        Calculator.First_Operand = Value_Of_Input;
    }
    //If operator already exists, perform a calculation
    else if (operator) {
        const Value_Now = First_Operand || 0;

        let result = Perform_Calculation[operator](Value_Now, Value_Of_Input);

        //Rounds results to 9 decimal places
        result = Number(result).toFixed(9);

        //Remove trailing zeros
        result = (result * 1).toString();

        Calculator.Display_Value = result;
        Calculator.First_Operand = parseFloat(result);
    }

    //Set waiting for next number and store operator
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//Actual calculations
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

//Resets calculator when AC button is clicked
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Updates the calculator screen with the contents of display value
function Updates_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Updates_Display();

//Monitors button clicks
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;

    //Ensures the click is on a button
    if (!target.matches('button')) return;

    //Handles operators
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Updates_Display();
        return;
    }

    //Handles decimal points
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Updates_Display();
        return;
    }

    //Handles all-clear button
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Updates_Display();
        return;
    }

    //Handles digits
    Input_Digit(target.value);
    Updates_Display();
});
