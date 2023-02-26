import React from "react";
import { Menu } from "antd";
import { HomeOutlined,FundProjectionScreenOutlined, AlertOutlined , MailOutlined, SettingOutlined } from '@ant-design/icons';
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
            label: 'Learning Approaches',
            key: 'app',
            icon: < FundProjectionScreenOutlined  />,
            children: [
            {
                label: 'Overview',
                onClick: () => navigate('/learning-approaches'),
                key: 'learning-approaches',
            },
            {
                label: 'Visual Learning',
                onClick:()=>navigate('/visual-learning'),
                key: 'visual-learning',
            },
            {
                label: 'Auditory Learning',
                onClick: () => navigate('/auditory-learning'),
                key: 'auditory-learning',
            },
            {
                label: 'Kintethic Learning',
                onClick: () => navigate('/kintethic-learning'),
                key: 'kintethic-learning',
            },
            ]
            // disabled: true,
        },
        {
            label: "Thinking Methods",  
            key: 'alipay',
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
        // {
        //     label: (
        //         <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        //             About Us
        //         </a>
        //     ),
        //     key: 'alipay',
        // },
    ];
    return (
        <>
            <Menu disabledOverflow max mode={mode} items={items}/>
        </>
    );
};

export default LeftMenu