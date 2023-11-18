import React, {useState, FC} from 'react';

let watchAnimationData2 = require('../JsonsPlayer/jsons/loading.json');

const Loader: FC<{ loading: boolean }> = ({loading, children}) => {
  const [animationData] = useState(watchAnimationData2);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {loading ?
        <div className="spinner">
          <div className="overlay">
            <div className="overlay__content">
              loading...
            </div>
          </div>
        </div> : children}
    </div>

  );
};

export default Loader;
