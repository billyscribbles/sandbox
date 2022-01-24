import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    // eslint-disable-next-line  @typescript-eslint/naming-convention
    export interface DefaultTheme {
        colors: IColors;
        breakpoints: IBreakpoints;
        spacing: ISpacing;
    }

    export interface IColors {
        primary: string;
    }

    export interface IBreakpoints {
        /** Small devices (phones, 640px and down) */
        sm: string;
        /** Medium devices (landscape tablets, 768px and up) */
        md: string;
        /** Large devices (laptops/desktops, 1024px and up) */
        lg: string;
        /** Extra large devices (large laptops and desktops, 1280px and up) */
        xl: string;
        /** Max size devices (large desktops and televisisons, 1536px and up) */
        xxl: string;
    }

    export interface ISpacing {
        /** 0.5 rem */
        xs: string;
        /** 1 rem */
        sm: string;
        /** 1.5 rem */
        md: string;
        /** 2 rem */
        lg: string;
        /** 2.5 rem */
        xl: string;
        /** 3 rem */
        xxl: string;
    }
}

export const theme: DefaultTheme = {
    colors: {
        primary: '#0070f3'
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
    },
    spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xxl: '3rem'
    }
};
