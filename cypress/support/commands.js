Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username,
            password
        }
    })
        .then((resp) => {
            localStorage.setItem('user', JSON.stringify(resp.body))
            cy.setCookie('token', resp.body.token)
        })

    cy.visit('http://localhost:8081')
})

Cypress.Commands.add('register', (user) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup',
        body: user
    })
})

Cypress.Commands.add('deleteUser', (username, token) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:4001/users/${username}`,
        auth: {
            bearer: token
        }
    })
})