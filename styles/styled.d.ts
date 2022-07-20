import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      veryPeri: '#6667AB';
      veryPeri500: 'rgba(102, 103, 171, 0.5)';
      veryPeri300: 'rgba(102, 103, 171, 0.3)';
      lightViolet: '#AAB6FE';
      black: '#000000';
      black600: 'rgba(0, 0, 0, 0.6)';
      gray: '#989898';
      gray500: 'rgba(152, 152, 152, 0.5)';
      gray300: '#DCDCDC';
      gray100: '#F4F4F4';
      gray50: 'rgba(244, 244, 244, 0.5)';
      red: '#FF8A80';
    };
    boxShadow: {
      onButton: {
        default: '0px 3px 2px rgba(21, 16, 83, 0.6';
        push: 'inset 0px 3px 2px rgba(21, 16, 83, 0.6)';
      };
      offButton: {
        default: '0px 3px 2px rgba(186, 181, 201, 0.98)';
        push: 'inset 0px 3px 2px rgba(186, 181, 201, 0.98)';
      };
      modal: '0px 2px 5px 2px rgba(0, 0, 0, 0.25)';
    };
  }
}
