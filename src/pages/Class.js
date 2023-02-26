import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, Button, Col, Row, Statistic, notification} from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import ResultsTable from '../components/ResultsTable'
import Navbar from '../components/Navbar';
import { collection, getDocs, getDoc, addDoc, setDoc, doc, where } from "firebase/firestore";
import { db } from '../firebase';

function Class() {
  const navigate=useNavigate()
  const { state } = useLocation();
  const [api, contextHolder] = notification.useNotification();
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
  const handleCopySurveryLink=()=>{
    successNotification('Link coped to clipboard!')
    console.log(state)
    navigator.clipboard.writeText(`${document.location.protocol}://${document.location.host}/survey/${state.docId}`)
  }
  if(state==null){
    document.location='/'
    // navigate('/')
  }
  useEffect(()=>{
    async function getClassData(){
      // const querySnapshot = await getDocs(collection(db, "classes"), where('uid', '==', 'user.uid'));
      // const querySnapshot = await getDocs(collection(db, "surveys"), where('classId', '==', state.classId));
      // console.log(querySnapshot.data())
    }
    getClassData()
  },[])
  return (
    <>
    {contextHolder}
    <Navbar/>
    <Card
      style={{
        maxWidth: '1200px',
        margin:'10px auto',
        width: '95%',
      }}
        title={state.className+' Class Statistics'}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Registered Students" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Best Learning method" value={'Visual learning (80%)'} />
        </Col>
      </Row>
      <Button style={{margin:'0 auto',display:'block',marginTop:'40px'}} onClick={handleCopySurveryLink} type="primary" icon={<CopyOutlined />}>Copy Survey Link</Button>
    </Card>  
      <Card
        style={{
          maxWidth: '1200px',
          margin: '10px auto',
          padding:'0px !important'
        }}
        bodyStyle={{padding:0}}
        headStyle={{textAlign:'center'}}
        title='Survey Results'
      >
    <ResultsTable/>

    </Card>
    </>)
}

export default Class