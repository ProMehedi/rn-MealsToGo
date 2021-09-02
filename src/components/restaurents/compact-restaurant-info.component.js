import React from 'react'
import { Image, Platform } from 'react-native'
import WebView from 'react-native-webview'
import styled from 'styled-components/native'

const Root = styled.View`
  padding: 4px;
  max-width: 120px;
`

const ThumbWeb = styled(WebView)`
  width: 116px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`
const ThumbImg = styled(Image)`
  width: 116px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-top: ${(props) => props.theme.space[2]};
  text-align: center;
`

const CompactRestaurantInfo = ({ restaurant, callout }) => {
  const ImageView = Platform.OS === 'android' && callout ? ThumbWeb : ThumbImg

  return (
    <Root>
      <ImageView source={{ uri: restaurant.photos[0] }} />
      <Title>{restaurant.name}</Title>
    </Root>
  )
}

export default CompactRestaurantInfo
