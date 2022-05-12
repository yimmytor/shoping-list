import MenuOption from "./MenuOption";

const Menu = () => {
    return(
        <div className="grid grid-cols-2 gap-5">
            <MenuOption path="/products" title="Productos"/>            
            <MenuOption path="/stores" title="Comercios"/>            
            <MenuOption path="/shopping-list" title="Lista de Compras"/>            
            <MenuOption path="/price-list" title="Lista de Precios"/>            
        </div>
    );
}

export default Menu;