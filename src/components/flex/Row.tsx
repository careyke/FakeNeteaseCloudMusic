import React, {FC} from 'react';

import FlexBox, {FlexBoxProps} from './FlexBox';

interface RowProps extends Omit<FlexBoxProps, 'direction'> {}

const Row: FC<RowProps> = props => {
  return <FlexBox {...props} direction="row" />;
};

export default Row;
