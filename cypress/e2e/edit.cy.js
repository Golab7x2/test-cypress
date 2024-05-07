/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"

describe('Edit user tests', () => {
    let token;
    let user;

    beforeEach(() => {
        
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
       
        cy.getCookie('token').then(cookie => token = cookie.value)

    })

    afterEach(() => {
        cy.deleteUser(user.username, token)
    })

    it('checks if users data are autofilled correctly', () => {
        cy.get('ul li')
            .should('have.length.at.least', 1)

        cy.contains(`${user.firstName} ${user.lastName}`).find('.edit').click()

        cy.get('[name=firstName]').should('have.value', user.firstName)
        cy.get('[name=lastName]').should('have.value', user.lastName)
        cy.get('[name=email]').should('have.value', user.email)
        cy.get('[name=username]').should('have.value', user.username)
        cy.get('[name=roles]').should('have.value', user.roles.join(','))
    })


})
