import Nav from './component/Navbar.tsx';
import Layout from './component/Layout.tsx';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100vw' }}>
        <Nav />
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
