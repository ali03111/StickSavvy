import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Colors = {
  primaryColor: '#E30914',
  secondary: '#195073',
  black: '#000000',
  white: '#ffffff',
  themeRed: '#E30914',
  gray: '#878787',
  grayBorder: '#8787874D',
  lightGray: 'rgba(0, 0, 0, 0.50)',
  textGray: 'rgba(32, 32, 32, 0.50)',
  headerBg: '#202020',
  textColor: '#3E3E3E',
  heading: '#195073',
  bgLBlue: '#E2F4FF',
  bgLPink: '#FFEAEB',
  themeDark: '#181818'
};

/** FontSize **/
const FontSize = {
  scale12: Math.round(width / 36),
  scale16: Math.round(width / 27),
  scale18: Math.round(width / 24),
  scale20: Math.round(width / 21.5),
  scale24: Math.round(width / 18),
  scale32: Math.round(width / 13.5),
  small: 8,
  medium: 10,
  regular: 12,
  default: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,
  xxxlarge: 22,
};

const Family = {
  fontMedium: 'NunitoMedium',
  fontBold: 'NunitoBold',
  fontLight: 'NunitoLight',
  fontBlack: 'NunitoBlack',
  fontRegular: 'NunitoRegular',
  fontSemiBold: 'NunitoSemiBold',
}
const Sizes = {
  width,
  height,
  h10: Math.round(height * 0.0125),
  h20: Math.round(height * 0.025),
};

export {Colors, FontSize, Sizes, Family};
