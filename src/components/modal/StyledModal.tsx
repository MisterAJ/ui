// import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  motion
} from 'framer-motion';

export const ModalRoot = styled(motion.div)``;

export const ModalMask = styled(motion.div)`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;

    background: ${theme.modalMaskBackground};
    
    @media (max-width: ${theme.mediaScreenSmall}) {
      visibility: hidden;
    }
  `};
`;

export const ModalWrapper = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;
    
    display: flex;
    
    align-items: center;
    justify-content: center;
  `};
`;

export const ModalContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: ${theme.modalMinHeight};
    min-width: ${theme.modalMinWidth};
    
    background: ${theme.modalBackground};
    border: ${theme.modalBorder};
    border-color: ${theme.modalBorderColor};
    border-radius: ${theme.modalBorderRadius};
    
    box-shadow: ${theme.modalBoxShadow};
    
    outline: 0;
    
    @media (max-width: ${theme.mediaScreenSmall}) {
      height: 100%;
      width: 100%;
      
      border-radius: 0;
    }
  `};
`;

export const ModalSentinel = styled.div`
  width: 0;
  height: 0;
  overflow: hidden;
  
  &:focus {
    outline: 0;
  }
`;

