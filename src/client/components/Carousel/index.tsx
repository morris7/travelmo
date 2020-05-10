import React from 'react';
import classNames from 'classnames';
import './Carousel.scss';
import { replaceUrl } from '../../shared/utils/url';

interface ICarouselProps {
  className?: string;
  children: JSX.Element[];
  animate?: ECarouelAnimation;
}

interface ICarouseState {
  activeIndex: number;
  srcs: string[];
}

export enum ECarouelAnimation {
  ZoomIn,
  ZoomOut
}

const ROOT_CLASSNAME = 'Carousel';

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
    const { className, animate } = this.props;
    const rootClass = classNames(ROOT_CLASSNAME, { [`${className}__Carousel`]: !!className });
    const animation = animate === ECarouelAnimation.ZoomIn ? '--scale-up' : '--scale-down';
    const { activeIndex, srcs } = this.state;

    return (
      <aside className={rootClass}>
        <div className={`${ROOT_CLASSNAME}__container ${ROOT_CLASSNAME}__container${animation}`}>
          <a href="#" className={`${ROOT_CLASSNAME}__link--left-arrow`} onClick={this.clickLeft}>
            <svg id="i-chevron-left" className="bs-icon" viewBox="0 0 32 32"><path d="M20 30 L8 16 20 2"></path> </svg>
          </a>
          <img className={`${ROOT_CLASSNAME}__item`} src={replaceUrl(srcs[activeIndex])} key={activeIndex} />
          {srcs[activeIndex + 1] &&
            <img
              className={`${ROOT_CLASSNAME}__item ${ROOT_CLASSNAME}__image--hidden`}
              src={replaceUrl(srcs[activeIndex + 1])}
              key={activeIndex + 1}
            />
          }
          <a href="#" className={`${ROOT_CLASSNAME}__link--right-arrow`} onClick={this.clickRight}>
            <svg id="i-chevron-right" className="bs-icon" viewBox="0 0 32 32"><path d="M12 30 L24 16 12 2"></path> </svg>
          </a>
        </div>
      </aside>
    )
  }
};

export default Carousel;