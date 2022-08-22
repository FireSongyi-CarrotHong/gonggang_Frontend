const color = {
  veryPeri: '#6667AB',
  veryPeri500: 'rgba(102, 103, 171, 0.5)',
  veryPeri300: 'rgba(102, 103, 171, 0.3)',
  lightViolet: '#AAB6FE',

  black: '#000000',
  black600: 'rgba(0, 0, 0, 0.6)',
  black700: 'rgba(0, 0, 0, 0.7)',

  gray: '#989898',
  gray500: 'rgba(152, 152, 152, 0.5)',
  gray300: '#DCDCDC',
  gray100: '#F4F4F4',
  gray50: 'rgba(244, 244, 244, 0.5)',

  white: '#FFFFFF',

  red: '#FF8A80',
  pink: '#FFCDD2',
  lightYellow: '#FDFFF3',
} as const;

const themeColor = {
  yellow: '#FFF176',
  orange: '#FFD180',
  pink: '#FFCDD2',
  hotPink: '#F48FB1',
  lightRed: '#FF8A80',
  lightGreen: '#A5D6A7',
  green: '#80CBC4',
  sky: '#80D8FF',
  blue: '#82B1FF',
  purple: '#B388FF',
} as const;

const boxShadow = {
  onButton: {
    default: '0px 3px 2px rgba(21, 16, 83, 0.6)',
    push: 'inset 0px 3px 2px rgba(21, 16, 83, 0.6)',
  },
  offButton: {
    default: '0px 3px 2px rgba(186, 181, 201, 0.98)',
  },
  modal: '0px 2px 5px 2px rgba(0, 0, 0, 0.25)',
} as const;

const theme = { color, themeColor, boxShadow };

export type Theme = typeof theme;

export default theme;
