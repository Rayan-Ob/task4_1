var array = [];
        for(let i=0;i<10;i++){
            array[i]=Math.floor(Math.random()*1000);
        }
        var sum = 0;
        var submit = 0;

        for(var index = 0; index < 10; index++){
            if(array[index] % 2 == 0){
                 sum = sum + array[index]
            }

            if(index < 5){
                submit = submit + array[index];
            }
        }
        document.writeln("The array is : [")
        document.writeln(array);
        document.writeln("]" +"<br>");

        document.writeln("The sum of even numbers in array is: ")
        console.log(sum);
        document.writeln (sum +"<br>"); 

        document .writeln("The sum of numbers whose index < 5 :")
        console.log(submit);
        document.writeln(submit +"<br>");
        document.write("<br>")
        


        // end part one

        // start part two (object)

        var object ={
            name: "Nour",

            mobile: "0877777344",

            age: 23,

            mail: "nour95@gmail.com",
        }

        console.log(object);

        console.log(object.name);
        console.log(object.mobile);
        console.log(object.age);
        console.log(object.mail);


        document.writeln("The object is : <br>")

        
        document.writeln(object + "<br>");
        document.writeln(JSON.stringify(object) +"<br>");
        document.writeln("name:")
        document.write(object.name +"<br>");

        document.writeln("mobile:")
        document.write(object.mobile +"<br>");

        document.writeln("age:")
        document.write(object.age +"<br>");

        document.writeln("mail:")
        document.write(object.mail );
       
       
       
       