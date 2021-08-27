import React from 'react'
import { SvgXml } from 'react-native-svg'

import {
  AppCard,
  Avaiable,
  CardContent,
  CardCover,
  ImageWrap,
  RateCount,
  Rating,
  Root
} from './RestaurantCard.style'
import star from '../../../../assets/star'
import AppText from '../../../components/typography/AppText'

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
