import { SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${StatusBar.currentHeight || 0}px;
`

export default SafeArea
