let $ = document

let listTodos = $.getElementById('list-group')
let iItem = $.getElementsByTagName('i')
let liItem = $.getElementsByTagName('li')
let inputTodo = $.getElementById('input')
let alertInput = $.getElementById('alert')
let emptyAlert = $.getElementById('div-empty')

alertInput.style.display = 'none'

inputTodo.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        if (inputTodo.value === '') {
            event.preventDefault()
            alertInput.style.color = '#DC3545'
            alertInput.style.display = 'block'
        } else {
            event.preventDefault()
            alertInput.style.display = 'none'
            let TodoListName = inputTodo.value
            let newliItem = $.createElement('li')
            newliItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
            newliItem.setAttribute('id', 'list-group-item')
            listTodos.append(newliItem)

            let newSpanItem = $.createElement('span')
            newSpanItem.innerHTML = TodoListName
            newliItem.append(newSpanItem)

            let newIconItem = $.createElement('i')
            newIconItem.setAttribute('class', 'fa fa-trash-o delete')
            newliItem.append(newIconItem)

            newIconItem.addEventListener('click', function (event) {
                let userAnswer = prompt('Are you sure to delete Todo? \n 1.Yes \n 2.No')

                if (userAnswer === '1') {
                    event.target.parentElement.remove()
                    if (listTodos.children.length > 2) {
                        emptyAlert.style.display = 'none'
                    } else {
                        emptyAlert.style.display = 'inline'
                    }
                }
            })
            inputTodo.value = ''

            emptyAlert.style.display = 'none'
        }
    }
})