import { Link } from "react-router-dom";

const MenuOption = ({ path, title, image }) => {
    return(
        <Link to={path}>
            <div>
                {title}
            </div>
        </Link>
    );
}

export default MenuOption;