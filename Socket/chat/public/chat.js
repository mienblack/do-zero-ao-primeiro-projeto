const room = window.location.pathname.replace(/\//g, '')
const socket = io(`http://localhost:3000/${room}`)

let user = ''

socket.on('update_messages', (messages) => {

    updateMessagesOnScreen(messages)
})

function updateMessagesOnScreen(messages) {
    const divMessages = document.querySelector('#div_messages')
    let listMessages = '<ul>'
    messages.forEach(message => {
        listMessages += `<li>${message.user}: ${message.msg}</li>`
    })
    listMessages += '</ul>'

    divMessages.innerHTML = listMessages
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#message_form')
    form.addEventListener('submit', (e) => {

        if (!user) {
            alert('Defina um usuário')
            return
        }

        e.preventDefault()
        const message = document.forms['message_form']['msg'].value
        document.forms['message_form']['msg'].value = ''
        socket.emit('new_message', { user: user, msg: message })
        console.log(message)
    })

    const userForm = document.querySelector('#user_form')
    userForm.addEventListener('submit', (e) => {
        e.preventDefault()
        user = document.forms['user_form']['user'].value
        userForm.parentNode.removeChild(userForm)
    })
})