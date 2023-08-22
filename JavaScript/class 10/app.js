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
}

function deleteli(e){
    e.parentNode.remove()
}

function deleteall(){
    ul.innerHTML = ''
}


























