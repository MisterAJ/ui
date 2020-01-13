import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  Icon
} from '../..';

import {
  GlobalTheme
} from "../../theme/types";

interface HeaderProps {
  children?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  onCancel?: () => void;
  theme?: GlobalTheme;
}

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    
    display: grid;
    grid-template-columns: auto 0.1fr;
    align-items: center;
    
    background: ${theme.modalHeaderBackground};
    color: ${theme.modalHeaderColor};
    
    border-top-right-radius: ${theme.modalBorderRadius};
    border-top-left-radius: ${theme.modalBorderRadius};

    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
  `};
`;

const Title = styled.div`
  ${({ theme }) => css`
    padding: ${theme.modalHeaderPadding};
  `};
`;

const Close = styled.div`
  ${({ theme }) => css`
    padding: ${theme.modalHeaderPadding};
    align-self: end;
    cursor: pointer;
    
    transition: all ${theme.animationTimeFast}s;
    opacity: 0.5;

    &:hover, &:focus {
      opacity: 1;
      outline: 0;
    }
    
    &::-moz-focus-inner {
      border: none;
    }
  `};
`;

export const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  closable,
  closeIcon,
  onCancel
}) => {
  return (
    <Container className="rtk-modal-header">
      <Title>
        {children}
      </Title>
      {closable &&
        <Close
          onClick={onCancel}
          tabIndex={0}
        >
          {closeIcon ?
            closeIcon :
            <Icon.TimesSolid/>
          }
        </Close>
      }
    </Container>
  );
};

Header.defaultProps = {
  closable: true
};
