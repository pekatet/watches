import '../App.css'
import React from 'react'

class Watch extends React.Component{
  constructor (props) {
    super(props);
    let time = this.dateToTimezone(props.UTCOffset);
    this.state = {
      name: props.name,
      time: this.dateToTimezone(props.UTCOffset),
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      offset: props.UTCOffset
    }
  }

  componentDidMount () {
    let interval = () => setInterval(
      () => this.updateTime(),
      1000
    )
    this.timerID = interval()
    let handle = setTimeout(interval, 1000 - this.state.time.getMilliseconds());
    clearTimeout(handle);
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  dateToTimezone (timezoneOffset) {
    let time = new Date();
    time.setMinutes(time.getMinutes() + time.getTimezoneOffset() + timezoneOffset*60);
    return time;
  }

  updateTime(){
    this.setState(state => ({
      time: this.dateToTimezone(state.offset)
    }));
  }

  render () {
    return (
      <div className="watch">
        <span>{this.state.name}</span>
        <br/>
        <span>{this.state.time.toLocaleTimeString()}</span>
        <br/>
        <button className="del-button" onClick={()=>this.props.onRemove(this.state.name)}>x</button>
      </div>
    );
  }
}

export default Watch;