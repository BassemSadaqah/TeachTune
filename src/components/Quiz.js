import React, { useState } from 'react'
import { Button, Form, Input, Radio } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { collection, getDoc, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase'
import { async } from '@firebase/util';
import SurveyResult from './SurveyResult';
import { SendOutlined } from '@ant-design/icons';

function Quiz({classId}) {
    const [loading,setLoading]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const allQuestions = [
        {
            question: 'What learning style would YOU say you have?',
            options: ['Visual', 'Auditory', 'Kintethic'],
            answers: [1, 2, 3],
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Mars', 'Venus', 'Jupiter'],
            answers: [1, 2, 3],
        },
        {
            question: 'What is the tallest mammal in the world?',
            options: ['Elephant', 'Giraffe', 'Hippopotamus'],
            answers: [1, 2, 3],
        },
        {
            question: 'What is the smallest country in the world?',
            options: ['Monaco', 'Vatican City', 'Maldives'],
            answers: [1, 2, 3],
        },]
    const handleFormSubmit = async (values) => {
        setLoading(true)
        let visual_count=0
        let auditory_count=0
        let kinaesthetic_count=0
        for(let answer of Object.entries(values).splice(3)){
            if(answer[1]==='option-1'){
                visual_count++
            }else if(answer[1]==='option-2'){
                auditory_count++
            } else if (answer[1] ==='option-3'){
                kinaesthetic_count++
            }
        }
        let learningApproach=''
        let max_count=Math.max(visual_count,auditory_count,kinaesthetic_count)
        if(visual_count===max_count){
            learningApproach='Visual'
        }else if(auditory_count===max_count){
            learningApproach = 'Auditory'
        }else if(kinaesthetic_count===max_count){
            learningApproach ='Kinaesthetic'
        }
        try{
            const docRef = await addDoc(collection(db, "surveys"), {
                classId,
                name: values.name,
                schoolId: values.school_id || null,
                email: values.email,
                learningApproach
            });
            setSubmitted(true)
        }catch{setLoading(false)}
    }
    return (
        <>{submitted?<SurveyResult/>:
            <Form name="form_item_path" layout="vertical" onFinish={handleFormSubmit}>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Full name',
                        },
                    ]} name="name" label="Full Name">
                    <Input name='name' />
                </Form.Item>
                <FormItem name="school_id" label="School ID [optional]">
                    <Input />
                </FormItem>
                <FormItem rules={[
                    {
                        required: true,
                        message: 'Please enter your Email Address',
                    },
                ]} required name="email" label="Email Address">
                    <Input />
                </FormItem>
                {allQuestions.map((question, i) => (
                    <FormItem rules={[
                        {
                            required: true,
                            message: 'All Questions must be answered',
                        }]} key={"surveyquestion" + i} name={"surveyquestion" + i} label={question.question}>
                        <Radio.Group>
                            {question.options.map((option, i) => (
                                <Radio key={"surveyquestionoption" + i} value={"option-" + question.answers[i]}>{option}</Radio>
                            ))}
                        </Radio.Group>
                    </FormItem>
                ))}

                <Button  loading={loading} size='large' type="primary" ghost shape="round"  style={{margin:'0 auto',display:'block'}} htmlType="submit">
                    Submit
                </Button>
            </Form>}</>
    )
}

export default Quiz