// var userinp = prompt('Enter name')
// var arr = ['pakistan','india','england']
// var match = false
// for(var i =0; i < arr.length; i++){
//     if(userinp === arr[i]){
//         match = true
//         alert('City Found')
//         break
//     }
// }

// if(match == false){
//     alert('Not Found')
// }

// var userinp = prompt('Enter city name')
// var up = userinp.slice(0,1).toUpperCase()
// var lo = userinp.slice(1).toLowerCase()
// var conc = up+lo

// var arr = ['Karachi','Faisalabad','Lahore','Islamabad','Murree']
// var match = 'saad'
// for(var i=0; i < arr.length; i++){
//     if(conc == arr[i]){
//         match = 'umair'
//         alert('City Found')
//         break
//     }
// }
// if(match == 'saad'){
//     alert('City not found')
// }

// var naam = 'UMAIR'
// var naam2 = naam.toLowerCase()
// console.log(naam2)



// var abc = 'kArAChi'

// var abc2 = abc.slice(0,1)
// var abc3 = abc2.toUpperCase()
// var abc4 = abc.slice(1)
// var abc5 = abc4.toLowerCase()
// document.write(abc3+abc5)


// var abc = 'hello world hello world'
// var abc2 = abc.replace(/world/g,'Pakistan')
// console.log(abc2)





// var num = 56.1
// var num2 = Math.ceil(num)
// console.log(num2)

// var abc = Math.random() * 10
// console.log(abc)

var heads = prompt('Enter heads name')
var tails = prompt('Enter tails name')
var toss = Math.random() * 2
var abc = Math.floor(toss)
if(abc == 0){
    document.write(heads+" wins")
}
else{
    document.write(tails+" wins")
}








































