import { useState } from 'react';
import { Radio, Button, Row, Col, Card } from 'antd';

const allQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: 'Jupiter',
    },
    {
        question: 'What is the tallest mammal in the world?',
        options: ['Elephant', 'Giraffe', 'Hippopotamus', 'Rhinoceros'],
        answer: 'Giraffe',
    },
    {
        question: 'What is the smallest country in the world?',
        options: ['Monaco', 'Vatican City', 'Maldives', 'Nauru'],
        answer: 'Vatican City',
    },
    {
        question: 'What is the largest ocean in the world?',
        options: ['Pacific Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean',
    },
    {
        question: 'Who wrote the book "The Catcher in the Rye"?',
        options: ['F. Scott Fitzgerald', 'J. D. Salinger', 'Ernest Hemingway', 'Harper Lee'],
        answer: 'J. D. Salinger',
    },
    {
        question: 'What is the highest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
        answer: 'Mount Everest',
    },
    {
        question: 'Who directed the movie "The Shawshank Redemption"?',
        options: ['Steven Spielberg', 'Martin Scorsese', 'Frank Darabont', 'Christopher Nolan'],
        answer: 'Frank Darabont',
    },
    {
        question: 'What is the smallest bone in the human body?',
        options: ['Stapes', 'Malleus', 'Incus', 'Femur'],
        answer: 'Stapes',
    },
];

const Quiz = () => {
    const [currentQuestions, setCurrentQuestions] = useState(allQuestions.slice(0, 3));
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);

    const handleOptionChange = (e, questionIndex) => {
        const newSelectedOptions = { ...selectedOptions };
        newSelectedOptions[questionIndex] = e.target.value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleNextQuestions = () => {
        let newScore = score;
        currentQuestions.forEach((question, index) => {
            if (selectedOptions[index] === question.answer) {
                newScore++;
            }
        });
        setScore(newScore);

        const nextQuestions = allQuestions.slice(currentQuestions.length, currentQuestions.length + 3);
        setCurrentQuestions(nextQuestions);
        setSelectedOptions({});
    };

    const handleReset = () => {
        setCurrentQuestions(allQuestions.slice(0, 3));
        setSelectedOptions({});
        setScore(0);
    };

    const renderQuestions = () => {
        return currentQuestions.map((question, index) => (
            <Card key={index} title={`Question ${index + 1}`}>
                <p>{question.question}</p>
                <Radio.Group onChange={(e) => handleOptionChange(e, index)} value={selectedOptions[index]}>
                    {question.options.map((option) => (
                        <Radio key={option} value={option}>
                            {option}
                        </Radio>
                    ))}
                </Radio.Group>
            </Card>
        ));
    };

    return (
        <div>
            {currentQuestions.length === 0 ? (
                <div>
                    <h2>Your Score: {score}</h2>
                    <Button type="primary" onClick={handleReset}>
                        Restart Quiz
                    </Button>
                </div>
            ) : (
                <div>
                    {renderQuestions()}
                    <Row justify="center">
                        <Col>
                            <Button type="primary" onClick={handleNextQuestions}>
                                Next
                            </Button>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
};
export default Quiz