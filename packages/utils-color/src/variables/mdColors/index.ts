/* types */

export type MdColors = {
  red: MdShades;
  pink: MdShades;
  purple: MdShades;
  deepPurple: MdShades;
  indigo: MdShades;
  blue: MdShades;
  lightBlue: MdShades;
  cyan: MdShades;
  teal: MdShades;
  green: MdShades;
  lightGreen: MdShades;
  lime: MdShades;
  yellow: MdShades;
  amber: MdShades;
  orange: MdShades;
  deepOrange: MdShades;
  brown: MdShades;
  blueGrey: MdShades;
  grey: MdShades;
  black: string;
  white: string;
  transparent: string;
};

export type MdShades = {
  base: string;
  lighten5: string;
  lighten4: string;
  lighten3: string;
  lighten2: string;
  lighten1: string;
  darken1: string;
  darken2: string;
  darken3: string;
  darken4: string;
  accent1?: string;
  accent2?: string;
  accent3?: string;
  accent4?: string;
};

/* variables */

// red
const red = {
  base: '#F44336',
  lighten5: '#FFEBEE',
  lighten4: '#FFCDD2',
  lighten3: '#EF9A9A',
  lighten2: '#E57373',
  lighten1: '#EF5350',
  darken1: '#E53935',
  darken2: '#D32F2F',
  darken3: '#C62828',
  darken4: '#B71C1C',
  accent1: '#FF8A80',
  accent2: '#FF5252',
  accent3: '#FF1744',
  accent4: '#D50000',
};

// pink
const pink = {
  base: '#E91E63',
  lighten5: '#FCE4EC',
  lighten4: '#F8BBD0',
  lighten3: '#F48FB1',
  lighten2: '#F06292',
  lighten1: '#EC407A',
  darken1: '#D81B60',
  darken2: '#C2185B',
  darken3: '#AD1457',
  darken4: '#880E4F',
  accent1: '#FF80AB',
  accent2: '#FF4081',
  accent3: '#F50057',
  accent4: '#C51162',
};

// purple
const purple = {
  base: '#9C27B0',
  lighten5: '#F3E5F5',
  lighten4: '#E1BEE7',
  lighten3: '#CE93D8',
  lighten2: '#BA68C8',
  lighten1: '#AB47BC',
  darken1: '#8E24AA',
  darken2: '#7B1FA2',
  darken3: '#6A1B9A',
  darken4: '#4A148C',
  accent1: '#EA80FC',
  accent2: '#E040FB',
  accent3: '#D500F9',
  accent4: '#AA00FF',
};

// deeppurple
const deepPurple = {
  base: '#673AB7',
  lighten5: '#EDE7F6',
  lighten4: '#D1C4E9',
  lighten3: '#B39DDB',
  lighten2: '#9575CD',
  lighten1: '#7E57C2',
  darken1: '#5E35B1',
  darken2: '#512DA8',
  darken3: '#4527A0',
  darken4: '#311B92',
  accent1: '#B388FF',
  accent2: '#7C4DFF',
  accent3: '#651FFF',
  accent4: '#6200EA',
};

