// var arr = [2, 3234, 3445, 34, 5, 242, 3434, 5, 456, 3, 4234, 54, , 6734, 43, 23, 4332, 3, 44, 4324, 32]

// var a = arr.filter(function(e){
//     return e > 500
// })

// console.log(a)

// var arr = [34, 45, 22, 567, 34, 52, 67]

// arr.map(function(r){
//     console.log(r)
// })


// var arr = [
//     {
//         ques : 'What is HTML ?',
//         opt1 : 'hyper text markup language',
//         opt2 : 'hyper tags markup language',
//         opt3 : 'hyper text makeup language',
//         opt4 : 'hyper text markup hhh',
//         correctAns : 'hyper text markup language'
//     },
//     {
//         ques2: 'What is the sum of 2 + 2',
//         opt1: '2',
//         opt2 : '3',
//         opt3 : '4',
//         opt4 : 'Chaar',
//         correctAns: '4'
//     },
    
// ]

// document.write(arr[0].ques)

// var products = [
//     {
//         p_id : '01',
//         p_name : 'Samsung',
//         p_des : 'hello world',
//         p_img : 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164425729/pk-feature-galaxy-s-535504874?$FB_TYPE_A_MO_JPG$'
//     },
//     {
//         p_id : '02',
//         p_name : 'Motorola',
//         p_des : 'hello world',
//         p_img : 'https://images.priceoye.pk/motorola-moto-e30-pakistan-priceoye-k7w2e.jpg'
//     },
//     {
//         p_id : '03',
//         p_name : 'iphone',
//         p_des : 'hello world',
//         p_img : 'https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan_14c67167-da6a-4c9b-b11f-92ffdece657f.png?v=1685968147&width=533'
//     },
    
// ]
// var a = document.getElementById('abc')
// products.forEach(function(elem){
//     var p = document.createElement('p')
//     var pid = document.createTextNode(elem.p_id)
//     p.appendChild(pid)
//     a.appendChild(p)

//     var p1 = document.createElement('p')
//     var pname = document.createTextNode(elem.p_name)
//     p1.appendChild(pname)
//     a.appendChild(p1)

//     var p3 = document.createElement('p')
//     var pdes = document.createTextNode(elem.p_des)
//     p3.appendChild(pdes)
//     a.appendChild(p3)

//     var img = document.createElement('img')
//     img.setAttribute('class','iii')
//     img.setAttribute('src',`${elem.p_img}`)
//     a.appendChild(img)

// })

// var a = 'ABCD'
// var b = 'GHI'
// var c = 'JKL'

// document.write(`This is ${a} and  ${b}`)

// document.write('This is '+a+' hello world')

// var abc = document.getElementById('abc')
// var inp = document.createElement('input')
// var typee = inp.setAttribute('type','radio')
// var label = document.createElement('label')
// var labelText = document.createTextNode('Male')
// label.appendChild(labelText)
// abc.appendChild(label)
// abc.appendChild(inp)