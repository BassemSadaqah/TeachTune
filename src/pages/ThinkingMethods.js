import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
function ThinkingMethods() {
    return (
        <>
            <Navbar />
            <Card
                style={{
                    maxWidth: '1200px',
                    width: '95%',
                    margin: '10px auto'
                }}
                //   headStyle={{ textAlign: 'center' }}
                title="Thinking Methods"
            >
                <p>...</p>
            </Card>
        </>)
}

export default ThinkingMethods