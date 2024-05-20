import React from 'react'
import ImageSection from '../components/ImageSection'
import styled from 'styled-components'

const Men = () => {
  return (
    <MainSection>
    <ImageSection />
    <InfoSide>new collections</InfoSide>
  </MainSection>
  )
}

export default Men

const MainSection = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const InfoSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;