import React from 'react';
import classNames from 'classnames';
import './Carousel.scss';

interface ICarouselProps {
  className?: string;
  children: JSX.Element[];
}

class Carousel extends React.PureComponent<ICarouselProps> {
  state = {
    activeIndex: 0
  }

  MAX_LENGTH = this.props.children.length;

  clickLeft = (e) => {
    e.preventDefault();

    if (this.state.activeIndex > 0) {
      return this.setState({ activeIndex: this.state.activeIndex - 1 });
    }

    return this.setState({ activeIndex: this.MAX_LENGTH - 1 });
  }

  clickRight = (e) => {
    e.preventDefault();

    if (this.state.activeIndex < this.MAX_LENGTH - 1) {
      return this.setState({ activeIndex: this.state.activeIndex + 1 });
    }

    return this.setState({ activeIndex: 0 });
  }

  render() {
    const { children, className } = this.props;
    const rootClass = classNames('Carousel', { [`${className}__Carousel`]: !!className });

    return (
      <aside className={rootClass}>
        <a href="#" className="Carousel__link--left-arrow" onClick={this.clickLeft}>
          <svg id="i-chevron-left" className="bs-icon" viewBox="0 0 32 32"><path d="M20 30 L8 16 20 2"></path> </svg>
        </a>
        <div className="Carousel__image-container">
          {children.map((child, index) => {
            const toggleHide = index !== this.state.activeIndex ? 'Carousel__image--hidden' : '';
            return <img src={child.props.src} className={toggleHide} key={index} />
          })}

        </div>
        <a href="#" className="Carousel__link--right-arrow" onClick={this.clickRight}>
          <svg id="i-chevron-right" className="bs-icon" viewBox="0 0 32 32"><path d="M12 30 L24 16 12 2"></path> </svg>
        </a>

      </aside>
    )
  }
};

export default Carousel;