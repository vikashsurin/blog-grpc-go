import { writable } from "svelte/store";
import { IsLoggedIn, Login } from '../methods/auth'

export const authenticated = writable(false)

export const user = writable({
    name: "",
    email: "",
})
export const logIn = async (email, password) => {
    try {
        const loginRes = await Login(email, password)
        console.log(loginRes.getToken(), loginRes.getFirstname())

        if (loginRes.getToken()) {
            authenticated.set(true)
            user.set({ name: loginRes.getFirstname(), email: email })
            console.log("user", user)
            return true
        }
    } catch (error) {
        console.log(error)
    }
}

export const getLoginState = async () => {
    try {
        const isLoggedIn = await IsLoggedIn()
        console.log("login State ", isLoggedIn.getIsloggedin())
    } catch (error) {
        console.log(error)
    }
}