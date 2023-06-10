import React from 'react'
import { Container } from './styled'
import Image from 'next/image'

const HomeScreen = () => {
  return (
    <Container >
      <div>
        <Image src={'https://ipfs.pantograph.app/ipfs/QmPvLUPSEDbR2Qoo6J83aMfPnpBYeF5e4MhrjH853JJcF8?filename=MinionDevil_ANIMA.png'} width={150} height={150}/>

      </div>
      <Image src={'https://ipfs.pantograph.app/ipfs/QmPvLUPSEDbR2Qoo6J83aMfPnpBYeF5e4MhrjH853JJcF8?filename=MinionDevil_ANIMA.png'} width={150} height={150}/>

    </Container>
  )
}

export default HomeScreen