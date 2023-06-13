import React from 'react';
import { Button } from '@tool-pack/react-ui';

const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="success">Success Button</Button>
    <Button type="info">Info Button</Button>
    <Button type="warning">warning Button</Button>
    <Button type="danger">warning Button</Button>
  </>
);

export default App;
