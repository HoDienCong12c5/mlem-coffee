import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import HomeScreen from './home';
const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  
`;
export default function Home() {
  return (
    <div className={styles.container}>


      <HomeScreen />
    </div>
  )
}
