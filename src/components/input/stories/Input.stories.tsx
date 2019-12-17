import * as React from 'react';
import styled from "styled-components";

import {
  Input
} from '../Input';

import {
  Container
} from './story.components';

import {
  SvgCircleNotch
} from "../../icons/CircleNotch";

// @ts-ignore
import mdx from './Input.mdx';
import {Button} from "../..";

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;


export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const simple = () => (
  <Container>
    <Input />
  </Container>
);

export const size = () => (
  <Container>
    <Input size="small" />
    <Spacer />
    <Input />
    <Spacer />
    <Input size="large" />
  </Container>
);

export const border = () => (
  <Container>
    <Input placeholder="Input with border" />
    <Spacer />
    <Input borderType="bottom" placeholder="Input with bottom border" />
    <Spacer />
    <Input borderType="none" placeholder="Input without border" />
  </Container>
);

export const label = () => (
  <Container>
    <Input label="Label" />
  </Container>
);

export const validation = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Container>
      <Input
        validationStatus="error"
        validationMessage="This is an error"
      />
      <Spacer />
      <Input
        validationStatus="success"
        validationMessage="This is a success"
      />
      <Spacer />
      <Input
        validationStatus="default"
        validationMessage="This is a default"
        inputSuffix={<div>D</div>}
      />
      <Spacer />
      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
      <Input
        validationStatus={loading ? 'loading' : 'default'}
        validationMessage="This is a loading"
        size="large"
      />
    </Container>
  )
};

export const disabled = () => (
  <Container>
    <Input disabled />
  </Container>
);

export const affix = () => (
  <Container>
    <Input inputPrefix={<SvgCircleNotch />} inputSuffix={<SvgCircleNotch />} />
  </Container>
);

