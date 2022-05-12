import { Link } from "react-router-dom";

const MenuOption = ({ path, title, image, color, text="text-white", order="" }) => {
    return(
        <Link to={path}>            
            <div className={"flex flex-row" + order + " + justify-center items-center " + color + " " + text + " h-32 rounded-xl drop-shadow-lg"}>
                <p className="text-xl">{title + ' 1'}</p>                
                <p className="text-xl">{title + ' 2'}</p>                
            </div>
        </Link>
    );
}

export default MenuOption;