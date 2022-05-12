import Menu from "./Menu";

const MainView = () => {
    return(
        <main className="flex flex-col items-center justify-center
                         h-screen bg-gradient-to-b from-sky-600 to-violet-900 ">
            <Menu />
        </main>
    );
}

export default MainView;