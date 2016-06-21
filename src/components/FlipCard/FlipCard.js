import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export default class FlipCard extends Component{
  static propTypes = {
    flipped: PropTypes.bool,
    onChange: PropTypes.func,
    suit: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired
  };

  static defaultProps = {
    flipped: false
  };

  handleFlip = (event) => {
    if (this.props.onChange){
      this.props.onChange(!this.props.flipped);
    }
  };

  render(){
    const { flipped, suit, rank, ...others } = this.props;
    const cardClass = suit.concat(rank);
    const frontClasses = classnames(styles.front, styles[cardClass], {
      [styles.flipped]: flipped
    });
    const backClasses = classnames(styles.back, {
      [styles.flipped]: flipped
    });
    return (
      <span
        {...others}
        className={styles.card}
      >
        <span className={styles.flipper}>
          <span className={frontClasses} />
          <span className={backClasses} />
        </span>
      </span>
    );
  }

}
