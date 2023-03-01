let a:unknown;

if(typeof a=== 'number'){
    let b = a + 1
    b
}

else if(typeof a === "string"){
    let b = a.toUpperCase
    b
}
function hello() {
    console.log('x')
}
// void = 비어있음 type 정의가 되지 않았다면 ts에서 알려줌.

function cmh():void{
    console.log('x')
}
const cmh2 = cmh();
cmh2.toUpperCase()

// void return만 함

function test2(name:string|number){
    if(typeof name === "string"){
        name
    } else if (typeof name === "number"){
        name
    }
    else {
        name
}
}
// test2의 파라미터 = string or number if string = good / number = good / type이 정의되지 않은 else name:never 

function test1():never {
    throw new Error("test")
}

// never: 잘 사용하지는 않으나 알아두면 좋음 never= no return하지 않고 오류발생가능