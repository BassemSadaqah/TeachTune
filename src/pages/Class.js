import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, Button, Col, Row, Statistic, notification } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import ResultsTable from '../components/ResultsTable'
import Navbar from '../components/Navbar';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';
import Loading from './Loading';
import { QRCodeSVG } from 'qrcode.react';
import {Link} from 'react-router-dom';


function learningMethodFormatter(value){
  value = value.replace('Kinaesthetic', 'Kinesthetic')
  if(value=='No Enough Data'){
    return(
      <>{value}</>
    )
  }else{
  return(
    <Link to={'/' + value.split(' ')[0].toLowerCase() +'-learning'}>{value}</Link>
  )}
}

function Class() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const [surveyData, setSurveyData] = useState(false)
  const [learningMethod, setLearningMethod] = useState({})
  const errorNotification = (head, body, placement = 'bottom') => {
    api.error({
      message: head,
      description: body,
      placement,
    });
  };
  const successNotification = (head, body, placement = 'bottom') => {
    api.success({
      message: head,
      description: body,
      placement,
    });
  };
  const handleCopySurveryLink = () => {
    successNotification('Link coped to clipboard!')
    console.log(state)
    navigator.clipboard.writeText(`${document.location.protocol}//${document.location.host}/survey/${state.classId}`)
  }
  if (state == null) {
    document.location = '/'
    // navigate('/')
  }
  useEffect(() => {
    async function getClassData() {
      let surveyData = []
      console.log(state.classId)
      console.log('ee')
      const querySnapshot = await getDocs(query(collection(db, "surveys"), where('classId', '==', state.classId)));
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc)
        if (doc.exists) {
          surveyData.push(doc.data())
          // No Results
        }
      });
      let learningApproach = ''
      let learningApproachPrecentage = 0
      let visual_count = 0
      let auditory_count = 0
      let kinaesthetic_count = 0
      for (let answer of surveyData) {
        if (answer.learningApproach == 'Visual') {
          visual_count++
        } else if (answer.learningApproach == 'Auditory') {
          auditory_count++
        } else if (answer.learningApproach == 'Kinaesthetic') {
          kinaesthetic_count++
        }
      }
      let max_lmethod_count = Math.max(visual_count, auditory_count, kinaesthetic_count)
      if (visual_count === max_lmethod_count) {
        learningApproach = 'Visual'
        console.log(visual_count)
        learningApproachPrecentage = Math.floor((visual_count / surveyData.length)*100)
      } else if (auditory_count === max_lmethod_count) {
        learningApproach = 'Auditory'
        learningApproachPrecentage = Math.floor((auditory_count / surveyData.length)*100)
      } else if (kinaesthetic_count === max_lmethod_count) {
        learningApproach = 'Kinaesthetic'
        learningApproachPrecentage = Math.floor((kinaesthetic_count / surveyData.length)*100)

      }
      setSurveyData(surveyData)
      setLearningMethod({ method: learningApproach, percentage: learningApproachPrecentage })
    }
    getClassData()
  }, [])
  return (
    <>
      {contextHolder}
      {surveyData ?
        <>
          <Navbar />
          <Card
            style={{
              maxWidth: '1200px',
              margin: '10px auto',
              width: '95%',
            }}
            title={state.className + ' Class Statistics'}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Registered Students" value={surveyData.length} />
              </Col>
              <Col span={12}>
                <Statistic title="Best Learning method" formatter={learningMethodFormatter} value={surveyData.length ? (learningMethod.method + ' (' + learningMethod.percentage + '%)') :'No Enough Data'} />
              </Col>
            </Row>
            <hr style={{ borderColor:'rgba(0,0,0,0.1)'}}/>
            <div style={{ marginTop: '30px',marginBottom:'-20px',textAlign:'center'}}>
              <QRCodeSVG value={`${document.location.protocol}//${document.location.host}/survey/${state.classId}`} />,
            </div>
            <Button style={{ margin: '0 auto', display: 'block', marginTop: '40px' }} onClick={handleCopySurveryLink} type="primary" icon={<CopyOutlined />}>Copy Survey Link</Button>
          </Card>
          <Card
            style={{
              maxWidth: '1200px',
              margin: '10px auto',
              padding: '0px !important'
            }}
            bodyStyle={{ padding: 0 }}
            headStyle={{ textAlign: 'center' }}
            title='Survey Results'
          >
            <ResultsTable data={surveyData} />

          </Card></> : <Loading/>}
    </>)
}

export default Class