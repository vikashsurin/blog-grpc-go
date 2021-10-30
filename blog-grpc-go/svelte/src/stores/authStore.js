import { writable } from "svelte/store";
import { IsLoggedIn, Login } from '../methods/auth'

/*
 *  checks if the user is loggedIn or not
 */

export const authenticated = writable(false)

// export const user = writable({
//     name: "",
//     email: "",
// })
export const logIn = async (email, password) => {
    try {
        const loginRes = await Login(email, password)

        if (loginRes.getToken()) {
            authenticated.set(true)
            // user.set({ name: loginRes.getFirstname(), email: email })
            return true
        }
    } catch (error) {
        console.log(error)
    }
}

export const getLoginState = async () => {
    try {
        const isLoggedIn = await IsLoggedIn()
        authenticated.set(true)
    } catch (error) {
        console.log(error)
    }
}