import React from "react";
import { Menu } from "antd";
import { HomeOutlined,FundProjectionScreenOutlined, AlertOutlined } from '@ant-design/icons';
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
                onClick: () => navigate('/kinesthetic-learning'),
                key: 'kinesthetic-learning',
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
                    label: 'Childs',
                    key: 'childs',
                    onClick: () => navigate('/thinking-methods'),
                },
                {
                    label: 'Teenagers',
                    key: 'teenagers',
                    onClick: () => navigate('/thinking-methods'),
                },
                {
                    label: 'Adults',
                    key: 'adults',
                    onClick: () =>  navigate('/thinking-methods'),

                }
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