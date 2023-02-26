import React,{useEffect, useState} from 'react'
import { collection, getDocs, getDoc, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import {Card} from 'antd'
import Quiz from '../components/Quiz';
function Survey() {
  const [classData,setClassData]=useState({})
  useEffect(()=>{
    async function getSurveyData(){
      const classId=document.location.pathname.split('/')[2]
      console.log(classId)
      const querySnapshot = await getDoc(doc(db, "classes",classId)) ;
      console.log(querySnapshot.data())
      // let classesArray = []
      // querySnapshot.forEach((doc) => {
      //   classesArray.push({ ...doc.data(), docId: doc.id })
      // });
      setClassData(querySnapshot.data())
    }
    getSurveyData()
  },[])
  return (
    <>
      <Card
        style={{
          maxWidth: '1200px',
          width:'95%',
          margin: '10px auto'
        }}
        headStyle={{textAlign:'center'}}
        title={classData.className+" Class Survey"}
      >
        <Quiz classId={document.location.pathname.split('/')[2]}/>
    </Card>
    </>
  )
}

export default Survey