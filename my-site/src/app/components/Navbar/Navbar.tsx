import "./Navbar.css";
import { Col, Row } from "react-bootstrap";
import { TRAVEL, PROJECTS, APPS, THINGS } from "../../pages";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
    setPageState: any;
}

const Navbar: React.FC<NavBarProps> = ({ setPageState }) => {
  return (
    <div className="navbar-main">
        <div className="nav-option" onClick={() => {setPageState(TRAVEL)}}>
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