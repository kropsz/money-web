import "./sidebar.css";
import icons from "../../styles/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return <div className="sidebar">
        <Link to="/"><img className="icon"src={icons.home} alt="" /></Link>
        <Link to="/despesa"><img className="icon"src={icons.add} alt="" /></Link>
        <Link to="#"><img className="icon"src={icons.config} alt="" /></Link>
        <Link to="#"><img className="icon"src={icons.logout} alt="" /></Link>
    </div>
}
export default Sidebar;