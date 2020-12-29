
import { Row, Col, Select, Card, Checkbox, Button, Drawer,Radio } from 'antd';
import React, { useState } from 'react';
import './App.css';
import Bag from './assets/imgs/bag.png';

const { Option } = Select;

const data = {
  "products": [
    {
      "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 13,
      "sku": 51498472915966366,
      "title": "Dark Thug Blue-Navy T-Shirt",
      "description": "",
      "availableSizes": ["M"],
      "style": "Front print and paisley print",
      "price": 29.45,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 14,
      "sku": 10686354557628303,
      "title": "Sphynx Tie Dye Wine T-Shirt",
      "description": "GPX Poly 1",
      "availableSizes": ["X", "L", "XL"],
      "style": "Front tie dye print",
      "price": 9.0,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 15,
      "sku": 11033926921508487,
      "title": "Skuul",
      "description": "Treino 2014",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Black T-Shirt with front print",
      "price": 14.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 11,
      "sku": 39876704341265606,
      "title": "Wine Skul T-Shirt",
      "description": "",
      "availableSizes": ["X", "L"],
      "style": "Wine",
      "price": 13.25,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 0,
      "sku": 8552515751438644,
      "title": "Cat Tee Black T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Branco com listras pretas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 1,
      "sku": 18644119330491312,
      "title": "Sphynx Tie Dye Grey T-Shirt",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Preta com listras brancas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 2,
      "sku": 11854078013954528,
      "title": "Danger Knife Grey",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Branco com listras pretas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 3,
      "sku": 876661122392077,
      "title": "White DGK Script Tee",
      "description": "2014 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Preto com listras brancas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 4,
      "sku": 9197907543445677,
      "title": "Born On The Streets",
      "description": "14/15 s/nº - Jogador",
      "availableSizes": ["XL"],
      "style": "Branco com listras pretas",
      "price": 25.9,
      "installments": 12,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 5,
      "sku": 10547961582846888,
      "title": "Tso 3D Short Sleeve T-Shirt A",
      "description": "14/15 + Camiseta 1º Mundial",
      "availableSizes": ["X", "L", "XL"],
      "style": "Preto",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 6,
      "sku": 6090484789343891,
      "title": "Man Tie Dye Cinza Grey T-Shirt",
      "description": "Goleiro 13/14",
      "availableSizes": ["XL", "XXL"],
      "style": "Branco",
      "price": 49.9,
      "installments": 0,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 7,
      "sku": 18532669286405342,
      "title": "Crazy Monkey Black T-Shirt",
      "description": "1977 Infantil",
      "availableSizes": ["S"],
      "style": "Preto com listras brancas",
      "price": 22.5,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 8,
      "sku": 5619496040738316,
      "title": "Tso 3D Black T-Shirt",
      "description": "",
      "availableSizes": ["XL"],
      "style": "Azul escuro",
      "price": 18.7,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 9,
      "sku": 11600983276356165,
      "title": "Crazy Monkey Grey",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 134.9,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 10,
      "sku": 27250082398145995,
      "title": "On The Streets Black T-Shirt",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 49.0,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    }
  ]
}

function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // const { productData } = this.props
  console.log(data);
  const cart = data.products.map(item => {
    console.log(item);
    return (
      <Col span={6}>
        <Card hoverable={true}
          cover={<img alt="example" src={`./img/${item.sku}_1.jpg`} />}
          style={{ position: 'relative' }}
        >
          {item.isFreeShipping && <div className='free'>Free shipping</div>}
          <div className='info'>
            <h6>{item.title}</h6>
            <h5>{item.currencyFormat}{item.price}</h5>
            <p>{`or ${item.installments} × ${item.currencyFormat} ${(item.price / item.installments).toFixed(2)}`}</p>
          </div>
          <div className='cart'>
          <Button className='add' type="primary" block>
            Add to cart
        </Button>
        <div className='size'>
        <Radio.Group size='large'>
          {item.availableSizes.map(items=>{
            return <Radio.Button value={items}>{items}</Radio.Button>
          })}
        </Radio.Group>
        </div>
        </div>
        </Card>
      </Col>
    )
  })
  return (
    <div>
      <Row className="show-grid">
        <Col xs={6} >
          <Row className="show-grid">
            <Col xs={12} >

            </Col>
            <Col xs={12} >
              <div style={{ marginTop: '40px' }}>
                <h6>Sizes:</h6>
                
                <Checkbox.Group style={{ width: '100%' }}>
    <Row>
      <Col span={8}>
        <Checkbox value="XS">XS</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="S">S</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="M">M</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="ML">ML</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="L">L</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="XL">XL</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="XXL">XXL</Checkbox>
      </Col>
      
    </Row>
  </Checkbox.Group>

              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={18} >
          <Row className="show-grid">
            <Col xs={20} >
              <div style={{ height: '40px', marginTop: '40px' }}>
                <div style={{ float: 'left' }}>16 Product(s) found.</div>
                <div style={{ float: 'right', fontSize: '17px' }}>Order by
                <Select defaultValue="select" style={{ width: 150 }}>
                    <Option value="select">Select</Option>
                    <Option value="Lowest to highest">Lowest to highest</Option>
                    <Option value="Highest to lowest">Highest to lowest</Option>

                  </Select>
                </div>
              </div>
              <div className="site-card-wrapper">
                <Row  >
                  {cart}
                  </Row>
              </div>

            </Col>
            <Col xs={4} >
              <div className='drawer' onClick={showDrawer}> <img src={Bag} alt=''width='58px' height='35px'/> </div>
              <Drawer
                
                title="购物车"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={450} 
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default App;



