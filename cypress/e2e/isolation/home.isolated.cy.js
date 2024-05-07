/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"
import { getUsersMocks } from "../../mocks/getUsers"


describe('home isolated tests', () => {

    it('should display homepage', () => {
        const user = getFakeLoginResponse()
        cy.setCookie('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))

        getUsersMocks.mockUsers()

        cy.visit('')
        
        cy.get('li').should('have.length.at.least', 1)
    })

})
