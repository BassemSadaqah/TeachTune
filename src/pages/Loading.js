import React from 'react'
import { Spin } from 'antd';

function Loading() {
  return (
      <Spin style={{marginTop:'50vh'}} tip="Loading" size="large">
          <div className="content" />
      </Spin>  )
}

export default Loading