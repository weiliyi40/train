import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col } from 'antd';
// import { ProjectOutlined, SkinOutlined } from '@ant-design/icons';
import styles from '../routes/IndexPage.css'

@connect(({ shopData }) => ({
  backupData: shopData.backupData,
  productData: shopData.productData,
}))
class Screen extends React.Component {
  onScreen = (key) => {
    const { backupData, dispatch } = this.props
    dispatch({
      type: 'shopData/screenData',
      payload: {
        data: backupData,
        key,
        i: 1
      }
    })
  }

  onCollate = async (key) => {
    const { productData, dispatch } = this.props
    await dispatch({
      type: 'shopData/screenData',
      payload: {
        data: productData,
        key,
        i: 0
      }
    })
  }


  render() {
    
    const style = { background: '', padding: '5px 1px' };
    return (
      <>
        <h2>Sizes:</h2>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:6" onClick={() => this.onScreen("")}>
                ALL
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:3" onClick={() => this.onScreen("XS")}>
                XS
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:1" onClick={() => this.onScreen("S")}>
                S
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:2" onClick={() => this.onScreen("M")}>
                M
              </Button></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:3" onClick={() => this.onScreen("ML")}>
                        ML
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:3" onClick={() => this.onScreen("L")}>
                L
              </Button>
            </div>
          </Col>
          
          
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:4" onClick={() => this.onScreen("XL")}>
                XL
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button className={styles.button} shape="circle" size="middle" key="setting:5" onClick={() => this.onScreen("XXL")}>
                XXL
              </Button>
            </div>
          </Col>
        </Row>

        <br />

      </>
    )
  }
}

export default connect()(Screen);