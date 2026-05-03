import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
     
    baseURL: "https://skillsphere-project-phi.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()