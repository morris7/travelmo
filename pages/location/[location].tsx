import http from '../../src/client/shared/services/http';
import LocationLayout from '../../templates/Location';
import Carousel from '../../src/client/components/Carousel';

import './Location.scss';

interface ILocationProps {
  post: any;
}

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const ROOT_CLASSNAME = 'LocationLayout';

const Location: StatelessPage<ILocationProps> = ({ post }) => {
  console.log('post', post);
  return (
    <LocationLayout seo={post.yoast_head}>
      <article className={`${ROOT_CLASSNAME}__container`}>
        <Carousel className={ROOT_CLASSNAME}>
          {
            post.acf.gallery.map((item) => (
              <img src={item.sizes['1536x1536']} />
            ))
          }
        </Carousel>
        <h1 className="flex-1 text-center my-8 text-3xl">{post.title.rendered}</h1>
        <section
          className={`${ROOT_CLASSNAME}__content`}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </LocationLayout>
  );
}

Location.getInitialProps = async ctx => {
  const response = await http.getPost(ctx.query.location);

  const post = response && response.data && response.data[0];
  console.log('post', post)
  return {
    post
  };
}

export default Location;