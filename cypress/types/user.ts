import { Roles } from "./roles";

export interface User {
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    roles: Roles[]
}