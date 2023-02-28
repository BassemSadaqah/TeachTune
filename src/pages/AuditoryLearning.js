import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
function AuditoryLearning() {
  return (
    <>
      <Navbar />
      <Card
        style={{
          maxWidth: '1200px',
          width: '95%',
          margin: '10px auto'
        }}
        headStyle={{ fontSize: '1.5em',textAlign:'center' }}
        title="Auditory Learning Approach"
      >
        <h3>TIPS FOR THE AUDITORY LEARNER</h3>
        <p style={{ fontSize: '1.3em', color:'#1b1d1e' }}>
          High visual learners tend to learn information by seeing, whether through reading or watching. Reading textbooks,
          material on the board or on overhead projectors, as well as demonstrations and diagrams are helpful. The following
          list contains strategies for visual learners.
        </p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>1. Write things down because you remember them better that way</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>2. Make study area visually appealing.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>3. Look at people and professors when they talk. This technique will help you stay focused.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>4. Most visual learners study better by themselves.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>5. Take thorough notes in lectures and when studying textbooks. Review and revise notes after class, preferably</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>immediately after class while you still remember a good deal of the lecture, to reinforce your knowledge.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>6. Read assignments in 25 minute intervals (you lose 85% of your input after reading for 25 minutes)</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>7. When beginning a textbook chapter, read the chapter overview and summary first to get a general idea of
          the information. Then begin reading.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>8. Underline main points in an eye-arresting color – for example, neon highlighter</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>9. After 25 minutes, take a one-to-five minute break, and review underlined material.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>10. Review your underlined/highlighted material after your break</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>11. Read for another 25 minutes, take a one-to-five minute break, and review underlined material.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>12. Just before closing your book, review all underlined material read that day to reinforce your learning.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>13. Write new vocabulary words on colored index cards (or write in color on white index cards) with short
          definitions on the back. Carry these with you and review them at odd moments or whenever you have spare
          time</p>
        </Card>
    </>)
}

export default AuditoryLearning