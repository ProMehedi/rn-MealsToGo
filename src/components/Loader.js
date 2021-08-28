import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components/native'

const Root = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`

const Loader = ({ color = '#D0421B', size = 'small' }) => {
  return (
    <Root>
      <ActivityIndicator size={size} color={color} animating={true} />
    </Root>
  )
}

export default Loader
