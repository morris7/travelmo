import http from '../../src/client/shared/services/http';
import LocationLayout from '../../templates/Location';
import Carousel from '../../src/client/components/Carousel';

import './Location.scss';

const ROOT_CLASSNAME = 'Main';

const Location = ({ post }) => {
  console.log('post', post);
  return (
    <LocationLayout>
      <article className={`${ROOT_CLASSNAME}__content`}>
        <Carousel className="Location">
          {
            post.acf.gallery.map((item) => (
              <img src={item.sizes.large} />
            ))
          }
        </Carousel>
        <h1 className="flex-1 text-center my-8 text-3xl">{post.title.rendered}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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