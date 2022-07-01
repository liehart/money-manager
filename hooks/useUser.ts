import { User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { sbClient } from "../lib/supabase"

const useUser = () => {
  const [user, setUser] = useState<User|null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<string|null>(null)

  useEffect(() => {
    const sbSession = sbClient.auth.session()

    if (sbSession?.user?.id) {
      setUser(sbSession.user)
      setToken(sbSession.access_token)
    }

    setLoading(false)

    sbClient.auth.onAuthStateChange((_event, session) => {
      if(session?.user?.id) {
        setUser(session.user)
        setToken(session.access_token)
      }
      setLoading(false)
    })
  }, [])

  return {
    user,
    loading,
    token
  }
}

export default useUser