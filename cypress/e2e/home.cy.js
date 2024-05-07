/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"

describe('Homepage tests', () => {
    let token;
    let user;

    beforeEach(() => {

        // cy.get('[name=username]').type('admin')
        // cy.get('[name=password]').type('admin')
        // cy.get('.btn-primary').click()
        
        user = getRandomUser()
        cy.register(user)
        cy.login(user.username, user.password)
       
        cy.getCookie('token').then(cookie => token = cookie.value)
        //cy.login('admin', 'admin')

    })

    afterEach(() => {
        cy.deleteUser(user.username, token)
    })

    it('display at least one user', () => {
        cy.get('ul li')
            .should('have.length.at.least', 1)
    })

    it('should logout', () => {
        cy.get('#logout').click()
        cy.get('h2').should('have.text', 'Login')
        cy.url().should('contain', '/login')
    })

    it('should open add more user page', () => {
        cy.get('#addmore').click()
        cy.get('h2').should('have.text', 'Register')
        cy.url().should('contain', '/add-user')
    })


})
