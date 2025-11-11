import { useState } from 'react'
import './App.css'
import { SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';



function App() {


  return (
    <>
      <h1>Welcome</h1>
     < SignedOut>
      <SignInButton mode='modal'/>
     </SignedOut>
     <SignInButton>
        <UserButton />
     </SignInButton>

    </>
  )
}

export default App
