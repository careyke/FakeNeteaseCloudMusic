import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Col, Row} from '@app/components/flex';

const App: FC = () => {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Col grow={1}>
        <Row>
          <Text>1</Text>
        </Row>
        <Row>
          <Text>2</Text>
        </Row>
        <Row>
          <Text>3</Text>
        </Row>
      </Col>
    </SafeAreaView>
  );
};

export default App;
