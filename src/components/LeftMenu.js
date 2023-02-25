import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const LeftMenu = ({ mode }) => {
    const items = [
        {
            label: ' Home',
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            // disabled: true,
        },
        {
            label: (
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    About Us
                </a>
            ),
            key: 'alipay',
        },
    ];
    return (
        <Menu mode={mode} items={items}/>
        // <Menu mode={mode}>
        //     <Menu.Item key="explore">Explore</Menu.Item>
        //     <Menu.Item key="features">Features</Menu.Item>
        //     <Menu.Item key="about">About Us</Menu.Item>
        //     <Menu.Item key="contact">Contact Us</Menu.Item>
        // </Menu>
    );
};

export default LeftMenu