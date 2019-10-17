import * as React from "react";
//src: https://codepen.io/dwayne/pen/qakVOG

class Rating extends React.Component{
    constructor(props) {
        super(props);
        this.stars = this.props.stars;
        this.state = {
            value: this.stars,
            dynamicValue: this.stars
        };
    }

  handleClick(newValue) {
    this.setState({
      value: newValue,
      dynamicValue: newValue
    });
      this.props.onRatingChange(this.state.dynamicValue);
    };

  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  };

  handleMouseLeave(newValue) {
    this.setState({ dynamicValue: this.state.value });
  };

  render() {
    const starSpans = [];

    for (let v = 1; v <= 5; v++) {
      if (v <= this.state.dynamicValue) {
        starSpans.push(
          <span
              key={v}
              className="star"
              onMouseEnter={this.handleMouseEnter.bind(this, v)}
              onMouseLeave={this.handleMouseLeave.bind(this, v)}
              onClick={this.handleClick.bind(this, v)}
              >
            ★
          </span>
        );
      } else {
        starSpans.push(
          <span
              key={v}
              className="star"
              onMouseEnter={this.handleMouseEnter.bind(this, v)}
              onMouseLeave={this.handleMouseLeave.bind(this, v)}
              onClick={this.handleClick.bind(this, v)}
              >
            ☆
          </span>
        );
      }
    }

    return <div>{starSpans}</div>;
  };
}

export default Rating;