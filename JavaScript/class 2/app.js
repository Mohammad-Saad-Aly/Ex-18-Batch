// var num1 = 'ab'
// var num2 = 20
// var res = num1 + num2
// document.write(res)

// var num1 = 10

// ++num1
// document.write(num1)  ==> 11

// num1++ 
// num1
// document.write(num1)   ===> 11


// num++ =  post inc
// ++num =  pre inc

// var num1 = 5
// var res = num1++ + num1++ + num1++ + ++num1 + num1
//             // 5    +  6 +   7     +  9     +  9
// document.write(res)

// var num1 = 3
// var res = ++num1 + num1++ + num1 + ++num1 + num1++

// document.write(res)


// var num1 = 5
// var num2 = 10
// var res = --num2 + --num1 + ++num2 + num1 + num2-- + num1++
// 9    +   4    +    10  +  4   +  10    +  4
41
// document.write(res+"<br>")


// var num = 3
// var num3 = 5
// var ress = num++ + ++num3 - num3 + num3++ - --num3 - --num
// 3    +   6    -  6   +  6     -   6    -   3
0
// document.write(ress)

// var num1 = 3
// var num2 = 4
// var num3 = 0
// var num4 = -2
//  7 -3

// var res = num1 + num2++ - ++num3  + num3++ + --num4
// 3  +  4     -   1     +  1     +   -3

// document.write(res)

// num++
// num + 1

// var num1 = 5
// var num2 = 10

// var eq = num1 + num2 * 4 / (num1 + num2)
//                             //  5 + 2.6
//     document.write(eq.toFixed(2))



// chapter 9 
// prompts

// var abc = +prompt("Enter value 1")
// var abc1 = +prompt("Enter value 2")
// document.write(typeof(abc) )
// var msg = 'Enter value 1'
// var abc = prompt(msg)

// if(abc == 2){
//     document.write('han value 2 hai')
// }
// else{
//     document.write('value galat hai')
// }

// var num1 = +prompt('Enter value 1')
// var num2 = +prompt('Enter value 2')
// var check = prompt('Enter Sign')

// if(check == '+'){
//     document.write(num1 + num2)
// }
// if(check == '-'){
//     document.write(num1 - num2)
// }
// if(check == '*'){
//     document.write(num1 * num2)
// }
// if(check == '/'){
//     document.write(num1 / num2)
// }
// if(check == '%'){
//     document.write(num1 % num2)
// }


// == value check 
// === value k sath datatype bhi check karega
// != Not 
// > greater than
// < less than
// >= greater than and equal to
// <= less than and equal to

{/* var num1 = '5'
var num2 = 5

document.write(num1 !== num2) */}

var userInput = +prompt('Enter Your Percentage')

if (userInput >= 80 ) {
    document.write('A+')
}

else if (userInput >= 70) {
    document.write('A')
}
else if (userInput >= 60) {
    document.write('B')
}

else if (userInput >= 50) {
    document.write('c')
}

else if (userInput >= 40) {
    document.write('D')
}

else if (userInput < 40) {
    document.write('Fail')
}












































