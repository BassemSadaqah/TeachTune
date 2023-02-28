import React,{useContext} from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
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
            <Menu disabledOverflow mode={mode} items={items} />
        </>

    );
};

export default RightMenu;