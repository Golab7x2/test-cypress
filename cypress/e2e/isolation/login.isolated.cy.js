/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"
import { getUsersMocks } from "../../mocks/getUsers"
import { loginMocks } from "../../mocks/postSignIn"
import { loginPage } from "../../pages/loginPage"

describe('Login test in isolation', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should login user', () => {
        const fakeLoginResponse = getFakeLoginResponse()

        loginMocks.mockSuccess(fakeLoginResponse)

        getUsersMocks.mockUsers()

        loginPage.attemptLogin('admin', 'admin')

        cy.get('h1').should('contain.text', fakeLoginResponse.firstName)
    })

    it('should fail to login', () => {
        const message = "Invalid username/password supplied"
        loginMocks.mockFailure(message)

        loginPage.attemptLogin('invalid', 'invalid')

        cy.get('.alert-danger').should('be.visible')
        cy.get('.alert-danger').should('contain.text', message)
    })
})
