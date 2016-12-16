import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="item" key={this.props.id}>
        <img src={"http:"+this.props.image}></img>
        <div>{this.props.name}</div>
        <span>{"$"+this.props.price}</span>
      </div>
    )
  }
}
