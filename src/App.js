import Header from './component/header/Header';
import Main from './component/main/Main';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Footer from './component/Footer/Footer';

function App() {
  return (
<BrowserRouter>

    <div className="App">
    <Header />

    <Routes>
    
     <Route path='/' element={<Main />} />

     </Routes>

<Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
