import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'

const Root = styled(View)``

const AppCard = styled(Card)``

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
`

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
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
        <CardCover source={{ uri: photos[0] }} />
        <CardContent>
          <Title>{name}</Title>
          <Rating>
            <RateCount>{rating}</RateCount>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>Card content</Address>
        </CardContent>
      </AppCard>
    </Root>
  )
}

export default RestaurantCard
