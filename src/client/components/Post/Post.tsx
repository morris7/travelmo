import React from 'react';
import classNames from 'classnames';
import './Post.scss';

interface IPostProps {
  src: string;
  className?: string;
}

const ROOT_CLASSNAME = 'Post';

const Post: React.FunctionComponent<IPostProps> = ({ src, className }) => {
  const classes = classNames(className);
  return (
    <article className={`${ROOT_CLASSNAME} ${classes}`}>
      <div className={`${ROOT_CLASSNAME}__image-container`}>
        <img className={`${ROOT_CLASSNAME}__image`} src={src} />
      </div>
      <section className={`${ROOT_CLASSNAME}__section`}>
        <h2 className={`${ROOT_CLASSNAME}__title`}>Article header</h2>
        <p className={`${ROOT_CLASSNAME}__text`}>This is some text about the article in which it is placed. Making it a bit longer to see how it wraps etc</p>
      </section>
      <section className={`${ROOT_CLASSNAME}__section ${ROOT_CLASSNAME}__section--info`}>
        <span className={`${ROOT_CLASSNAME}__text--small`}>Views: 89</span>
        <span className={`${ROOT_CLASSNAME}__text--small`}>Likes: 32</span>
        <p className={`${ROOT_CLASSNAME}__like-button`}>
          <svg id="heart-outline" className="bs-icon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" stroke-linecap="round" stroke-linejoin="round" className="ionicon-fill-none ionicon-stroke-width"></path></svg>
        </p>
      </section>
    </article>
  );
}

export default Post;