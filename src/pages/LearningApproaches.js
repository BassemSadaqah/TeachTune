import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function LearningApproaches() {
  return (
    <>
      <Navbar />
      <Card
        style={{
          maxWidth: '1200px',
          width: '95%',
          margin: '10px auto',
        }}
        headStyle={{fontSize:'1.5em'}}
        //   headStyle={{ textAlign: 'center' }}
        title="Different Learning Approaches"
      >
        <h3>Overview</h3>
        <p style={{ fontSize: '1.3em' }}>We all experience the world in unique ways, and with that comes variation in the ways we learn best. Understanding these different types of learning styles can drastically impact the way teachers handle their students, set up group projects and adapt individual learning. Without understanding and acknowledging these different ways of learning, teachers might end up with a handful of students lagging behind their classmates—in part because their unique learning style hasn’t been activated.
          Part of your responsibility as an educator is to adjust your lessons to the unique group of students you are working with at any given time. The best teachers can cater to each student’s strengths, ensuring they are truly grasping the information.
          So how do you meet the needs of different types of learners in your class? Join us as we outline the four types of learning styles and how teachers can practically apply this information in their classrooms.
        </p>
        <hr />
        <Link to="/visual-learning" >
          <h3>
            1. Visual Learning
          </h3>
        </Link>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to recognize visual learners in your class:</strong> Someone with a preference for visual learning is partial to seeing and observing things, including pictures, diagrams, written directions and more. This is also referred to as the “spatial” learning style. Students who learn through sight understand information better when it’s presented in a visual way. These are your doodling students, your list makers and your students who take notes.
          How to cater to visual learners: The whiteboard or smartboard is your best friend when teaching these types of learners. Give students opportunities to draw pictures and diagrams on the board, or ask students to doodle examples based on the topic they’re learning. Teachers catering to visual learners should regularly make handouts and use presentations. Visual learners may also need more time to process material, as they observe the visual cues before them. So be sure to give students a little time and space to absorb the information.

        </p>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to cater to visual learners:</strong> The whiteboard or smartboard is your best friend when teaching these types of learners. Give students opportunities to draw pictures and diagrams on the board, or ask students to doodle examples based on the topic they’re learning. Teachers catering to visual learners should regularly make handouts and use presentations. Visual learners may also need more time to process material, as they observe the visual cues before them. So be sure to give students a little time and space to absorb the information.

        </p>
        <hr />
        <Link to="/auditory-learning" >
          <h3>
            2. Auditory Learning
          </h3>
        </Link>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to recognize auditory learners in your class:</strong> Auditory learners tend to learn better when the subject matter is reinforced by sound. These students would much rather listen to a lecture than read written notes, and they often use their own voices to reinforce new concepts and ideas. These types of learners prefer reading out loud to themselves. They aren’t afraid to speak up in class and are great at verbally explaining things. Additionally, they may be slower at reading and may often repeat things a teacher tells them.
        </p>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to cater to auditory learners:</strong> Since these students generally find it hard to stay quiet for long periods of time, get your auditory learners involved in the lecture by asking them to repeat new concepts back to you. Ask questions and let them answer. Invoke group discussions so your auditory and verbal processors can properly take in and understand the information they’re being presented with. Watching videos and using music or audiotapes are also helpful ways of learning for this group.
        </p>
        <hr />
        <Link to="/kintethic-learning" >
          <h3>
            3. Kintethic Learning
          </h3>
        </Link>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to recognize kinesthetic learners in your class:</strong> Kinesthetic learners, sometimes called tactile learners, learn through experiencing or doing things. They like to get involved by acting out events or using their hands to touch and handle in order to understand concepts. These types of learners might struggle to sit still and often excel at sports or like to dance. They may need to take more frequent breaks when studying.
        </p>
        <p style={{ fontSize: '1.3em' }}>
          <strong>How to cater to kinesthetic learners:</strong> The best way teachers can help these students learn is by getting them moving. Instruct students to act out a certain scene from a book or a lesson you’re teaching. Also try encouraging these students by incorporating movement into lessons: pacing to help memorize, learning games that involve moving around the classroom or having students write on the whiteboard as part of an activity.

        </p>   
        <p style={{ fontSize: '1.3em' }}>Once kinesthetic learners can physically sense what they’re studying, abstract ideas and difficult concepts become easier to understand.</p>   </Card>
    </>)
}

export default LearningApproaches