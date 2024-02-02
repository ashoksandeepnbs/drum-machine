import React from 'react';
const Drum = ({ audioClip }) => {
  const playSound = (clip) => {
    document.getElementById(clip.key).play().catch(console.error);
    document.getElementById("display").innerText = clip.id;
  };
  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.key}`}
      onClick={() => playSound(audioClip)}
    ><audio src={audioClip.url} id={audioClip.key} className="clip" />{audioClip.key}
    </button>
  );
};

export default Drum;
