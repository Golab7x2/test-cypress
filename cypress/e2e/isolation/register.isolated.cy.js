/// <reference types="cypress" />

import { alerts } from "../../components/alerts"
import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/postSignUp"
import { registerPage } from "../../pages/registerPage"

describe('Login test in isolation', () => {
    beforeEach(() => {
        cy.login('admin', "admin")
        cy.visit('/register')
    })

    it('should register user', () => {
        const newUser = getRandomUser()
        const message = 'Registration successful'

        registerMocks.mockSuccess()


        registerPage.attemptRegister(newUser)


        alerts.verifySuccess(message)
    })

})
