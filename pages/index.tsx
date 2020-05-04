import React from 'react'
import '../src/client/styles/index.scss'
import Header from '../src/client/components/Header/Header'
import Tracking from '../src/client/components/Tracking';
import http from '../src/client/shared/services/http';
import Post from '../src/client/components/Post';

import './index.scss';
import Footer from '../src/client/components/Footer';

interface IHomeProps {
  content: string;
}
const ROOT_CLASSNAME = 'Main';

const Home = (props) => {
  return (
    <Tracking>
      <main className={`${ROOT_CLASSNAME}__container main-container`}>
        <Header />
        <article className={`${ROOT_CLASSNAME}__content`}>
          <h1 className="flex-1 text-center my-8 text-3xl">TravelMo!</h1>
          <section className={`${ROOT_CLASSNAME}__text`} dangerouslySetInnerHTML={{ __html: props.content }} />
          <Post className={`${ROOT_CLASSNAME}__Post`} src="http://travelmo.co:8080/wp-content/uploads/2020/05/photOfMe-1-1024x576.jpg" />
          <Post className={`${ROOT_CLASSNAME}__Post`} src="/test2.jpg" />
          <Post className={`${ROOT_CLASSNAME}__Post`} src="/test.jpg" />
        </article>
        <Footer />
      </main>
    </Tracking>
  )
}

Home.getInitialProps = async ctx => {
  const posts = await http.getPosts();
  const content = posts && posts.data && posts.data[0] && posts.data[0].content && posts.data[0].content.rendered;

  return {
    content
  };
}

export default Home
