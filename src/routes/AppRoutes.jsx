import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainView from '../views/MainView';
import ProductsView from '../views/ProductsView';
import StoresView from '../views/StoresView';
import ShoppingListView from '../views/ShoppingListView';
import PriceListView from '../views/PriceListView';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/products" element={<ProductsView />} />
                <Route path="/stores" element={<StoresView />} />
                <Route path="/shopping-list" element={<ShoppingListView />} />
                <Route path="/price-list" element={<PriceListView />} />            
                <Route path="*" element={<MainView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;