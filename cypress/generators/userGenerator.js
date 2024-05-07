export const getFakeLoginResponse = () => {
    return {
        username: generateRandomString(8),
        firstName: generateRandomString(8),
        lastName: generateRandomString(8),
        email: `${generateRandomString(8)}@ergo.com`,
        roles: ['ROLE_ADMIN', 'ROLE_CLIENT'],
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE3MTQ5OTQ4MTcsImV4cCI6MTcxNDk5NTExN30.cHGCFAtP2O_T3tPWwDnWtW9nEUGv9pW_90em2W4IZrU'
    }
}

export const getRandomUser = () => {
    return {
        firstName: generateRandomString(8),
        lastName: generateRandomString(8),
        username: generateRandomString(8),
        password: generateRandomString(8),
        roles: ['ROLE_ADMIN', 'ROLE_CLIENT'],
        email: `${generateRandomString(8)}@ergo.com`,
    }
}


const generateRandomString = (length) => {
    return Array(length)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2)).join('');
}
