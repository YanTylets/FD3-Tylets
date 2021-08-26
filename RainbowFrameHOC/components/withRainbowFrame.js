import React from 'react';


let withRainbowFrame = colors => Comp =>  props => {
let frame = <Comp {...props} />;
colors.forEach((item) =>
  frame = <div style={{border:"solid 10px "+ item, padding:"10px", width: "fit-content"}}>
       {frame}
   </div>)
   return frame;
}

export {withRainbowFrame};