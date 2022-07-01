import type { NextPage } from "next"
import { useRouter } from "next/router"
import React, { Component, useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import { sbClient } from "../lib/supabase"

const Home: NextPage = () => {
  const router = useRouter()
  const { user, loading, token } = useUser()
  const [accountGroupType, setAccountGroupType] = useState<any>([])

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      sbClient
        .from("account_group_types")
        .select("*")
        .then(({ data, error }) => {
          if (!error) {
            setAccountGroupType(data)
          }
        })
    }
  }, [user])

  const handleLogout = async () => {
    try {
      const { error } = await sbClient.auth.signOut()
      if (error) throw error
    } catch (e) {
      alert(e)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="max-w-screen-lg m-auto">
        <div>Hello World!</div>
        <div>{user?.email}</div>
        <div>
          <button onClick={handleLogout}>Log Out</button>
        </div>
        <div>
          {accountGroupType.map((data: any) => (
            <div key={data.id}>{data.name}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
