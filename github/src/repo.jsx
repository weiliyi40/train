
var ListGroup = ReactBootstrap.ListGroup
var Spinner = ReactBootstrap.Spinner
var Alert = ReactBootstrap.Alert

class PopularRepoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { repos: [], loading: false, errorText: null }
    }
    async componentDidMount() {
        try {
            this.setState({ loading: true,errorText:null })
            const res = await axios.get('https://api.github.com/search/repositories?q=stars>1&sort=stars&order=desc&type=Repositories')
            this.setState({ repos: res.data.items, loading: false })
        } catch (e) {
            const { data } = e.response
            this.setState({loading: false, errorText: data && data.message })
        }
    }

    render() {
        const { repos, loading, errorText } = this.state

        const list = repos.map((item) => <ListGroup.Item key={item.id}>{item.full_name}</ListGroup.Item>)
        return (<div>
            {loading && <Spinner animation="border" variant="success" />}
            {errorText && <Alert variant='danger'>{errorText}</Alert>}
            {repos.length > 0 && <ListGroup>
                {list}
            </ListGroup>}
        </div>)
    }
}

const App = (props) => (<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div className="container">
        <h2>热门项目列表：</h2>
        <PopularRepoList />
    </div>

</div>)


ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);