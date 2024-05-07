/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"

describe('Login test in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should login user', () => {
        const fakeLoginResponse = getFakeLoginResponse()

        cy.intercept('POST', '**/users/signin', (req) => {
            req.reply({
                statusCode: 200,
                body: fakeLoginResponse
            })
        })

        cy.intercept('GET', '**/users', { fixture: 'users.json' })

        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('admin')
        cy.get('.btn-primary').click()

        cy.get('h1').should('contain.text', fakeLoginResponse.firstName)
    })

    it('should fail to login', () => {
        const message = "Invalid username/password supplied"
        cy.intercept('POST', '**/users/signin', (req) => {
            req.reply({
                statusCode: 422,
                body: {
                    timestamp: "2024-05-06T15:43:01.485+00:00",
                    status: 422,
                    error: "Unprocessable Entity",
                    message: message,
                    path: "/users/signin"
                }
            })
        })

        cy.get('[name=username]').type('invalid')
        cy.get('[name=password]').type('invalid')
        cy.get('.btn-primary').click()

        cy.get('.alert-danger').should('be.visible')
        cy.get('.alert-danger').should('contain.text', message)
    })
})
