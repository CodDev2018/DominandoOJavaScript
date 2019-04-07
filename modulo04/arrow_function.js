const obj = {
    test: "Teste no escopo do object"
};

(function (obj) {

    this.test = "Teste no escopo da function"

    //STATEMENT
    function statementFunction() {
        console.log(this.test)
    }

    //EXPRESSION
    const expressionfunction = function () {
        console.log(this.test)
    }

    //ARROW
    const arrowFunction = () => {
        console.log(this.test)
    }

    obj.statementFunction = statementFunction
    obj.expressionfunction = expressionfunction
    obj.arrowFunction = arrowFunction

}) (obj)

obj.statementFunction()
obj.expressionfunction()
obj.arrowFunction()