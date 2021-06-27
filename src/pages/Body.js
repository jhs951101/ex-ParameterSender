import React from 'react';

let count = 0;
let bodyText = 'Hello App!';

function Body(props) {
    
    let changeBodyText = () => {
        count += 1;
        props.changeBodyText(bodyText + ' ' + count); 
    };

    return (
      <div>
          {props.appText}<br/>
          <button onClick={changeBodyText}>button</button>
      </div>
    );
  }

export default Body;