import React, {FC} from 'react';

import FlexBox, {FlexBoxProps} from './FlexBox';

interface ColProps extends Omit<FlexBoxProps, 'direction'> {}

const Col: FC<ColProps> = props => {
  return <FlexBox {...props} direction="column" />;
};

export default Col;
