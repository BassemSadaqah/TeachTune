import React from 'react'
import {Card} from 'antd'
import Navbar from '../components/Navbar'
function VisualLearning() {
  return (
      <>
      <Navbar/>
          <Card
              style={{
                  maxWidth: '1200px',
                  width: '95%',
                  margin: '10px auto'
              }}
            //   headStyle={{ textAlign: 'center' }}
              title="Visual Learning Approach"
          >
            <p>eee</p>
          </Card>
      </>  )
}

export default VisualLearning