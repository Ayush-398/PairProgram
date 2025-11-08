import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';



function App() {


  return (
    <>
      <h1>Welcome</h1>
     < SignedOutButton>
      <SignInButton mode='modal'/>
     </SignedOutButton>
     <SignInButton>
        <UserButton />
     </SignInButton>

    </>
  )
}

export default App
