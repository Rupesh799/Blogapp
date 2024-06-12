import Link from 'next/link'
import React from 'react'

const AuthLinks = () => {
    const status = "notauthenticated"
  return (
    
    <div>
        {status=== "notauthenticated" ? (
                <Link href="/login">Login</Link>
        ):(
            <>
            <Link href="/write">Write</Link>
            <span>Logout</span>
            </>
        )}
    </div>
  )
}

export default AuthLinks