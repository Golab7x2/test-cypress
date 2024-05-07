declare namespace Cypress {
    interface Chainable {
        /**
         * Logs in user with provided username and password via backend
         * @param username 
         * @param password 
         */
        login(username: string, password: string): void;

        /**
         * Registers new user via backend
         * @param user 
         */
        register(user: any): void;

        deleteUser(username: string): void;
    }
}