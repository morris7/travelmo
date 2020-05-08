import React from 'react';
import classNames from 'classnames';
import './Post.scss';
import Link from 'next/link';

interface IPostProps {
  src: string;
  className?: string;
  title: string;
  summary: string;
  slug: string;
}

const ROOT_CLASSNAME = 'Post';

const Post: React.FunctionComponent<IPostProps> = ({ src, className, title, summary, slug }) => {
  const classes = classNames(className);
  return (
    <article className={`${ROOT_CLASSNAME} ${classes}`}>
      <div className={`${ROOT_CLASSNAME}__image-container`}>
        <Link href={`/location/${slug}`}>
          <img className={`${ROOT_CLASSNAME}__image`} src={src} />
        </Link>
      </div>
      <section className={`${ROOT_CLASSNAME}__section`}>
        <h2 className={`${ROOT_CLASSNAME}__title`}>{title}</h2>
        <div className={`${ROOT_CLASSNAME}__text`} dangerouslySetInnerHTML={{ __html: summary }} />
      </section>
      <section className={`${ROOT_CLASSNAME}__section ${ROOT_CLASSNAME}__section--info`}>
        <span className={`${ROOT_CLASSNAME}__text--small`}>Views: 89</span>
        <span className={`${ROOT_CLASSNAME}__text--small`}>Likes: 32</span>
        <p className={`${ROOT_CLASSNAME}__like-button`}>
          <svg id="i-heart" className="bs-icon" viewBox="0 0 32 32"><path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"></path> </svg>
        </p>
      </section>
    </article>
  );
}

export default Post;