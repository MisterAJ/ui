import colors from './colors';

import {
  GlobalTheme
} from "./types";

export const theme: GlobalTheme = {
  animations: {
    time: {
      veryFast: 0.1,
      fast: 0.25,
      medium: 0.5,
      slow: 1
    },
  },
  button: {
    borderRadius: '4px',
    padding: '0px 15px',
    fontWeight: '400',
    primary: {
      background: colors.primary,
      border: 'none',
      borderColor: 'none',
      color: colors.white,
      hoverBackground: colors.secondary,
      hoverColor: colors.white,
      activeBackground: colors.secondary,
      activeColor: colors.white,
    },
    danger: {
      background: colors.danger,
      border: 'none',
      borderColor: 'none',
      color: colors.white,
      hoverBackground: colors.dangerSecondary,
      hoverColor: colors.white,
      activeBackground: colors.dangerSecondary,
      activeColor: colors.white,
    },
    ghost: {
      background: 'transparent',
      border: '1px solid',
      borderColor: colors.primary,
      color: colors.primary,
      hoverBackground: colors.primary,
      hoverColor: colors.white,
      activeBackground: colors.primary,
      activeColor: colors.white,
    },
    link: {
      background: 'transparent',
      border: 'none',
      borderColor: 'none',
      color: colors.primary,
      hoverBackground: 'transparent',
      hoverColor: colors.secondary,
      activeBackground: 'transparent',
      activeColor: colors.secondary,
    },
    size: {
      small: {
        height: '24px',
        fontSize: '14px'
      },
      default: {
        height: '32px',
        fontSize: '14px'
      },
      large: {
        height: '44px',
        fontSize: '16px'
      }
    }
  },
  colors: {
    ...colors
  },
  collapse: {
    border: '1px solid',
    borderColor: colors.borderColor,
    borderRadius: '4px',
    boxShadow: 'none',
    content: {
      padding: '10px',
      background: 'transparent'
    },
    header: {
      color: colors.black,
      background: colors.white,
      hoverBackground: colors.primary,
      hoverColor: colors.white,
      openBackground: colors.primary,
      openColor: colors.white,
      padding: '0px 15px',
      height: '32px'
    }
  },
  panel: {
    background: colors.white,
    border: 'none',
    borderColor: 'none',
    borderRadius: '4px',
    activeBoxShadow: `0px 0px 4px rgba(${colors.blackRGB},0.20)`,
    hoverBoxShadow: `0px 7px 21px rgba(${colors.blackRGB},0.07)`
  }
};
