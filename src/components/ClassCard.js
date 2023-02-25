import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const ClassCard = ({className,subject,room}) => (
    <Card
        hoverable
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
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title={className}
            description={<><strong>Subject: </strong>{subject} </>}
        />
    </Card>
);
export default ClassCard;