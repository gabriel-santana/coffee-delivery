import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { darkTheme } from '../styles/themes/dark'

type ThemeType = typeof defaultTheme
type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
  export interface DarkDefaultTheme extends DarkThemeType {}
}
