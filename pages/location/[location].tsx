import http from '../../src/client/shared/services/http';
import LocationLayout from '../../templates/Location';
import Carousel from '../../src/client/components/Carousel';
import { IAcf, IWordPressRenderable } from '../../src/client/shared/types/wordpress';

import './Location.scss';

interface ILocationProps {
  locationPost: ILocationPost;
}

interface ILocationPost {
  acf: IAcf;
  yoast_head: string;
  content: IWordPressRenderable;
  title: IWordPressRenderable;
}

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}

const ROOT_CLASSNAME = 'LocationLayout';

const Location: StatelessPage<ILocationProps> = ({ locationPost }) => {
  const seo = locationPost && locationPost.yoast_head || undefined;
  const content = locationPost && locationPost.content;
  const title = locationPost && locationPost.title;

  return (
    <LocationLayout seo={seo}>
      <article className={`${ROOT_CLASSNAME}__container`}>
        <Carousel className={ROOT_CLASSNAME}>
          {
            locationPost && locationPost.acf.gallery.map((item) => (
              <img src={item.sizes['1536x1536']} />
            ))
          }
        </Carousel>
        <h1 className="flex-1 text-center my-8 text-3xl">{title.rendered}</h1>
        <section
          className={`${ROOT_CLASSNAME}__content`}
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
      </article>
    </LocationLayout>
  );
}

Location.getInitialProps = async ctx => {
  const response = await http.getPost(ctx.query.location);
  const post = response && response.data && response.data[0];

  return {
    locationPost: post
  };
}

export default Location;