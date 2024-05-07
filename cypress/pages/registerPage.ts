import { User } from "../types/user"

export const registerPage = {

    attemptRegister: (newUser: User) => {
        cy.get('[name=firstName]').type(newUser.firstName)
        cy.get('[name=lastName]').type(newUser.lastName)
        cy.get('[name=username]').type(newUser.username)
        cy.get('[name=password]').type(newUser.password)
        cy.get('[name=email]').type(newUser.email)
        cy.get('.btn-primary').click()
    }

}