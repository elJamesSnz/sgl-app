import React from 'react'
import { Button, Segment, Divider, Input,Dimmer, Loader, Image} from 'semantic-ui-react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

export default function RequestForm() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
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
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      
      <Segment>
        Mostrar informacion
        <Dimmer active>
        <Loader size='mini'>Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  )
}
