import { Route, Routes } from 'react-router-dom';
import Shell from './Shell';
import NotFound from '../components/NotFound';
import Inventory from './Inventory';
import ManageItems from './ManageItems'
import PurchasesHistory from './PurchasesHistory'

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<ManageItems />} />
      <Route path='manage-items' element={<ManageItems />} />
      <Route path='purchases-history' element={<PurchasesHistory />} />
      <Route path='inventory' element={<Inventory />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;