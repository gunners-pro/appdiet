import 'styled-components';
import { LIGHT } from '../theme/light';

declare module 'styled-components' {
  type ThemeType = typeof LIGHT;

  export interface DefaultTheme extends ThemeType { }
}
