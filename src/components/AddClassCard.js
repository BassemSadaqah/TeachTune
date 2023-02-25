import { UserOutlined, PlusCircleOutlined,PlusOutlined, EllipsisOutlined, SettingOutlined ,InfoCircleOutlined} from '@ant-design/icons';
import { Avatar, Modal, Card, Form, Input, Radio, Button, notification } from 'antd';
import React,{useState,useContext} from 'react';
import { userContext } from '../userContext';
import {db} from '../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

const { Meta } = Card;
// const form = Form.useFormInstance();
const ClassCard = ({Rerender}) => {
    const user=useContext(userContext)
    const [open, setOpen] = useState(false);
    const [createClassForm] = Form.useForm();
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
    function handleModalOk(){
        createClassForm.submit()
    }
    async function handleFormSubmit(values){

        console.log(values)
        setLoading(true)
        const className = values.class_name
        const subject = values.subject
        const room = values.room
        if(!className || !subject){
            setLoading(false) 
            return errorNotification('Failed to create class!', 'Please make sure you\'ve provided all the required fields')
        }
        console.log(className,subject,room)
        try {
            const docRef = await addDoc(collection(db, "classes"), {
                uid:user.uid,
                className:className,
                subject:subject,
                room:room?room:null
            });
            console.log("Document written with ID: ", docRef.id);
            successNotification('Class Created Successfully!')
            Rerender(Math.random())
            setOpen(false)
            setLoading(false)
        } catch (e) {
            errorNotification('Failed to create class!','Please make sure you\'ve provided all the required fields')
            setLoading(false)
            console.error("Error adding document: ", e);
        }

    }
    return(
    <>
    {contextHolder}
    <Card
        onClick={() => setOpen(true)}
        hoverable
        style={{
            width: 300,
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer'
        }}
    >
        <PlusOutlined twoToneColor="#eb2f96" style={{ fontSize: '210px', color: '#2aa' }}/>
    </Card>
            <Modal
                title="Create new Class"
                centered
                open={open}
                onOk={handleModalOk}
                okButtonProps={{disabled:loading}}
                onCancel={() => setOpen(false)}
                width={600}
                okText='Create'
            >
                <Form
                    form={createClassForm}
                    layout="vertical"
                    onFinish={handleFormSubmit}
                >
                    <Form.Item  name='class_name' label="Class Name" required 
                    // tooltip="This is a required field"
                    >
                        <Input placeholder="Please enter your class name" />
                    </Form.Item>
                    <Form.Item
                        required
                        name='subject'
                        label="Subject"
                        // tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input required placeholder="Please enter the class subject" />
                    </Form.Item>
                    <Form.Item
                        label="Room"
                        name='room'
                        // tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="Class location [optional]" />
                    </Form.Item>
                </Form>

            </Modal>
    </>
)};
export default ClassCard;