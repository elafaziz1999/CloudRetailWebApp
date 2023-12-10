import React from 'react';
import 'aframe';
import 'aframe-ar';

const ARComponent = () => {
  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: red">
          <a-animation
            attribute="rotation"
            dur="3000"
            to="360 360 0"
            repeat="indefinite"
            easing="linear"
          ></a-animation>
        </a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARComponent;
