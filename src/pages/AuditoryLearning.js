import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
import './styles/AuditoryLearning.css'

function AuditoryLearning() {
  return (
    <>
      <Navbar />
      <div className='auditory-container' >
        <h1 className='auditory-title'>Auditory Learning Approach</h1>
        <p className='auditory-subtitle'>How to deal with auditory learners?</p>
        <img className='auditory-head-img' src='https://learn.g2.com/hubfs/listening.png' />

        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'justify', lineHeight: '1.6rem' }}>
          Auditory learning is a cognitive style that emphasizes the importance of sound and listening in the learning process. People who prefer this learning style often rely on their hearing and listening skills to process, understand, and retain information.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#4e5250', fontWeight: 'bold', textAlign: 'justify', lineHeight: '1.6rem' }}>
          This type of learning can be particularly effective for individuals who are able to focus on and absorb information through auditory stimuli. Auditory learners typically process information by listening to lectures, participating in discussions, and engaging in other activities that involve sound. They may also be skilled at discerning nuances in tone of voice, pitch, and other auditory cues that can convey meaning, they can benefit from using mnemonic devices that involve sound or rhythm, such as songs, rhymes, or acronyms. Repetition can also be an effective tool for auditory learners, as they can use repetition to help reinforce information and commit it to memory.
        </p>
        <iframe width='100%' height='500' src="https://www.youtube.com/embed/bgIXy2dVXdc" title="Auditory Learner Study Tips THAT WORK!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 style={{ fontSize: '1.5rem', marginTop: '35px' }}>Strategies to use with your students</h3>


        <ul className='auditory-strategies-list'>
          <li className='auditory-strategies-item'>
            One such strategy is to repeat essential concepts and points while modulating the tone of their voice to emphasize key information
          </li>
          <li className='auditory-strategies-item'>
            They can also provide audio recordings of lectures or course materials to enable students to review the content at their own time.
          </li>
          <li className='auditory-strategies-item'>
            Podcasts related to the lecture topic can also be utilized, giving students the option to either read articles or listen to audio recordings.
          </li>
          <li className='auditory-strategies-item'>
            Minimizing background noise can prevent learners from being distracted from the lecture, at the same time they shouldn’t be left in complete silence as this also can distract them from the topic.
          </li>
          <li className='auditory-strategies-item'>
            It preferable to consider reducing tasks that involve extensive reading or writing, as this may hinder the attention span of auditory learners          </li>
          <p style={{textAlign:'justify'}}>
            <strong style={{ color: '#353535' }}>It is important to note that while the strategies outlined above can be </strong> effective for addressing the needs of auditory learners, they may not be as effective if the instructor does not take into account that each learner has a unique way of thinking and learning, and their auditory systems can vary greatly in terms of sensitivity and responsiveness. Therefor instructors should make an effort to comprehend the unique needs and preferences of each student. This approach entails taking into account their strengths and weaknesses, as well as any auditory or sensory difficulties they may face.
          </p>
        </ul>


        <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '0' }}>Useful tools to help providing auditory content in your presentation</h3>
        <div style={{marginLeft:'25px'}}>
          <h3 style={{ marginBottom: '10px' }}>1. Text-to-speech software</h3>
          <p className='auditory-paragraph'>
            There are several text-to-speech software options available online that can convert written text into audio. Some popular examples include <a target='_blank' href='https://www.naturalreaders.com/'>NaturalReader</a>, or <a target='_blank' href='https://cloud.google.com/text-to-speech/'>Google Text-to-Speech</a>, which can be used to convert the lecture’s script into audio file so that students can listen to at their spare time .
          </p>

          <h3 style={{ marginBottom: '10px' }}>2. Sound libraries</h3>
          <p className='auditory-paragraph'>
            Online sound libraries such as <a target='_blank' href='https://soundbible.com/search.php?q=alphabet+letters'>SoundBible</a> offer a wide variety of sound effects and audio clips that can be used to enhance presentations        </p>

          <h3 style={{ marginBottom: '10px' }}>3. Podcasts</h3>
          <p className='auditory-paragraph'>
            There are numerous educational podcasts available online like apple podcasts, google podcasts, or Spotify which cover a variety of subjects. Teachers can recommend specific episodes or series to their students or incorporate relevant clips into their lectures.        </p>

          <h3 style={{ marginBottom: '10px' }}>4. Audio recording tools</h3>
          <p className='auditory-paragraph'>
            Teachers can record their lectures and provide audio recordings to students for review. Online tools such as <a target='_blank' href='https://www.audacityteam.org/'>Audacity</a> and <a target='_blank' href='https://voicethread.com/'>VoiceThread</a> can be used for recording and editing audio.        </p>

          <h3 style={{ marginBottom: '10px' }}>5. Youtube</h3>
          <p className='auditory-paragraph'>
            YouTube has an extensive collection of videos and audio recordings on a wide range of topics. Teachers can use these resources to supplement their lectures or provide additional auditory material for students to explore.        </p>
        </div>
      </div>
    </>)
}

export default AuditoryLearning