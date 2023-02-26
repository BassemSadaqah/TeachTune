import React,{useContext} from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { userContext } from '../userContext';

const RightMenu = ({ mode}) => {
    const user=useContext(userContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });

    }
    const items = [
        {
            label: 'Navigation',
            key: 'SubMenu',
            // label: <><span className="username">{user.displayName}</span><Avatar src='https://joesch.moe/api/v1/random'/></>,
            label: <><span className="username">{user.displayName}</span><Avatar icon={< UserOutlined />} /></>,
            children: [

                {
                    label: 'Settings',
                    key: 'settings',
                    icon: <CodeOutlined />,
                },
                {
                    label: 'Profile',
                    key: 'profile',
                    icon: <UserOutlined />,
                },
                {
                    label: 'Logout',
                    key: 'logout',
                    onClick: handleLogout,
                    icon: <LogoutOutlined />,
                }
            ]
        }]
    return (
        <>
            <Menu mode={mode} items={items} />
            {/* <Menu mode={mode}>
            <Menu.SubMenu
                title={
                    <>
                        <span className="username">John doe</span>
                        <Avatar icon={<UserOutlined />} />
                    </>
                }
            >
                <Menu.Item key="project">
                    <CodeOutlined /> Projects
                </Menu.Item>
                <Menu.Item key="about-us">
                    <UserOutlined /> Profile
                </Menu.Item>
                <Menu.Item onClick={handleLogout} key="log-out">
                    <LogoutOutlined /> Logout
                </Menu.Item>
            </Menu.SubMenu>
        </Menu >*/}
        </>

    );
};

export default RightMenu;