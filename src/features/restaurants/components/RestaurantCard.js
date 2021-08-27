import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components'

const Root = styled(View)``

const AppCard = styled(Card)``

const CardCover = styled(Card.Cover)``

const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`
const Paragraph = styled(Text)`
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

  return (
    <Root>
      <AppCard>
        <CardCover source={{ uri: photos[0] }} />
        <CardContent>
          <Title>{name}</Title>
          <Paragraph>Card content</Paragraph>
        </CardContent>
      </AppCard>
    </Root>
  )
}

export default RestaurantCard
