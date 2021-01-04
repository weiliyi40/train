import dva from 'dva';
import './index.css';
import shopData from './models/shopData'
import cart from './models/cart'

const app = dva();

app.model(shopData);

app.model(cart);

app.router(require('./router').default);

app.start('#root');
