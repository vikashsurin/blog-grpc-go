import { writable } from "svelte/store";
import { Login } from './methods/auth'

export const authenticated = writable(false)


export const logIn = async (email, password) => {
    try {
        const token = await Login(email, password)
        console.log(token.getToken())
        localStorage.setItem("token", token.getToken())
        if (token) {
            authenticated.set(true)
            return true
        }
    } catch (error) {
        console.log(error)
    }
}