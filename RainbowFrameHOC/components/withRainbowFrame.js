import React from 'react';

function withRainbowFrame(Comp) {

    return props => 
      <div style ={{border:"solid 10px", padding:"10px", width: "fit-content"}}>
          <Comp {...props} />
      </div>
    
    
};

export {withRainbowFrame};