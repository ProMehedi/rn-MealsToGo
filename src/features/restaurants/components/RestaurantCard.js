import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'

import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import AppText from '../../../components/typography/AppText'

const Root = styled(View)``

const AppCard = styled(Card)``

const ImageWrap = styled(View)``

const Avaiable = styled(Text)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
  background-color: ${({ theme }) => theme.colors.ui.error};
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.quaternary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-transform: uppercase;
  ${({ open }) =>
    open &&
    `
    background: #1dbf73;
  `}
`

const CardCover = styled(Card.Cover)``

const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`

const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`

const RateCount = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-right: ${(props) => props.theme.space[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.secondary};
`

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    photos = ['https://picsum.photos/400/370'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
    phone = '+1 (123) 456-7890',
    website = 'https://www.google.com',
    price = '$$'
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <Root>
      <AppCard>
        <ImageWrap>
          <CardCover source={{ uri: photos[0] }} />
          <Avaiable open={isOpenNow}>
            {isOpenNow ? 'Open now' : 'Closed'}
          </Avaiable>
        </ImageWrap>
        <CardContent>
          <AppText variant="label">{name}</AppText>
          <Rating>
            <RateCount>{rating}</RateCount>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <AppText variant="caption">{address}</AppText>
        </CardContent>
      </AppCard>
    </Root>
  )
}

export default RestaurantCard
