import React from 'react'
import { IWordPressRenderable, IAcf } from '../src/client/shared/types/wordpress';
import http from '../src/client/shared/services/http';
import Post from '../src/client/components/Post';
import MainLayout from '../templates/Main';

import '../src/client/styles/index.scss'
import './index.scss';

interface IPost {
  acf: IAcf;
  title: IWordPressRenderable;
  excerpt: IWordPressRenderable;
  slug: string;
}

interface IContent {
  yoast_head: string;
  content: IWordPressRenderable
}

interface IHomeProps {
  posts: IPost[];
  homePageContent: IContent;
}

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const ROOT_CLASSNAME = 'Main';

const Home: StatelessPage<IHomeProps> = ({ posts, homePageContent }) => {
  const seo = homePageContent && homePageContent.yoast_head || undefined;
  const content = homePageContent && homePageContent.content && homePageContent.content.rendered;

  return (
    <MainLayout seo={seo}>
      <article className={`${ROOT_CLASSNAME}__content`}>
        <h1 className="flex-1 text-center my-8 text-3xl">TravelMo!</h1>
        <section className={`${ROOT_CLASSNAME}__text`} dangerouslySetInnerHTML={{ __html: content }} />
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
