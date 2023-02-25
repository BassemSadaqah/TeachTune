import React,{useState} from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
import './styles/SignupForm.css'
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile,getAuth } from 'firebase/auth';
import { auth } from '../firebase';

function SignupForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification();
    const errorNotification = (head,body,placement='bottom') => {
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

    async function onFinish(values){
        console.log(values)
        let email=values.email
        let password=values.password
        let name=`${values.firstname} ${values.lastname}`
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                try{
                    await updateProfile(user, {
                        displayName: name
                    })
                }catch{
                    //handle error
                }
                console.log(user);
                successNotification('Account created successfully!', 'Redirecting to Login.')
                setTimeout(()=>{
                    navigate("/login")
                },1500)
                setLoading(false)
                // ...
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/email-already-in-use'){
                    errorNotification('Email Already in use','Please make sure that you have entered an new email address.')
                }else{
                    errorNotification('Something Went Wrong', 'Please make sure that you have entered a valid info.')
                }
                console.log(errorCode);
                console.log(errorMessage)
                // ..
            });
    };
    return (
        <>
        { contextHolder }
        <Form
            name="normal_login"
            className="signup-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your First Name!',
                    },
                ]}
            >
                <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
            </Form.Item>
            <Form.Item
                name="lastname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Last Name!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email address!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                />
            </Form.Item>

            <Form.Item>
                <Button disabled={loading} type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                </Button>
                <div style={{textAlign:'center'}}>
                Already a user? <Link to="/login">Login now!</Link>
                </div>
            </Form.Item>
        </Form>
        </>
    );
}

export default SignupForm