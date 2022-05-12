import MenuOption from "./MenuOption";

const Menu = () => {
    return(
        <div className="grid grid-cols-1 gap-4 max-w-xs w-4/5 mt-11">            
            <MenuOption path="/products" title="Productos" color="bg-red-500"/>            
            <MenuOption path="/stores" title="Comercios" color="bg-lime-600" order="-reverse"/>                        
            <MenuOption path="/shopping-list" title="Lista de Compras" color="bg-amber-500"/>            
            <MenuOption path="/price-list" title="Lista de Precios" color="bg-violet-600"/>            
        </div>
    );
}

export default Menu;    