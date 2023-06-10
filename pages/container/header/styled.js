import ImageNext from '@/components/ImageNext';
import styled from 'styled-components';
export const ContainerHeader = styled.div`
display: flex;
flex-wrap: nowrap;
gap: 10px;
width: auto;
height: 50px;
justify-content: center;
align-items: center;
   /* @media screen and (max-width: 768px){
    flex-flow: column;
  } */
`
export const LogoHeader = styled(ImageNext)`
    height: 40px;
    width: 40px;
`
export default ()=>{};