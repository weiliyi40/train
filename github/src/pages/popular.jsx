import '@babel/polyfill';
import React from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import Header from "../components/Top.jsx";
import Footer from "../components/Footer.jsx";
import Content from "../components/Content.jsx";
import RepoCard from "../components/Card.jsx";

const { Spinner } = ReactBootstrap;
const { Alert } = ReactBootstrap;
const { Row } = ReactBootstrap;
const { Col } = ReactBootstrap;
const { Button } = ReactBootstrap;

class App extends React.Component {
    constructor(props) {
      super(props);
      const cards = [
  
      ];
      this.state = {
        cards, loading: false, error: null, type: 'all', page: 1,
      };
    }
  
    componentDidMount() {
      this.handleNavClick();
    }
  
      handleNavClick = async (type = 'all', page = 1) => {
        const { cards } = this.state;
        console.log('type', type);
        let url = '';
        switch (type) {
          case 'Javascript':
            url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories';
            break;
          case 'Ruby':
            url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories';
            break;
          case 'Java':
            url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories';
            break;
          case 'Css':
            url = 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories';
            break;
          default:
            url = 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories';
        }
        url = `${url}&page=${page}&per_page=10`;
        try {
          const beforeState = { type, loading: true, error: null };
          if (page === 1) {
            beforeState.cards = [];
          }
          this.setState(beforeState);
          const res = await axios.get(url);
          console.log('res', res.data);
          const newCards = res.data.items.map((item, key) => ({
            no: `#${page === 1 ? 1 + key : cards.length + 1 + key}`,
            img: item.owner.avatar_url,
            title: item.full_name,
            author: item.owner.login,
            stars: item.stargazers_count,
            forks: item.forks,
            issues: item.open_issues,
            url: item.html_url,
  
          }));
          if (page > 1) {
            this.setState((state) => (
              { cards: [...state.cards, ...newCards], loading: false, page }
            ));
          } else {
            this.setState({ cards: newCards, loading: false, page });
          }
        } catch (e) {
          this.setState({ loading: false, error: e });
        }
      }
  
      loadMore = () => {
        const { type, page } = this.state;
        this.handleNavClick(type, page + 1);
      }
  
      render() {
        const { cards, loading, error } = this.state;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="container">
              <Header onClick={this.handleNavClick} />
              <Content>
  
                <Row className="justify-content-around">
                  {cards.map((item, key) => (
                    <Col sm={6} md={4} lg={3} key={key}>
                      <RepoCard
                        no={item.no}
                        img={item.img}
                        title={item.title}
                        author={item.author}
                        stars={item.stars}
                        forks={item.forks}
                        issues={item.issues}
                        url={item.url}
                      />
                    </Col>
                  ))}
                </Row>
                <div className="text-center">
                  {error && <Alert variant="danger">{error.response.status} {error.response.statusText}</Alert>}
                </div>
                <div className="text-center">
                  <Button  onClick={this.loadMore} disabled={loading}> {loading && (
                    <Spinner 
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )} 加载更多
                  </Button>
                </div>
              </Content>
              <Footer>
                <div className="text-center text-black jumbotron bg-light">
                  版权所有 &copy; 魏黎怡
                </div>
              </Footer>
            </div>
  
          </div>
        );
      }
  }

  export default App;