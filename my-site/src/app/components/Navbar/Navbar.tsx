import "./Navbar.css";
import { Col, Row } from "react-bootstrap";
import { TRAVEL, PROJECTS, APPS, THINGS } from "../../pages";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
    setPageState: any;
    currentPageState: any;
    setPrevPageState: any;
    prevPageState: any;
    setGallerySelection: any;
}

const Navbar: React.FC<NavBarProps> = ({ setPageState, currentPageState, setPrevPageState, prevPageState, setGallerySelection }) => {
  return (
    <div className="navbar-main">
        <div className="nav-option" onClick={() => {
            setPrevPageState([...prevPageState, currentPageState]);
            setPageState(TRAVEL);
            setGallerySelection(0);
            }}>
            TRAVEL
        </div>
        <div className="nav-option" onClick={() => {
            setPrevPageState([...prevPageState, currentPageState]);
            setPageState(PROJECTS);
            }}>
            PROJECTS
        </div>
        <div className="nav-option" onClick={() => {
            setPrevPageState([...prevPageState, currentPageState]);
            setPageState(APPS);
            }}>
            APPS
        </div>
        <div className="nav-option" onClick={() => {
            setPrevPageState([...prevPageState, currentPageState]);
            setPageState(THINGS);
            }}>
            THINGS
        </div>
    </div>
  );
}

export default Navbar;