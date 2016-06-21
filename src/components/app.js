import React from 'react';
import FlipCard from './FlipCard';

export default class App extends React.Component{
  state = {};

  handleChange(field, value){
    this.setState({
      ...this.state,
      [field]: !this.state[field]
    });
  }


  render(){
    return (
      <div>
        <FlipCard
          suit={'diamond'}
          rank={'Q'}
          flipped={this.state.myCard}
          onClick={this.handleChange.bind(this, 'myCard')}
        />
      </div>

    );
  }

}
