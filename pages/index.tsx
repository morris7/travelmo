import React from 'react'
import '../src/client/styles/index.scss'
import Header from '../src/client/components/Header/Header'
import Tracking from '../src/client/components/Tracking';
import http from '../src/client/shared/services/http';
import Post from '../src/client/components/Post';

import './index.scss';
import Footer from '../src/client/components/Footer';

interface IPostProps {
  title: string;
}
interface IHomeProps {
  content: string;
  posts: IPostProps[];
  homePageContent: string;
}

const ROOT_CLASSNAME = 'Main';

const Home = ({ posts, homePageContent }) => {
  console.log('posts', posts)
  return (
    <Tracking>
      <main className={`${ROOT_CLASSNAME}__container main-container`}>
        <Header />
        <article className={`${ROOT_CLASSNAME}__content`}>
          <h1 className="flex-1 text-center my-8 text-3xl">TravelMo!</h1>
          <section className={`${ROOT_CLASSNAME}__text`} dangerouslySetInnerHTML={{ __html: homePageContent }} />
          {
            posts.map((post, index) => (
              <Post
                key={index}
                className={`${ROOT_CLASSNAME}__Post`}
                src={post.acf.quickImage.sizes.large}
                title={post.title.rendered}
                summary={post.excerpt.rendered}
                slug={post.slug}
              />
            ))
          }
        </article>
        <Footer />
      </main>
    </Tracking>
  )
}

Home.getInitialProps = async ctx => {
  const homePage = await http.getHomePage();
  const allPosts = await http.getPosts();

  const homePageContent = homePage && homePage.data && homePage.data && homePage.data.content && homePage.data.content.rendered;
  const posts = allPosts && allPosts.data;

  return {
    homePageContent,
    posts
  };
}

export default Home
