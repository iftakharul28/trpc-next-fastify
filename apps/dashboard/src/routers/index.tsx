import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Layout from './Layout.tsx';
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
