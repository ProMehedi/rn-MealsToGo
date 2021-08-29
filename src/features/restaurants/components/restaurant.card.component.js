import React from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import {
  AppCard,
  Avaiable,
  CardContent,
  CardCover,
  Closed,
  Icon,
  ImageWrap,
  RateCount,
  Rating,
  Root,
  Row
} from './restaurant.card.component.style'
import star from '../../../../assets/star'
import AppText from '../../../components/typography/AppText'

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/400/370'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <Root>
      <AppCard>
        <ImageWrap>
          <CardCover source={{ uri: photos[0] }} />
          {isClosedTemporarily && <Closed>Closed Temporarily</Closed>}
          <Avaiable open={isOpenNow}>
            {isOpenNow ? 'Open now' : 'Closed'}
          </Avaiable>
        </ImageWrap>
        <CardContent>
          <Row>
            <View>
              <AppText variant="label">{name}</AppText>
              <Rating>
                <RateCount>{rating}</RateCount>
                {ratingArray.map((_, index) => (
                  <SvgXml key={index} xml={star} width={20} height={20} />
                ))}
              </Rating>
              <AppText variant="caption">{address}</AppText>
            </View>
            <View>
              <Icon source={{ uri: icon }} />
            </View>
          </Row>
        </CardContent>
      </AppCard>
    </Root>
  )
}

export default RestaurantCard
