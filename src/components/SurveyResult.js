import React from 'react'
import { Button, Result } from 'antd';

function SurveyResult() {
  return (
      <Result
          status="success"
          title="Your Survey Has Been Submitted Successfully"
          subTitle="Thanks for your time."
        //   style={{marginTop:'20vh'}}
          extra={[
            //   <Button type="primary" key="console">
            //       Go Console
            //   </Button>,
              <Button key="buy" onClick={()=>window.location.reload()}>Submit Another Response</Button>,
          ]}
      />
  )
}

export default SurveyResult