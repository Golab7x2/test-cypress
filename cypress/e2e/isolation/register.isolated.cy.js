/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('Login test in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
        cy.login('admin', "admin")
    })

    it('should register user', () => {
        const newUser = getRandomUser()

        cy.intercept('POST', '**/users/signup', (req) => {
            req.reply({
                statusCode: 201
            })
        })

        cy.get('#addmore').click()

        cy.get('[name=firstName]').type(newUser.firstName)
        cy.get('[name=lastName]').type(newUser.lastName)
        cy.get('[name=username]').type(newUser.username)
        cy.get('[name=password]').type(newUser.password)
        cy.get('[name=email]').type(newUser.email)

        cy.get('.btn-primary').click()


        cy.get('.alert-success').should('contain.text', 'Registration successful')
        cy.url().should('contain', '/')
    })

})
