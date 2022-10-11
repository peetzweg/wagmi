import { ConnectKitButton } from 'connectkit'
import * as React from 'react'
import { useAccount } from 'wagmi'
import { Account } from '../components'

function Page() {
  const { isConnected } = useAccount()
  return (
    <>
      <h1>wagmi + ConnectKit</h1>
      <ConnectKitButton />
      {isConnected && <Account />}
    </>
  )
}

export default Page
