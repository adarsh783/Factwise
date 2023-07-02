import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { routes } from './routes/routes';
import Loader from './shared/components/AppLoader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
        {
          routes?.map((route, index) => 
            <Route 
              key={index} 
              path={route?.path} 
              index={route?.index} 
              element={
                <Suspense fallback={<Loader height='100vh' />}>
                  <route.component />
                </Suspense>
              }
            />
          )
        }
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
