// import { writable } from "svelte/store";
import { createUser } from './methods/user'



export const createUsers = async (userData) => {
    try {
        const res = await createUser(userData)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}