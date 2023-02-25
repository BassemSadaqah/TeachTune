import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer , Menu} from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import './styles/Navbar.css'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    // If you do not want to auto-close the mobile drawer when a path is selected
    // Delete or comment out the code block below
    // From here
    let { pathname: location } = useLocation();
    useEffect(() => {
        setVisible(false);
    }, [location]);
    // Upto here
    
    return (
        <nav className="navbar">
            <Layout >
                <Layout.Header className="nav-header"> 
                    <div className="logo">
                        <h3 className="brand-font">The Unknown Project</h3>
                    </div>
                    <div className="navbar-menu">
                        <div className="leftMenu">
                            <LeftMenu mode="horizontal" />
                        </div>
                        <Button className="menuButton" type="text" onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                        <div className="rightMenu">
                            <RightMenu mode={"horizontal"} />
                        </div>
                        <Drawer
                            title={"The Unknown Project"}
                            placement="right"
                            closable={true}
                            onClose={showDrawer}
                            open={visible}
                            style={{ zIndex: 99999 }}
                        >
                            <LeftMenu mode={"inline"} />
                            <RightMenu mode={"inline"} />
                        </Drawer>
                    </div>
                </Layout.Header>
            </Layout>
        </nav>
    );
};

export default Navbar;