import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
function KintethicLearning() {
  return (
    <>
      <Navbar />
      <Card
        style={{
          maxWidth: '1200px',
          width: '95%',
          margin: '10px auto'
        }}
        headStyle={{ fontSize: '1.5em',textAlign: 'center' }}
        title="Kintethic Learning Approach"
      >
        <h3>TIPS FOR THE KINTETHIC LEARNER</h3>
        <p style={{ fontSize: '1.3em', color:'#1b1d1e'}}>
          High kinesthetic learners acquire knowledge best through manipulation – doing, touching, hands on, and writing
          techniques. Primary kinesthetic learners would benefit from finding their secondary learning mode and using
          directions for either visual or auditory in conjunction with the following hints.
        </p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>1. Write things down because you remember them better that way.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>2. Try studying with a friend so that you can talk out loud and hear the information.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>3. When memorizing, pace or walk around while reciting to yourself or looking at a note card, and also try
          writing the information on a desk with your fingers.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>4. Keep something in your hand that is malleable. Knead or tap to a rhythm as you study. As much as you can,
          translate what you are learning into something that can be touched. Typing is helpful, as is writing your
          notes. If possible, type your notes on index cards. Eating, drinking, chewing gum, and listening to music are
          also helpful.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>5. Read assignments for 25 minutes (no more- you lose 85% of your input after the first 25 minutes.). When
          beginning a textbook chapter, read the summary to get a general idea of the information. Then begin the
          reading (you might even try reading aloud).</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>6. Read assignments in 25 minute intervals (you lose 85% of your input after reading for 25 minutes)</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>7. Underline main points in an eye-arresting color – for example, neon highlighter</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>8. After 25 minutes, take a one-to-five minute break, and review underlined material..</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>9. Review your underlined/highlighted material after your break</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>10. Read for another 25 minutes, take a one-to-five minute break, and review underlined material.</p>
        <p style={{ fontSize: '1.2em', color:'#1b1d1e' }}>11. Review aloud from the beginning of underlined materials. Repeat.</p>
        </Card>
        <hr/>
    </>)
}

export default KintethicLearning