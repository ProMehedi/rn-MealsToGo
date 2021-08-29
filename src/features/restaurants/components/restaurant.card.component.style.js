import { Image, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'

export const Root = styled(View)``

export const AppCard = styled(Card)``

export const ImageWrap = styled(View)``

export const Closed = styled(Text)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  left: ${(props) => props.theme.space[2]};
  background-color: ${({ theme }) => theme.colors.ui.error};
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.quaternary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-transform: uppercase;
  z-index: 1;
`

export const Avaiable = styled(Text)`
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

export const CardCover = styled(Card.Cover)``

export const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`

export const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`

export const RateCount = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-right: ${(props) => props.theme.space[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.secondary};
`
