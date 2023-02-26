import React from 'react'
import {Card} from 'antd'
import Navbar from '../components/Navbar'
function LearningApproaches() {
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
              title="Different Learning Approaches"
          >
        <h3>We all experience the world in unique ways, and with that comes variation in the ways we learn best. Understanding these different types of learning styles can drastically impact the way teachers handle their students, set up group projects and adapt individual learning. Without understanding and acknowledging these different ways of learning, teachers might end up with a handful of students lagging behind their classmates—in part because their unique learning style hasn’t been activated.

          Part of your responsibility as an educator is to adjust your lessons to the unique group of students you are working with at any given time. The best teachers can cater to each student’s strengths, ensuring they are truly grasping the information.

          So how do you meet the needs of different types of learners in your class? Join us as we outline the four types of learning styles and how teachers can practically apply this information in their classrooms.

    </h3>
          </Card>
      </>  )
}

export default LearningApproaches