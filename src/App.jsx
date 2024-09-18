// App.jsx
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';
import MouseMovementComponent from './MouseMovementComponent';
import DocumentTitleComponent from './DocumentTitleComponent';

const App = () => {
  return (
    <div>
      <h1>React useEffect Hook Examples</h1>


      <DataFetchingComponent />

      <MouseMovementComponent />

      <DocumentTitleComponent />
    </div>
  );
};

export default App;
