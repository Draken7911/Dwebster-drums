import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Displaybar';
import DrumPad from './presspad';
import './index.css';

const pads = [
  {
    letter: "E",
    sound: "midtom2"
  },{
    letter: "A",
    sound: "hihat"
  },{
    letter: "D",
    sound: "kick"
  },{
    letter: "C",
    sound: "crash"
  },{
    letter: "F",
    sound: "floortom"
  },{
    letter: "R",
    sound: "ride"
  },{
    letter: "S",
    sound: "snare"
  },{
    letter: "W",
    sound: "tom"
  },{
    letter: "B",
    sound: "bell"
  }
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.drumClick = this.drumClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.state = {
      display: "Drum Machine"
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  playSound(element) {
    element.currentTime = 0;
    element.play();
    element.parentElement.classList.add('playing');
    document.getElementById('display').classList.add('playing2');
    setTimeout(function() {
      element.parentElement.classList.remove('playing');
      document.getElementById('display').classList.remove('playing2');
    }, 100);
    this.setState({
      display: element.parentElement.id
    });
  }

  onKeyDown(e) {
    if(e.key === "f" || e.key === "w" || e.key === "e" || e.key === "a" || e.key === "s" || e.key === "d" || e.key === "r" || e.key === "b" || e.key === "c") {
      this.playSound(document.getElementById(e.key.toUpperCase()));
    }
  }

  drumClick(letter) {
    this.playSound(document.getElementById(letter));
  }

  render() {
    return (
      <div id="drum-machine">
        <Display display={this.state.display} />
        <div id="drum-pad-wrap">
          {pads.map((pad, index) =>
            <DrumPad pad={pad} drumClick={this.drumClick} key={index} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));
