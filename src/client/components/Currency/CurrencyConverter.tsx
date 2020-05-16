import React from 'react';
import classNames from 'classnames';
import http from '../../shared/services/http';
import './CurrencyConverter.scss';

interface ICurrencyConverterProps {
  className?: string;
  currencyFrom: string;
  currencyTo: string;
}

interface ICurrencyConverterState {
  rate: object;
}

const ROOT_CLASSNAME = 'CurrencyConverter';

class CurrencyConverter extends React.PureComponent<ICurrencyConverterProps, ICurrencyConverterState> {

  state = {
    rate: {}
  }

  async componentWillMount() {
    const { currencyFrom, currencyTo } = this.props;
    const response = await http.getCurrency(currencyFrom, currencyTo);
    const data = response && response.data;
    const currencyOne = data && data[`${currencyFrom}_${currencyTo}`];
    const currencyTwo = data && data[`USD_${currencyTo}`];
    // console.log('value', value)
    this.setState({ rate: [currencyOne, currencyTwo] });
  }

  render() {
    const { className, currencyFrom, currencyTo } = this.props;
    const { rate } = this.state;
    const classes = classNames(ROOT_CLASSNAME, className);

    return (
      <>
        <h2 className={`${ROOT_CLASSNAME}__title`}>Currency Conversion</h2>
        <ul className={`${ROOT_CLASSNAME}__list`}>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <h4 className={`${ROOT_CLASSNAME}__sub-heading`}>{currencyFrom} to {currencyTo}</h4>
            <p className={`${ROOT_CLASSNAME}__text`}>{rate[0]}</p>
          </li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <h4 className={`${ROOT_CLASSNAME}__sub-heading`}>USD to {currencyTo}</h4>
            <p className={`${ROOT_CLASSNAME}__text`}>{rate[1]}</p>
          </li>
        </ul>
      </>
    );
  }
}

export default CurrencyConverter;