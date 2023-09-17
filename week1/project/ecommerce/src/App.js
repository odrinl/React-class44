import React, { useState } from 'react';
import './App.css';
import Product from './Product'; 
import Catalog from './Catalog';
import productsData from './fake-data/all-products';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Products</h1>
      </header>
      <main>
        <Catalog products={productsData} /> {/* Pass productsData to Catalog */}
      </main>
    </div>
  );
}

export default App;

