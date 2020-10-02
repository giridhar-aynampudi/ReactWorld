import React from "react";
import { DateTimePicker } from "react-rainbow-components";
const containerStyles = {
  maxWidth: 200,
};
class RainbowDatePicker extends React.Component {
  state = {
    startTime: new Date(),
    endTime: new Date(),
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
      >
        <DateTimePicker
          required
          value={this.state.startTime}
          label="Event Start Time"
          onChange={(value) => this.setState({ startTime: value })}
        />
        <DateTimePicker
          required
          value={this.state.endTime}
          label="Event End time"
          onChange={(value) => this.setState({ endTime: value })}
        />
      </div>
    );
  }
}

export default RainbowDatePicker;
