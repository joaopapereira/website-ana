import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { About } from './features/about/About';
import { Resume } from './features/resume/Resume';
import { Hero } from './features/hero/Hero';
import { Publications } from './features/publications/Publications';
import './App.css';
import { Navigation } from './features/navigation/Navigation';
import { Contact } from './features/contact/Contact';

function App() {
  return (<section>
    <Navigation></Navigation>
    <div id="main">
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Publications></Publications>
      <Contact></Contact>
    </div>
  </section>);
}

export default App;
