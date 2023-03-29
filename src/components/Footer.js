import React from 'react'
import { HeartTwoTone } from '@ant-design/icons';

function Footer() {
  return (
      <div style={{marginTop:'auto', width:'100%',borderTop:'1px solid #adadad7e',padding:'0px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <p style={{ textAlign: 'center', color: '#5f5f5f', fontSize: '0.9em', fontWeight: 'bold', display: 'block' }}>Made with <HeartTwoTone twoToneColor='#ff0000' />  For GDSC</p>
    </div>
  )
}

export default Footer