import React, { useState } from 'react'
import { Button, Form, Input, Radio } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase'
import SurveyResult from './SurveyResult';

function Quiz({ classId }) {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const allQuestions = [{
        "question": "1- What learning style would YOU say you have?",
        "options": ["Visual", "Auditory", "Kintethic"],
        "answers": [1, 2, 3]
    },
    {
        "question": "2- Would you prefer to draw something, discuss something or make something?",
        "options": ["Draw", "Make", "Discuss"],
        "answers": [1, 3, 2]
    },
    {
        "question": "3- I prefer to note information by...",
        "options": ["Writing it", "Recording it", "Typing it"],
        "answers": [1, 2, 3]
    },
    {
        "question": "4- You're learning to sing a new song, but you don't know the music or the lyrics - how do you do it?",
        "options": ["Listen to the music and imagine singing along", "Play the music and try singing along right from the start", "Write out the lyrics and read them to the music"],
        "answers": [3, 2, 1]
    },
    {
        "question": "5- I mostly remember...",
        "options": ["The things I see", "The things I hear", "The things I do"],
        "answers": [1, 2, 3]
    },
    {
        "question": "6- When I am adding numbers, I verify my answer by:",
        "options": ["Using my fingers to get a feeling if it is correct.", "Looking at the numbers to see if they are correct", ". Counting the numbers in my head or out loud",
        ],
        "answers": [3, 1, 2]
    },
    {
        "question": "7- When learning a new game, I prefer to...",
        "options": ["Listen to someone who's played it tell me how to play", "Watch a video of how to play", "Figure it out as I play"],
        "answers": [2, 1, 3]
    },
    {
        "question": "8- Before going to sleep at night, I appreciate:",
        "options": ["The room is dark", "The bed feels comfortable", "The room is quiet",],
        "answers": [1, 3, 2]
    },
    {
        "question": "9- When I have to remember a list of items, I remember them best if I..",
        "options": ["Write them down", "Repeat them over and over to me ", "Move around and use my fingers to name each item"],
        "answers": [1, 2, 3]
    },
    {
        "question": "9- Which restaurant sounds the worst to you?",
        "options": ["One with music too loud", "One with lights too bright", "One with uncomfortable chairs"],
        "answers": [2, 1, 3]
    }

    ]
    const handleFormSubmit = async (values) => {
        setLoading(true)
        let visual_count = 0
        let auditory_count = 0
        let kinaesthetic_count = 0
        for (let answer of Object.entries(values).splice(3)) {
            if (answer[1] === 'option-1') {
                visual_count++
            } else if (answer[1] === 'option-2') {
                auditory_count++
            } else if (answer[1] === 'option-3') {
                kinaesthetic_count++
            }
        }
        let learningApproach = ''
        let max_count = Math.max(visual_count, auditory_count, kinaesthetic_count)
        if (visual_count === max_count) {
            learningApproach = 'Visual'
        } else if (auditory_count === max_count) {
            learningApproach = 'Auditory'
        } else if (kinaesthetic_count === max_count) {
            learningApproach = 'Kinaesthetic'
        }
        try {
            const docRef = await addDoc(collection(db, "surveys"), {
                classId,
                name: values.name,
                schoolId: values.school_id || null,
                email: values.email,
                learningApproach
            });
            setSubmitted(true)
        } catch { setLoading(false) }
    }
    return (
        <>{submitted ? <SurveyResult /> :
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

                <Button loading={loading} size='large' type="primary" ghost shape="round" style={{ margin: '0 auto', display: 'block' }} htmlType="submit">
                    Submit
                </Button>
            </Form>}</>
    )
}

export default Quiz