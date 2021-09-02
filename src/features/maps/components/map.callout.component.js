import React from 'react'
import { Image, Platform } from 'react-native'
import WebView from 'react-native-webview'
import styled from 'styled-components/native'

const Root = styled.View`
  padding: 4px;
  max-width: 120px;
`

const Thumb = styled(Platform.OS === 'android' ? WebView : Image)`
  width: 116px;
  height: 100px;
`

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-top: ${(props) => props.theme.space[2]};
  text-align: center;
`

const MapCallout = ({ restaurant }) => {
  return (
    <Root>
      <Thumb source={{ uri: restaurant.photos[0] }} />
      <Title>{restaurant.name}</Title>
    </Root>
  )
}

export default MapCallout
