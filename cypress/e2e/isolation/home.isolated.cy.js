/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"


describe('home isolated tests', () => {

    it('should display homepage', () => {
        const user = getFakeLoginResponse()
        cy.setCookie('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))

        cy.intercept('GET', '**/users', { fixture: 'users.json' })

        cy.visit('http://localhost:8081')
        
        cy.get('li').should('have.length.at.least', 1)
    })

})
