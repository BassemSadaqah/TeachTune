import React from 'react'
import {Card} from 'antd'
import Navbar from '../components/Navbar'
function AuditoryLearning() {
  return (
      <>
      <Navbar/>
          <Card
              style={{
                  maxWidth: '1200px',
                  width: '95%',
                  margin: '10px auto'
              }}
              headStyle={{ fontSize: '1.5em' }}
            //   headStyle={{ textAlign: 'center' }}
              title="Auditory Learning Approach"
          >
            <p>eee</p>
          </Card>
      </>  )
}

export default AuditoryLearning