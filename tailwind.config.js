const PRIMARY = {
  lighter: '#fff',
  light: '#5BE584',
  main: '#1A9827',
  dark: '#007B55',
  darker: '#005249',
}
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
}
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
}
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
}
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
}
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
}

const colors = {
  disabled: '#f0f0f0',
  border: '#37bf92',
  primary: PRIMARY.main,
  onPrimary: PRIMARY.lighter,
  primaryContainer: PRIMARY.light,
  onPrimaryContainer: PRIMARY.light,
  secondary: SECONDARY.main,
  onSecondary: SECONDARY.lighter,
  secondaryContainer: SECONDARY.light,
  onSecondaryContainer: SECONDARY.light,
  tertiary: 'rgb(56, 101, 104)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(188, 235, 238)',
  onTertiaryContainer: 'rgb(0, 32, 34)',
  error: ERROR.main,
  onError: ERROR.lighter,
  errorContainer: ERROR.main,
  onErrorContainer: ERROR.lighter,
  background: GREY['200'],
  onBackground: GREY['300'],
  surface: GREY['400'],
  onSurface: GREY['800'],
  surfaceVariant: GREY['600'],
  onSurfaceVariant: 'rgb(67, 72, 63)',
  outline: 'rgb(115, 121, 110)',
  outlineVariant: 'rgb(195, 200, 188)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(47, 49, 45)',
  inverseOnSurface: 'rgb(241, 241, 235)',
  inversePrimary: 'rgb(114, 222, 94)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(239, 246, 234)',
    level2: 'rgb(232, 242, 226)',
    level3: 'rgb(224, 237, 219)',
    level4: 'rgb(222, 236, 217)',
    level5: 'rgb(217, 233, 212)',
  },
  surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
  onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
  backdrop: 'rgba(44, 50, 41, 0.4)',
}

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
