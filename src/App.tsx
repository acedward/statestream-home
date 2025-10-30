import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import Roadmap from './pages/Roadmap';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
