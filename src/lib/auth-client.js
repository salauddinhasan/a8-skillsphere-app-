import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
     
    baseURL: "https://a8-skillsphere-app-mjfx.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()