// indigo
const indigo = {
  base: '#3F51B5',
  lighten5: '#E8EAF6',
  lighten4: '#C5CAE9',
  lighten3: '#9FA8DA',
  lighten2: '#7986CB',
  lighten1: '#5C6BC0',
  darken1: '#3949AB',
  darken2: '#303F9F',
  darken3: '#283593',
  darken4: '#1A237E',
  accent1: '#8C9EFF',
  accent2: '#536DFE',
  accent3: '#3D5AFE',
  accent4: '#304FFE',
};
// blue
const blue = {
  base: '#2196F3',
  lighten5: '#E3F2FD',
  lighten4: '#BBDEFB',
  lighten3: '#90CAF9',
  lighten2: '#64B5F6',
  lighten1: '#42A5F5',
  darken1: '#1E88E5',
  darken2: '#1976D2',
  darken3: '#1565C0',
  darken4: '#0D47A1',
  accent1: '#82B1FF',
  accent2: '#448AFF',
  accent3: '#2979FF',
  accent4: '#2962FF',
};
// lightblue
const lightBlue = {
  base: '#03A9F4',
  lighten5: '#E1F5FE',
  lighten4: '#B3E5FC',
  lighten3: '#81D4FA',
  lighten2: '#4FC3F7',
  lighten1: '#29B6F6',
  darken1: '#039BE5',
  darken2: '#0288D1',
  darken3: '#0277BD',
  darken4: '#01579B',
  accent1: '#80D8FF',
  accent2: '#40C4FF',
  accent3: '#00B0FF',
  accent4: '#0091EA',
};
// cyan
const cyan = {
  base: '#00BCD4',
  lighten5: '#E0F7FA',
  lighten4: '#B2EBF2',
  lighten3: '#80DEEA',
  lighten2: '#4DD0E1',
  lighten1: '#26C6DA',
  darken1: '#00ACC1',
  darken2: '#0097A7',
  darken3: '#00838F',
  darken4: '#006064',
  accent1: '#84FFFF',
  accent2: '#18FFFF',
  accent3: '#00E5FF',
  accent4: '#00B8D4',
};
// teal
const teal = {
  base: '#009688',
  lighten5: '#E0F2F1',
  lighten4: '#B2DFDB',
  lighten3: '#80CBC4',
  lighten2: '#4DB6AC',
  lighten1: '#26A69A',
  darken1: '#00897B',
  darken2: '#00796B',
  darken3: '#00695C',
  darken4: '#004D40',
  accent1: '#A7FFEB',
  accent2: '#64FFDA',
  accent3: '#1DE9B6',
  accent4: '#00BFA5',
};
// green
const green = {
  base: '#4CAF50',
  lighten5: '#E8F5E9',
  lighten4: '#C8E6C9',
  lighten3: '#A5D6A7',
  lighten2: '#81C784',
  lighten1: '#66BB6A',
  darken1: '#43A047',
  darken2: '#388E3C',
  darken3: '#2E7D32',
  darken4: '#1B5E20',
  accent1: '#B9F6CA',
  accent2: '#B9F6CA',
  accent3: '#B9F6CA',
  accent4: '#00C853',
};
// lightgreen
const lightGreen = {
  base: '#8BC34A',
  lighten5: '#F1F8E9',
  lighten4: '#DCEDC8',
  lighten3: '#C5E1A5',
  lighten2: '#AED581',
  lighten1: '#9CCC65',
  darken1: '#7CB342',
  darken2: '#689F38',
  darken3: '#558B2F',
  darken4: '#33691E',
  accent1: '#CCFF90',
  accent2: '#B2FF59',
  accent3: '#76FF03',
  accent4: '#64DD17',
};
// lime
const lime = {
  base: '#CDDC39',
  lighten5: '#F9FBE7',
  lighten4: '#F0F4C3',
  lighten3: '#E6EE9C',
  lighten2: '#DCE775',
  lighten1: '#D4E157',
  darken1: '#C0CA33',
  darken2: '#AFB42B',
  darken3: '#9E9D24',
  darken4: '#827717',
  accent1: '#F4FF81',
  accent2: '#EEFF41',
  accent3: '#C6FF00',
  accent4: '#AEEA00',
};
// yellow
const yellow = {
  base: '#FFEB3B',
  lighten5: '#FFFDE7',
  lighten4: '#FFF9C4',
  lighten3: '#FFF59D',
  lighten2: '#FFF176',
  lighten1: '#FFEE58',
  darken1: '#FDD835',
  darken2: '#FBC02D',
  darken3: '#F9A825',
  darken4: '#F57F17',
  accent1: '#FFFF8D',
  accent2: '#FFFF00',
  accent3: '#FFEA00',
  accent4: '#FFD600',
};
// amber
const amber = {
  base: '#FFC107',
  lighten5: '#FFF8E1',
  lighten4: '#FFECB3',
  lighten3: '#FFE082',
  lighten2: '#FFD54F',
  lighten1: '#FFCA28',
  darken1: '#FFB300',
  darken2: '#FFA000',
  darken3: '#FF8F00',
  darken4: '#FF6F00',
  accent1: '#FFE57F',
  accent2: '#FFD740',
  accent3: '#FFC400',
  accent4: '#FFAB00',
};
// orange
const orange = {
  base: '#FF9800',
  lighten5: '#FFF3E0',
  lighten4: '#FFE0B2',
  lighten3: '#FFCC80',
  lighten2: '#FFB74D',
  lighten1: '#FFA726',
  darken1: '#FB8C00',
  darken2: '#F57C00',
  darken3: '#EF6C00',
  darken4: '#E65100',
  accent1: '#FFD180',
  accent2: '#FFAB40',
  accent3: '#FF9100',
  accent4: '#FF6D00',
};
// deeporange
const deepOrange = {
  base: '#FF5722',
  lighten5: '#FBE9E7',
  lighten4: '#FFCCBC',
  lighten3: '#FFAB91',
  lighten2: '#FF8A65',
  lighten1: '#FF7043',
  darken1: '#F4511E',
  darken2: '#E64A19',
  darken3: '#D84315',
  darken4: '#BF360C',
  accent1: '#FF9E80',
  accent2: '#FF6E40',
  accent3: '#FF3D00',
  accent4: '#DD2C00',
};
// brown
const brown = {
  base: '#795548',
  lighten5: '#EFEBE9',
  lighten4: '#D7CCC8',
  lighten3: '#BCAAA4',
  lighten2: '#A1887F',
  lighten1: '#8D6E63',
  darken1: '#6D4C41',
  darken2: '#5D4037',
  darken3: '#4E342E',
  darken4: '#3E2723',
};
// bluegrey
const blueGrey = {
  base: '#607D8B',
  lighten5: '#ECEFF1',
  lighten4: '#CFD8DC',
  lighten3: '#B0BEC5',
  lighten2: '#90A4AE',
  lighten1: '#78909C',
  darken1: '#546E7A',
  darken2: '#455A64',
  darken3: '#37474F',
  darken4: '#263238',
};
// grey
const grey = {
  base: '#9E9E9E',
  lighten5: '#FAFAFA',
  lighten4: '#F5F5F5',
  lighten3: '#EEEEEE',
  lighten2: '#E0E0E0',
  lighten1: '#BDBDBD',
  darken1: '#757575',
  darken2: '#616161',
  darken3: '#424242',
  darken4: '#212121',
};
// shades
const shades = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
};

// mdColors
export const mdColors: MdColors = Object.freeze({
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
  grey,
  ...shades,
});
