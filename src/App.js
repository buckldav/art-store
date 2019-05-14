import React from 'react';
import MainLayout from './layout/MainLayout';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';

import { BrowserRouter, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(faBars)
library.add(faPalette)

function App() {
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Store} />
        </BrowserRouter>
      </MainLayout>
    </>
  );
}

export default App;
