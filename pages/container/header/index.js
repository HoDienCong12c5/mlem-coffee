import React from 'react'
import PropTypes from 'prop-types';
import { ContainerHeader, LogoHeader } from './styled';
import { images } from '@/common/images';
import Image from 'next/image';
import ImageNext from '@/components/ImageNext';
const Header = () => {
  return (
    <ContainerHeader>
      <ImageNext src={images.landingPage.logo}/>

    </ContainerHeader>
  )
}

export default Header