import "@babel/polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'
import lazyload from 'lazysizes'
var ListGroup = ReactBootstrap.ListGroup
var Spinner = ReactBootstrap.Spinner
var Alert = ReactBootstrap.Alert
var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
var Card = ReactBootstrap.Card
var Row = ReactBootstrap.Row
var Col = ReactBootstrap.Col
var Button = ReactBootstrap.Button
var ListGroupItem = ReactBootstrap.ListGroupItem
const Header = (props) => {
    const menuItems = [
        'All',
        'Javascript',
        'Ruby',
        'Java',
        'Css',
        'Python'
    ]

    return (<div>
        <Container>
            <Nav className="justify-content-center" style={{border:'soild black'}} variant="tabs" defaultActiveKey="All" onSelect={(selectedKey) => props.onClick(selectedKey)} >
                {menuItems.map((item, key) => <Nav.Item key={key}><Nav.Link eventKey={item} >{item}</Nav.Link></Nav.Item>)}
            </Nav>
        </Container>
    </div>)
}

const Content = (props) => (<div>
    <Container>
        {props.children}
    </Container>
</div>)

const Footer = (props) => (<div>
    <Container>
        {props.children}
    </Container>
</div>)

const RepoCard = (props) => (<Card border="primary" style={{ marginTop: '8px', marginBottom: '8px' }}>
    <Card.Header className="text-center bg-white font-weight-bold">{props.no}</Card.Header>
    <Card.Body>
    <Card.Img src="./images/image.png" data-src={props.img} className="lazyload" />
        <Card.Title className="text-center"><Card.Link href={props.url} className="text-danger" target="_blank">{props.title}</Card.Link></Card.Title>
        <ListGroup className="list-group-flush">
            <ListGroupItem className="bg-light">
                <Card.Text><i className="fa fa-user fa-lg fa-fw" style={{ color: 'orange' }}></i>{props.author}</Card.Text>
            </ListGroupItem>
            <ListGroupItem className="bg-light">
                <Card.Text><i className="fa fa-star fa-lg fa-fw" style={{ color: 'yellow' }}></i>{props.stars}</Card.Text>
            </ListGroupItem>
            <ListGroupItem className="bg-light">
                <Card.Text><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'lightblue' }}></i>{props.forks}</Card.Text>
            </ListGroupItem>
            <ListGroupItem className="bg-light">
                <Card.Text><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'purple' }}></i>{props.issues}</Card.Text>
            </ListGroupItem>
        </ListGroup>

    </Card.Body>
</Card>)

class App extends React.Component {
    constructor(props) {
        super(props)
        const cards = [

        ]
        this.state = { cards, loading: false, error: null, type: 'all', page: 1 }
    }
    handleNavClick = async (type = 'all', page = 1) => {
        const {cards} = this.state
        console.log('type', type)
        var url = ''
        switch (type) {
            case 'Javascript':
                url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories'
                break;
            case 'Ruby':
                url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories'
                break;
            case 'Java':
                url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories'
                break;
            case 'Css':
                url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
                break;
            default:
                url = 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'
        }
        url = `${url}&page=${page}&per_page=10`
        try {
            var beforeState = { type, loading: true, error: null }
            if (page === 1) {
                beforeState.cards = []
            }
            this.setState(beforeState)
            const res = await axios.get(url)
            console.log('res', res.data)
            const newCards = res.data.items.map((item, key) => ({
                no: '#' + (page === 1 ? 1 + key : cards.length + 1 + key),
                img: item.owner.avatar_url,
                title: item.full_name,
                author: item.owner.login,
                stars: item.stargazers_count,
                forks: item.forks,
                issues: item.open_issues,
                url: item.html_url

            }))
            if (page > 1) {
                this.setState((state, props) => {
                    return { cards: [...state.cards, ...newCards], loading: false, page }
                })
            } else {
                this.setState({ cards: newCards, loading: false, page })
            }
        } catch (e) {
            this.setState({ loading: false, error: e })
        }
    }
    loadMore = () => {
        const { type, page } = this.state
        this.handleNavClick(type, page + 1)
    }
    componentDidMount() {
        this.handleNavClick()
    }
    render() {
        const { cards, loading, error } = this.state
        return (<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="container">
                <Header onClick={this.handleNavClick}>
                </Header>
                <Content>

                    <Row className="justify-content-around">
                        {cards.map((item, key) => <Col sm={6} md={4} lg={3} key={key}>
                            <RepoCard no={item.no}
                                img={item.img}
                                title={item.title}
                                author={item.author}
                                stars={item.stars}
                                forks={item.forks}
                                issues={item.issues}
                                url={item.url}
                            />
                        </Col>)}
                    </Row>
                    <div className="text-center">
                        {error && <Alert variant="danger" >{error.response.status} {error.response.statusText}</Alert>}
                    </div>
                    <div className="text-center">
                        <Button onClick={this.loadMore} disabled={loading}> {loading && <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />} 加载更多</Button>
                    </div>
                </Content>
                <Footer>
                    <div className="text-center text-black jumbotron bg-light">
                        版权所有 &copy; 魏黎怡
            </div>
                </Footer>
            </div>

        </div>)
    }
}


ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);