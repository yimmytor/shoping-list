import Menu from "./Menu";
import { ShoppingCartIcon } from '@heroicons/react/outline'

const MainView = () => {
    return(
        <div>
            <h1 className="flex justify-center items-center bg-sky-600 text-4xl p-5 font-thin text-white text-center">
                <ShoppingCartIcon className="h-5/6" />GoShop
            </h1>
            <main className="flex flex-col items-center justify-start
                            h-screen bg-white h-screen">            
                <Menu />
            </main>
        </div>
    );
}

export default MainView;
