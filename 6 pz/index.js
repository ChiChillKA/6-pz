console.log("Задание 1")
let arr = [false, false, true, false, true, false, false, false, true, false]
let damag = false
for (let i = 0, x = 0; i < arr.length; ++i){
    if (arr[i]){ 
        if (damag){
            console.log(`танк уничтожен на позиции ${i+1}`)
            break
        }
        else{
            damag = true;
            console.log(`танк поврежден на позиции ${i+1}`)
        }
    } 
    else{
        console.log(`танк переместился на позицию ${i+1}`)
    }
}