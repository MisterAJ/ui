import * as React from 'react';
import styled from 'styled-components';

import {
  Collapse
} from "../collapse/Collapse";

import {
  AccordionContext
} from './context';

interface CollapseSpacerProps {
  itemGap?: number;
}

export interface AccordionItemProps {
  /** Option to handle if collapse is expanded */
  expanded?: boolean;

  /** Icon to show on the right to show the current collapse state */
  icon?: React.ReactNode;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** When Collapse closes the content component will be unmounted */
  destroyOnClose?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Unique key to identify collapse. Used for Accordion */
  itemKey: string | number ;

  /** Function to handle when collapse state changes */
  onChange?: (itemKey?: string | number) => void;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordion.Item */
export const AccordionItem: React.FunctionComponent<AccordionItemProps> = (props) => (
  <AccordionContext.Consumer>
    {(value) => {
      const {
        itemKey,
      } = props;

      const isExpanded = value.expandedItems.includes(itemKey);

      return (
        <React.Fragment>
          <Collapse
            {...props}
            defaultExpanded={isExpanded}
            expanded={isExpanded}
            onChange={value.onChange}
          />
          <CollapseSpacer itemGap={value.itemGap} />
        </React.Fragment>
      );
    }}
  </AccordionContext.Consumer>
);
