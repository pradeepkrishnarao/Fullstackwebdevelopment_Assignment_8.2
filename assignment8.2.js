/* prepareFood function has three parameters that includes a callbackfunction which are not initialized with any values */
    function prepareFood(Table_number,Items,callbackAfterfoodprepared){    
        console.log("Preparing food for items: - "+"",Items); //inorder to achieve the expected output an empty string precedes the Items variable
        callbackAfterfoodprepared(Table_number,Items);
    }
/* prepareFood function has two parameters which are not initialized with any values */
    function serveFood(Table_number,items){
        console.log("Serving food for items: - "+"",items); //inorder to achieve the expected output an empty string precedes the items variable
    }
        var Table_number=5;
        var Items=['Burger','pasta','coke'];
/* prepareFood function is passed with initialized parameters Table_number and Items, and serveFood function */
        prepareFood(Table_number,Items,serveFood);