// Logic
// 1.if letter have value lessthan next one then subtract 
// 2.if letter have vaule morethan next one then plus 

// we should do map and then loop thru and then check if it less or more 

function test(str){
    // symbol and value map
    const check = {
        "A" : 1,
        "B" : 5,
        "Z" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "R" : 1000
    }

    let sum = 0;
    let passNext = false;
    
    for(let i =0; i < str.length ; i++){
        //if before is less than next then it both will subtract 
        if(check[str[i]] < check[str[i+1]]){
            let tmp =  check[str[i+1]] - check[str[i]]
            sum += tmp;
             //that means next will gone so I set passNext to be true
            passNext = true;
        }else {
            //if next gone then I'm not going to calculate it since I already subtract both of them 
            //if passNext false then plus its value 
            if(!passNext){
                sum += check[str[i]];
            }
            //default next to false 
            passNext = false;
        }
    }
    console.log('test', sum);
 
}

test("ZZBAA")
