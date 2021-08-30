import React, {FC, ReactNode} from 'react';
import {View, ViewProps, FlexStyle} from 'react-native';

export interface FlexBoxProps extends ViewProps {
  direction?: FlexStyle['flexDirection'];
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  wrap?: FlexStyle['flexWrap'];
  flex?: number;
  grow?: number;
  shrink?: number;
  basis?: Key;
  children?: ReactNode;
}

const FlexBox: FC<FlexBoxProps> = props => {
  const {
    children,
    direction = 'row',
    justify,
    align,
    wrap,
    flex,
    grow,
    shrink,
    basis,
    style,
    ...other
  } = props;

  const buildStyle = () => {
    const inlineStyle: FlexStyle = {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexGrow: grow,
      flex: flex,
      flexShrink: shrink,
      flexBasis: basis,
    };
    if (style && Array.isArray(style)) {
      style.push(inlineStyle);
      return style;
    } else if (style && typeof style === 'object') {
      return {...style, ...inlineStyle};
    } else {
      return inlineStyle;
    }
  };

  return (
    <View {...other} style={buildStyle()}>
      {children}
    </View>
  );
};

export default FlexBox;
