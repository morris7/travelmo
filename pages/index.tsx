import React from 'react'
import '../src/client/styles/index.scss'
import http from '../src/client/shared/services/http';
import Post from '../src/client/components/Post';

import './index.scss';
import MainLayout from '../templates/Main';

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
  return (
    <MainLayout seo={homePageContent.yoast_head}>
      <article className={`${ROOT_CLASSNAME}__content`}>
        <h1 className="flex-1 text-center my-8 text-3xl">TravelMo!</h1>
        <section className={`${ROOT_CLASSNAME}__text`} dangerouslySetInnerHTML={{ __html: homePageContent.content.rendered }} />
        {
          posts && posts.map((post, index) => (
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
    </MainLayout>
  )
}

Home.getInitialProps = async ctx => {
  const homePage = await http.getHomePage();
  const allPosts = await http.getPosts();

  const homePageContent = homePage && homePage.data && homePage.data[0];
  const posts = allPosts && allPosts.data;

  return {
    homePageContent,
    posts
  };
}

export default Home
