import {
  colors
} from './colors';

import {
  Colors,
  GlobalTheme
} from "./types";

export const getDefaultTheme = (themeColors: Colors = colors): GlobalTheme => ({

  // ---- Animation ---- //
  animationTimeVeryFast: 0.1,
  animationTimeFast: 0.25,
  animationTimeMedium: 0.5,
  animationTimeSlow: 1,

  // ---- Button ---- //
  buttonBorderRadius: '4px',
  buttonPadding: '0px 15px',
  buttonFontWeight: '400',
  buttonSmallHeight: '24px',
  buttonSmallFontSize: '14px',
  buttonDefaultHeight: '32px',
  buttonDefaultFontSize: '14px',
  buttonLargeHeight: '44px',
  buttonLargeFontSize: '16px',

  // ---- Primary Button ---- //
  buttonPrimaryBackground: themeColors.primary,
  buttonPrimaryBorder: 'none',
  buttonPrimaryBorderColor: 'none',
  buttonPrimaryColor: themeColors.white,
  buttonPrimaryHoverBackground: themeColors.secondary,
  buttonPrimaryHoverColor: themeColors.white,
  buttonPrimaryActiveBackground: themeColors.secondary,
  buttonPrimaryActiveColor: themeColors.white,

  // ---- Danger Button ---- //
  buttonDangerBackground: themeColors.danger,
  buttonDangerBorder: 'none',
  buttonDangerBorderColor: 'none',
  buttonDangerColor: themeColors.white,
  buttonDangerHoverBackground: themeColors.dangerSecondary,
  buttonDangerHoverColor: themeColors.white,
  buttonDangerActiveBackground: themeColors.dangerSecondary,
  buttonDangerActiveColor: themeColors.white,

  // ---- Ghost Button ---- //
  buttonGhostBorder: '1px solid',

  // ----- Link Button ---- //
  buttonLinkBackground: 'transparent',
  buttonLinkBorder: 'none',
  buttonLinkBorderColor: 'none',
  buttonLinkColor: themeColors.primary,
  buttonLinkHoverBackground: 'transparent',
  buttonLinkHoverColor: themeColors.secondary,
  buttonLinkActiveBackground: 'transparent',
  buttonLinkActiveColor: themeColors.secondary,

  // ---- Collapse ---- //
  collapseBorder: '1px solid',
  collapseBorderColor: themeColors.borderColor,
  collapseBorderRadius: '4px',
  collapseBoxShadow: 'none',
  collapseContentPadding: '10px',
  collapseContentBackground: themeColors.primaryBackground,
  collapseHeaderColor: themeColors.black,
  collapseHeaderBackground: themeColors.primaryBackground,
  collapseHeaderHoverBackground: themeColors.primary,
  collapseHeaderHoverColor: themeColors.white,
  collapseHeaderOpenBackground: themeColors.primary,
  collapseHeaderOpenColor: themeColors.white,
  collapseHeaderPadding: '0px 15px',
  collapseHeaderHeight: '32px',

  // ---- Panel ---- //
  panelBackground: themeColors.primaryBackground,
  panelBorder: 'none',
  panelBorderColor: 'none',
  panelBorderRadius: '4px',
  panelActiveBoxShadow: `0px 0px 4px rgba(${themeColors.blackRGB},0.20)`,
  panelHoverBoxShadow: `0px 7px 21px rgba(${themeColors.blackRGB},0.07)`,

  colors: {
    ...themeColors
  }
});

export const createTheme = (colorOverrides: Partial<Colors>, themeOverrides: Partial<GlobalTheme>): GlobalTheme => {
  const themeColors = {
    ...colors,
    ...colorOverrides
  };

  const theme = getDefaultTheme(themeColors);

  return {
    ...theme,
    ...themeOverrides
  };
};
