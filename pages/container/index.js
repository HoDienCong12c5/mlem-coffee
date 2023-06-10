import React from 'react'
import styles from '@/styles/Home.module.css'
import { Affix } from 'antd'
import Header from './header'
import Footer from './Footer'
import { styled } from 'styled-components'
const ContainerApp = styled.div`
  max-width: 1550px;
  padding: 0px 50px;
  
`;
const Container = ({children}) => {
  return (
    <>
      <Affix >
        <Header />
      </Affix>
      <main className={styles['main-body'] }>
        <ContainerApp >
          {children}
        </ContainerApp>
      </main>
      <Footer />
    </>
  )
}

export default Container