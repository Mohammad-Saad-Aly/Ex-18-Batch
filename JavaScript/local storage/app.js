// var obj = {
//     firstName : 'Saad',
//     lastName : 'Ali',
//     age: 23,
//     roll : 'CSC-088'
// }
// for(var key in obj){
//     document.write(obj[key],"<br>")
// }

// for(var key in obj){
//     document.write(key + " : " + obj[key],"<br>")
// }



// document.write(obj)


// document.write(obj.age,obj.firstName)


// var arr = []
// arr[0] = 'Saad'


// var obj = {}

// obj.name = 'Saad'
// obj.age = 23

// document.write(obj.name)

// localStorage.setItem('name','Saad')
// localStorage.clear()

// sessionStorage.setItem('name','Alizey')


function signup(){
    var a = document.getElementById('signup-email')
    var b = document.getElementById('signup-pass')
    localStorage.setItem('Email',a.value)
    localStorage.setItem('Password',b.value)
}


function signin(){
    var a = document.getElementById('signin-email')
    var b = document.getElementById('signin-pass')

    if(a.value == localStorage.getItem('Email') && b.value == localStorage.getItem('Password')){
        alert('Han bhai login hogaya')
        location.href = './dashboard.html'
    }
    else{
        alert('Jaa beta sign up kar k aaao')
    }
    
}




















