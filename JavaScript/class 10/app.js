// function abc(){
//     document.getElementById('inp').setAttribute('class','btn btn-primary')
// }

var ul = document.getElementById('ul')

function addtodo(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    ul.appendChild(li)
    a.value = ''
    var deleteBtn = document.createElement('button')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute('onclick','deleteli(this)')
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick','editfun(this)')
    deleteBtn.setAttribute('class','btn btn-danger edit')
    editBtn.setAttribute('class','btn btn-info edit')
}

function deleteli(e){
    e.parentNode.remove()
}

function deleteall(){
    ul.innerHTML = ''
}

function editfun(e){
    var a = prompt('Enter updated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}







// var arr = [
//     {
//         pid: "01",
//         pname: 'Samsung',
//         p_des: 'Hello world',
//         p_img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
//     },
//     {
//         pid: "02",
//         pname: 'Motorola',
//         p_des: 'Hello world',
//         p_img: 'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png'
//     },
//     {
//         pid: "03",
//         pname: 'Samsung',
//         p_des: 'Hello world',
//         p_img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
//     }

// ]


// arr.map(element => {
//     return `
//     <div>
//     ${element.pid}
//     // <p>ID: ${element.pid}</p>
//     // <p>Name: ${element.pname}</p>
//     // <p>DES: ${element.p_des}</p>
//     // <img src=${element.p_img}>
//     // </div>
//     `
// });



// var pid = document.getElementById('pid').innerHTML = arr[0].pid
// var pdes = document.getElementById('pdes').innerHTML = arr[0].p_des
// var pname = document.getElementById('pname').innerHTML = arr[0].pname
// var pimg = document.getElementById('img').src = arr[0].p_img





















