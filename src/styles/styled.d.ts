// Precisamos sobrescrever as definições do styled components com o Typescript
// para que as propriedades do tema 'light' sejam reconhecidas na aplicação.

// Se não importarmos o styled components, todo o módulo será sobrescrito,
// mas queremos sobrescrever somente o DefaultTheme.
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
  
      background: string;
      text: string;
    },  
  }
}