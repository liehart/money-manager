import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import useUser from "../hooks/useUser"
import { sbClient } from "../lib/supabase"

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await sbClient.auth.signIn({ email })
      if (error) throw error
    } catch (e) {
      alert(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    handleLogin(email)
    event.preventDefault()
  }

  return (
    <div className="max-w-sm m-auto p-4">
      <div className="font-bold text-4xl mb-4">Log In</div>
      <div>
        Please login to your account.
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id="email"
            labelText="Email"
            type="email"
            value={email}
            handleChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Send Magic Link ✨
        </Button>
      </form>
    </div>
  )
}

export default Login
