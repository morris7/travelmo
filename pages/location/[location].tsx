import http from '../../src/client/shared/services/http';
import LocationLayout from '../../templates/Location';
import Carousel, { ECarouelAnimation } from '../../src/client/components/Carousel';
import { IAcf, IWordPressRenderable } from '../../src/client/shared/types/wordpress';

import './Location.scss';
import GoogleMap from '../../src/client/components/Map';
import Weather from '../../src/client/components/Weather';
import { replaceUrlGlobalWp } from '../../src/client/shared/utils/url';
import CurrencyConverter from '../../src/client/components/Currency';
import Food from '../../src/client/components/Food';

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

const ROOT_CLASSNAME = 'Location';

const Location: StatelessPage<ILocationProps> = ({ locationPost }) => {
  const seo = locationPost && locationPost.yoast_head || undefined;
  const content = locationPost && locationPost.content;
  const title = locationPost && locationPost.title;
  const location = locationPost.acf.place[0];
  const overview = location.weather[0].overview;
  const googlemap = location.map[0].googlemap;
  const currency = location.currency;
  const foodOverview = location.food[0].overview;
  console.log('post', locationPost);

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
          dangerouslySetInnerHTML={{ __html: replaceUrlGlobalWp(content.rendered) }}
        />

        {foodOverview &&
          <Food className={`${ROOT_CLASSNAME}__Food`} overview={foodOverview} />
        }

        <div className={`${ROOT_CLASSNAME}__section-container`}>
          {overview &&
            <Weather
              className={`${ROOT_CLASSNAME}__category-weather`}
              text={overview}
            />
          }

          {googlemap &&
            <section className={`${ROOT_CLASSNAME}__category-map`}>
              <GoogleMap
                url={googlemap}
                className={`${ROOT_CLASSNAME}__category-map-iframe`}
              />
            </section>
          }
        </div>

        <CurrencyConverter
          className={`${ROOT_CLASSNAME}__currency-converter`}
          currencyFrom="GBP"
          currencyTo={currency}
        />

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