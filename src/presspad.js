import React from 'react';

const DrumPad = props => {
  return (
    <span className="drum-pad" id={props.pad.sound} onClick={() => {props.drumClick(props.pad.letter)}}>
      {props.pad.letter}
      <audio className='clip' id={props.pad.letter} src={"./sounds/" + props.pad.sound + ".wav"}></audio>
    </span>
  );
}

export default DrumPad
