import React from 'react';
import 'aframe';
import 'aframe-ar';

const ARView = () => {
  return (
    <div className='arbox'>
      <a-scene embedded arjs='sourceType: webcam;'>
      <a-marker preset='hiro'>
        <a-entity gltf-model='./Assets/mychair.glb'></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARView;
