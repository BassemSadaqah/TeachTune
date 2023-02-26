import React from "react";
import { Menu } from "antd";
import { HomeOutlined, AlertOutlined , MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function LeftMenu({ mode }){
    const navigate=useNavigate()
    const items = [
        {
            label: ' Home',
            key: 'home',
            icon: < HomeOutlined  />,
            onClick:()=>{navigate('/')}
        },
        {
            label: 'Thinking Methods',
            key: 'app',
            icon: <AlertOutlined />,
            children: [
            {
                label: 'Age 3-6',
                key: 'age1',
            },
            {
                label: 'Age 7-9',
                key: 'age2',
            },
            {
                label: 'Age 10-13',
                key: 'age3',
            },
            {
                label: 'Age 14-16',
                key: 'age4',
            },
            {
                label: 'Age 17-20',
                key: 'age5',
            },
            ]
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
        <>
        <Menu mode={mode} items={items}/>
        </>
    );
};

export default LeftMenu