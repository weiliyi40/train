import React from 'react';
import {Button} from 'react-bootstrap';
import Content from "../components/Content.jsx";
import RepoCard from "../components/Card.jsx";
import axios from 'axios';

export default class battleResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            win:{},loser:{}
        };
    }
    async componentDidMount() {
        const inputIndex = this.props.history.location.search.slice(11).indexOf("&playerTwo=");
        var input1 = this.props.history.location.search.slice(11).substring(0,inputIndex);
        var input2 = this.props.history.location.search.slice(11).substring(inputIndex+11, this.props.history.location.search.slice(11).length);
        const res1 = await axios.get(`https://api.github.com/users/${input1}`);
        const res2 = await axios.get(`https://api.github.com/users/${input2}`);
        console.log(res1,res2);
        const win = {}
        const loser = {}
        if (res1.data.id>=res2.data.id) {
            win.no='win'
            win.img=res1.data.avatar_url
            win.title=res1.data.login
            win.stars=res1.data.id
            loser.no='loser'
            loser.img=res2.data.avatar_url
            loser.title=res2.data.login
            loser.stars=res2.data.id
        }else{
            win.no='win'
            win.img=res2.data.avatar_url
            win.title=res2.data.login
            win.stars=res2.data.id
            loser.no='loser'
            loser.img=res1.data.avatar_url
            loser.title=res1.data.login
            loser.stars=res1.data.id
        }
        this.setState({win:win,loser:loser})
      }

    render() {
        const { win , loser } = this.state

        return (
            <Content>
                <div style={{display: 'flex' , justifyContent: 'space-around' }} >
                    <RepoCard
                        no={win.no}
                        img={win.img}
                        title={win.title}
                        author={win.author}
                        stars={win.stars}
                        forks={win.forks}
                        issues={win.issues}
                        url={win.url}
                    />
                    <RepoCard
                        no={loser.no}
                        img={loser.img}
                        title={loser.title}
                        author={loser.author}
                        stars={loser.stars}
                        forks={loser.forks}
                        issues={loser.issues}
                        url={loser.url}
                    />
                </div>

                <div style={{display: 'flex', justifyContent: 'center',marginTop:'50px'}}>
                    <Button style={{width:'120px', height:'40px' }}>Battle</Button></div>

            </Content>
        );
    }
}
