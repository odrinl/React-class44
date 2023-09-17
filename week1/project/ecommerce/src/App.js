import './App.css';
import Catalog from './Catalog';
import productsData from './fake-data/all-products';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Products</h1>
      </header>
      <main>
        {/* Pass the productData to the Catalog component */}
        <Catalog products={productsData} /> 
      </main>
    </div>
  );
}

export default App;

