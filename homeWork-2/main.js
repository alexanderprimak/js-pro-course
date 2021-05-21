                                                // Метод Find !!!!

function find (array , callback) {

    let res;

        for (let i = 0 ; i < array.length ; i++) {
        
        res = callback (array , i  , 1 ); 

            if(res) {

                return res ; 

            } else {

                continue;
            }

        }

}

function callbackFind(array , iter , value)  {
    
    if(array[iter] === value )  {
    
    return value;
    
} 

}
console.log(find([1,2,3] , callbackFind));





                                                        // Метод Filtr !!!!!

                                                        


function filtr (array , callback) {

    let res = [];

    for (let i = 0 ; i < array.length ; i++ ) {
        
        if ( callback (array , i , 18 )) {

        res.push(callback(array , i , 18 ))

        } else {

            continue;  
        }

    }

    return res ; 
}

function callbackFiltr (array , inter , value)  {
        
    if(array[inter].age > value)  {

        return array[inter] ;  
        
    }

}

console.log(filtr([{name:"alex" , age: 25} , {name:"Dima" , age:30} , {name:"Vald" , age:16}] ,  callbackFiltr ,  ));





                                                        // Метод  Map  !!!

                                    
function map (array , callback) {

    let res = [];

    for (let i = 0 ; i < array.length ; i++ ) {
        
        if ( callback (array , i , 2 )) {

        res.push(callback(array , i , 2 ))

        }

    }

    return res ; 
}

function callbackMap (array , inter , value)  {
        
    if(array[inter])  {

        return array[inter] * value ;  
        
    }

}

console.log(map([2,2,2,2,2,4,4,4,4,4,8,8,8,8,8,8] ,  callbackMap ,  ));





                                                        // Метод Every !!!

                                        
function every (array , callback) {


    let  res;

    for (let i = 0 ; i < array.length ; i++ ) {
        
        res = callback (array , i , "number");

        if (res === false) {

            break;
        }
    
}

    return res;

}

function callbackEvery (array , inter , value)  {
        
    if(typeof array[inter] === value)  {

        return true ;  
        
    } else {

        return false;

    }

};


console.log(every([2,3,4,5,7,10,9,0, 100 , 500 ,300] ,callbackEvery,));

console.log(every([2,3,4,5,7,"Alex",9,0,] ,callbackEvery,));




                                                // Метод Some !!!
        
                                                                    
function some (array , callback) {


    let  res;

    for (let i = 0 ; i < array.length ; i++ ) {
        
        res = callback (array , i , "number");

        if (res === true) {

            res = true

        } else { 

            res =  false;

            continue;

        }
    
    }

    return res;

}

function callbackSome (array , inter , value)  {
        
    if(typeof array[inter] === value)  {

        return true ;  
        
    } else {

        return false;

    }

};


console.log(some([2,3,4,5,7,"Alex",9,0,] ,callbackSome,));

console.log(some([2,3,4,5,7,10,9,0, 100 , 500 ,300] ,callbackSome,));

console.log(some(["Alex" , "Dima" , "Viktor" ] ,callbackSome,));

console.log(some(["Alex" , "Dima" , "Viktor" , 34] ,callbackSome,));






