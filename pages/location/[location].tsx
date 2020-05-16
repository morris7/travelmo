import http from '../../src/client/shared/services/http';
import LocationLayout from '../../templates/Location';
import Carousel, { ECarouelAnimation } from '../../src/client/components/Carousel';
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

const weatherSvg = '<svg id="partly-sunny-outline" class="bs-icon" viewBox="0 0 512 512"><path d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path><path d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path></svg>';

const ROOT_CLASSNAME = 'Location';

const Location: StatelessPage<ILocationProps> = ({ locationPost }) => {
  const seo = locationPost && locationPost.yoast_head || undefined;
  const content = locationPost && locationPost.content;
  const title = locationPost && locationPost.title;
  const overview = locationPost.acf.place[0].weather[0].overview;
  const googlemap = locationPost.acf.place[0].map[0].googlemap;
  // console.log('post', locationPost);

  return (
    <LocationLayout seo={seo}>
      <article className={`${ROOT_CLASSNAME} ${ROOT_CLASSNAME}__container`}>
        <Carousel className={ROOT_CLASSNAME} animate={ECarouelAnimation.ZoomIn}>
          {
            locationPost && locationPost.acf.gallery.map((item, index) => (
              <img src={item.sizes['1536x1536']} key={index} />
            ))
          }
        </Carousel>
        <h1 className="flex-1 text-center my-8 text-3xl">{title.rendered}</h1>
        <section
          className={`${ROOT_CLASSNAME}__content`}
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />

        <div className={`${ROOT_CLASSNAME}__section-container`}>
          {overview &&
            <section
              className={`${ROOT_CLASSNAME}__category-weather`}
              dangerouslySetInnerHTML={{ __html: weatherSvg + '<h2>Weather</h2>' + overview }}
            />
          }

          {googlemap &&
            <section className={`${ROOT_CLASSNAME}__category-map`}>
              <iframe
                src={googlemap}
                width="600"
                height="450"
                className={`${ROOT_CLASSNAME}__category-map-iframe`}
              />
            </section>
          }
        </div>

      </article>
    </LocationLayout >
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