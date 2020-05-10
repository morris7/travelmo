import React from 'react';
import classNames from 'classnames';
import './Carousel.scss';
import { replaceUrl } from '../../shared/utils/url';

interface ICarouselProps {
  className?: string;
  children: JSX.Element[];
}

interface ICarouseState {
  activeIndex: number;
  srcs: string[];
}

class Carousel extends React.PureComponent<ICarouselProps, ICarouseState> {
  state: ICarouseState = {
    activeIndex: 0,
    srcs: []
  }

  MAX_LENGTH = this.props.children.length;

  componentDidMount() {
    this.setState({
      srcs: this.getSrcs()
    })
  }

  getSrcs = (): string[] => {
    return this.props.children.map((child) => (
      child.props.src
    ))
  }

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
    const { className } = this.props;
    const rootClass = classNames('Carousel', { [`${className}__Carousel`]: !!className });
    const { activeIndex, srcs } = this.state;

    return (
      <aside className={rootClass}>
        <div className="Carousel__container">
          <a href="#" className="Carousel__link--left-arrow" onClick={this.clickLeft}>
            <svg id="i-chevron-left" className="bs-icon" viewBox="0 0 32 32"><path d="M20 30 L8 16 20 2"></path> </svg>
          </a>
          <img src={replaceUrl(srcs[activeIndex])} key={activeIndex} />
          {srcs[activeIndex + 1] &&
            <img src={replaceUrl(srcs[activeIndex + 1])} className="Carousel__image--hidden" key={activeIndex + 1} />
          }
          <a href="#" className="Carousel__link--right-arrow" onClick={this.clickRight}>
            <svg id="i-chevron-right" className="bs-icon" viewBox="0 0 32 32"><path d="M12 30 L24 16 12 2"></path> </svg>
          </a>
        </div>
      </aside>
    )
  }
};

export default Carousel;