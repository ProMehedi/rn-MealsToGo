import styled from 'styled-components/native'

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`

const label = (theme) => `
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.heading};
`

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`

const error = (theme) => `
  color: ${theme.colors.text.error};
`

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`

const variants = {
  body,
  label,
  caption,
  error,
  hint
}

const AppText = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`

AppText.defaultProps = {
  variant: 'body'
}

export default AppText
