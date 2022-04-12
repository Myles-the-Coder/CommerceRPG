import react from 'react'
import {create} from "axios";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmZiNjBhYTQzODk0ZDE2MTAwNmIwZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgxNTg4NDUsImV4cCI6MTY0ODQxODA0NX0.PWWYXJ8MWM8YwQkl-WM7nXPjYP4935g3fFx6CUxYsI4'
const BASE_URL = "https://commerce-rpg.herokuapp.com/";
export const  publicRequest = create({
  baseURL: BASE_URL,
})

export const userRequest = create({
  baseURL: BASE_URL,
  headers: {token: `Bearer: ${TOKEN}`}
})

