import Menu from "./Menu";

const MainView = () => {
    return(
        <div>
            <h1 className="bg-sky-600 text-4xl p-5 font-thin text-white text-center">GoShop</h1>
            <main className="flex flex-col items-center justify-start
                            h-screen bg-white h-screen">            
                <Menu />
            </main>
        </div>
    );
}

export default MainView;
