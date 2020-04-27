import React from 'react'
import '../src/client/styles/index.scss'
import Header from '../src/client/components/Header/Header'
import Tracking from '../src/client/components/Tracking';
import http from '../src/client/shared/services/http';
import { stringify } from 'querystring';

interface IHomeProps { }
interface IHomeState {
  content: string;
}

class Home extends React.PureComponent<IHomeProps, IHomeState> {
  state: IHomeState = {
    content: ''
  };

  async componentDidMount() {
    const posts = await http.getPosts();
    const content = posts && posts.data && posts.data[0] && posts.data[0].content && posts.data[0].content.rendered;

    this.setState({
      content
    });
  }

  render() {

    return (
      <Tracking>
        <main className="main-container">
          <Header />
          <section>
            <h1 className="flex-1 text-center my-8 text-2xl">TravelMo!</h1>
            <article className="px-16">
              <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </article>
          </section>
        </main>
      </Tracking>
    )
  }
}

export default Home
