import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const ClassCard = ({className,subject,room,docId}) => {
    const navigate = useNavigate()
    function handleClassRedirect() {
        console.log(docId)
        navigate('/class',{state:{className,subject,room,classId:docId}})
    }    
    return(
    <Card
        hoverable
        onClick={handleClassRedirect} 
        style={{
            width: 300,
        }}
        cover={
            <img
                alt="profile"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar icon={< UserOutlined />} />}
            // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title={className}
                description={<><strong>{subject}</strong>
                {/* <span style={{float:'right'}}>Room: 101</span> */}
                {/* <div>
                <Tag style={{float:'right'}} color="success">Visual</Tag>
                </div> */}
                 </>}
        />
    </Card>
)};
export default ClassCard;