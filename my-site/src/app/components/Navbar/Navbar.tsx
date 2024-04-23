import "./Navbar.css";
import { Col, Row } from "react-bootstrap";
import { TRAVEL, PROJECTS, APPS, THINGS } from "../../pages";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
    setPageState: any;
    setGallerySelection: any;
}

const Navbar: React.FC<NavBarProps> = ({ setPageState, setGallerySelection }) => {
  return (
    <div className="navbar-main">
        <div className="nav-option" onClick={() => {
            setPageState(TRAVEL);
            setGallerySelection(0);
            }}>
            TRAVEL
        </div>
        <div className="nav-option" onClick={() => {setPageState(PROJECTS)}}>
            PROJECTS
        </div>
        <div className="nav-option" onClick={() => {setPageState(APPS)}}>
            APPS
        </div>
        <div className="nav-option" onClick={() => {setPageState(THINGS)}}>
            THINGS
        </div>
    </div>
  );
}

export default Navbar;