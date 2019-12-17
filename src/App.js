import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import MyErrorBoundary from './Error/MyErrorBoundary';

const CustomHeader = React.lazy(()=> import('./Components/header'));
const CustomFooter = React.lazy(()=> import('./Components/footer'));

function App() {
  return (
    <div>
      <MyErrorBoundary>
        <Suspense fallback={ <div>Loading...</div> }>
          <CustomHeader/>
          <h1>Body</h1>
          <CustomFooter/>
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}

export default App;
