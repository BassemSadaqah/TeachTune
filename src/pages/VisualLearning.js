import React from 'react'
import { Card } from 'antd'
import Navbar from '../components/Navbar'
import './styles/VisualLearning.css'
function VisualLearning() {
    return (
        <>
            <Navbar />
            <div className='visual-container' >
                <h1 className='visual-title'>Visual Learning Approach</h1>
                <p className='visual-subtitle'>How to deal with visual learners?</p>
                <img className='visual-head-img' src='https://cdn-e360.s3-sa-east-1.amazonaws.com/contenido-visual-large-NQSp4IfMXl.png' />
                {/* <div style={{ backgroundColor: '#dfebe3',  background: "URL('https://www.maxpixel.net/static/photo/1x/Hint-Education-Background-Learning-Subject-School-4264032.jpg')",paddingTop:'10px',borderRadius:'10px'}}>
                    <img style={{ margin: '0 auto', display: 'block', width: '300px', filter:'ehue-rotate(90deg'}} src='https://cdn-icons-png.flaticon.com/512/1792/1792045.png'/>
                </div> */}
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'justify', lineHeight: '1.6rem' }}>
                    Typically, a visual learner would rather read material from a textbook or from a blackboard than hear a lecture. Utilizing visualization techniques aids in memory retention. They frequently love drawing and doodling, and they might use these activities as study aids.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#4e5250', fontWeight: 'bold', textAlign: 'justify', lineHeight: '1.6rem' }}>
                    Sight words are often used in spoken language by visual learners. They can say, "Let's look at this," as an illustration. They are excellent at memory games that involve visual recall because they can retain details like colors and spatial relationships with ease. Because they can mentally picture maps and routes, they frequently have a good sense of direction. Visual learners typically prefer images, maps, graphs and other visual representations to other forms of instruction. They like to read.
                </p>
                <iframe width='100%' height='500' src="https://www.youtube.com/embed/gHhQl4FFGbc" title="7 Effective Teaching Strategies For The Classroom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3 style={{ fontSize: '1.5rem', marginTop: '35px', marginBottom: '0px' }}>Strategies to use with visual learners</h3>

                <h3 style={{ marginBottom: '10px' }}>1. Visualizing concepts</h3>
                <p className='visual-paragraph'>Teachers can help support a visual learner by offering lots of visual aids to communicate ideas and information to these students. In order to keep visual learners interested, try to create visual stimulation. These kids learn, comprehend, and recall knowledge more readily when it is presented to them visually in written texts, photographs, charts, graphs, and other visual forms.</p>
                <iframe width="100%" height="520" src="https://www.youtube.com/embed/W8qmj4oY9mY" title="Visualizing - Reading Strategies &amp; Skills for Comprehension - Educational Video for Elementary Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                <h3 style={{ marginBottom: '10px' }}>2. Mind mapping</h3>
                <p className='visual-paragraph'>
                    Mind mapping is a technique that uses diagrams to visually organize information. You can use this technique to break down complex topics into smaller, more manageable parts.
                </p>
                <iframe width="100%" height="570" src="https://www.youtube.com/embed/xCyjFipytRE?list=PLfdPnYIUAlXBHxQnauPHkAwUhAKOpLJGX" title="Mind Mapping | Teaching Strategies #3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h3 style={{ marginBottom: '10px' }}>3. Graphic organizers</h3>
                <p className='visual-paragraph'>
                    Graphic organizers are visual tools that help students organize information. You can use graphic organizers such as Venn diagrams, flowcharts, and timelines to help students understand relationships between concepts.                </p>
                <iframe width="100%" height="520" src="https://www.youtube.com/embed/uU0v8eFO53g" title="Graphic Organizers | Teaching Strategies # 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h3 style={{ marginBottom: '10px' }}>4. Use whiteboards</h3>
                <p className='visual-paragraph'>
                    Whiteboards are an excellent tool for visual learners. You can use whiteboards to draw diagrams, charts, and other visual aids to help students understand complex ideas.
                </p>

                <h3 style={{ marginBottom: '10px' }}>5. Use colors</h3>
                <p className='visual-paragraph'>
                    Using colors can help visual learners retain information. For instance, you can use different colors to highlight key points or to differentiate between different ideas.
                </p>

                <h3 style={{ marginBottom: '10px' }}>6. Provide handouts</h3>
                <p className='visual-paragraph'>
                    Handouts can serve as a reference for visual learners. You can provide handouts that summarize the key points of your lecture, include diagrams or charts, and other relevant information.
                </p>

                <h3 style={{ marginBottom: '10px' }}>7. Taking notes</h3>
                <p className='visual-paragraph'>
                    Encourage taking notes, especially when non-visual teaching techniques are being employed. To promote the learning of more visually inclined pupils, provide written materials along with other kinds of education, such as an outline of a lecture, diagrams, or a handout that summarizes the key topics.
                </p>

                <h3 style={{ marginBottom: '10px' }}>8. Dividing the Lesson</h3>
                <p className='visual-paragraph'>
                    For complex topics delivered orally, break the subject down into smaller sections, a technique called microlearning. Provide written or visual companion handouts to reinforce the information for visual learners.
                </p>

                <h3 style={{ marginBottom: '10px' }}>9. Using the activities</h3>
                <p className='visual-paragraph'>
                    Another helpful technique is called timeboxing, in which you dedicate a fixed amount of time for each activity. This method is helpful for visual learners who tend to do best when they know the parameters (as in length of time and other variables) of each lesson.
                </p>
                <iframe width="100%" height="520" src="https://www.youtube.com/embed/NLH9yaHIIoQ" title="Examples of Differentiated Strategies used in Teaching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
        </>)
}

export default VisualLearning