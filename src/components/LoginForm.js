import React, { useState } from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
import './styles/LoginForm.css'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false)
    const [api, contextHolder] = notification.useNotification();
    const errorNotification = (head, body, placement = 'bottom') => {
        api.error({
            message: head,
            description: body,
            placement,
        });
    };
    const successNotification = (head, body, placement = 'bottom') => {
        api.success({
            message: head,
            description: body,
            placement,
        });
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        let email=values.email
        let password=values.password
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // successNotification('Signed in Successfully!','ee')
                navigate("/")
                // console.log(user);
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode ==='auth/wrong-password'){
                    errorNotification("You've entered an incorrect password!",'Please try again.')
                } else if (errorCode ==='auth/user-not-found'){
                    errorNotification("Email not found!", 'Please try again.')
                }
                else{
                    errorNotification("Something went wrong", "Please make sure you've entered a valid credentials.")

                }
                console.log(errorCode, errorMessage)
            });

    };
    return (
        <>
        {contextHolder}
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button disabled={loading} type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <div style={{ textAlign: 'center' }}>
                New User? <Link to="/register">register now!</Link>
                </div>
            </Form.Item>
        </Form>
        </>
    );
}

export default LoginForm