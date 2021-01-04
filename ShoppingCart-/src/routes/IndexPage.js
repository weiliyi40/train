import React from 'react';
import { connect } from 'dva';
import { Layout, Drawer, Button, Badge, Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from "./IndexPage.css"
import Goods from '../components/Goods'
import Cart from '../components/Cart';
import Screen from '../components/Screen'

@connect(({ cart }) => ({
  count: cart.count
}))
class IndexPage extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const { Content, Sider } = Layout;
    const { count } = this.props
    return (
      <div >
        <Row >
          <Layout style={{ background: 'white' }}>
            <Col xs={3} xl={4}>
              <Sider theme="light" className={styles.sider} >
                <div className="logo" />
                <Screen />
              </Sider>
            </Col>
            <Col xs={21} xl={20}>
              <Layout style={{ background: 'white' }}>
                <Content className={styles.content}>
                  <div className={styles.productlist} style={{ padding: 24, minHeight: 580, display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', width: '100%' }}>
                    <Goods />
                  </div>
                </Content>
               
              </Layout>
            </Col>
            <div style={{ zIndex: 2, top: 0, right: 0, position:"fixed" }} >
              <Badge count={count} showZero offset={[-9, 38]} size="small" style={{ backgroundColor: 'rgb(231 145 16)' }}>
                <Button icon={<ShoppingCartOutlined />} style={{ fontSize: "15px", backgroundColor: 'black', border: 'none', width:'50px', height:'50px' }} type="primary" size="large" shape="" onClick={this.showDrawer} >

                </Button>
              </Badge>
            </div>
            <Drawer
              title='ShoppingCart'
              width="500"
              placement="right"
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Cart />
            </Drawer>
          </Layout>
        </Row>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
