import "./Translate.css";
import * as React from "react";
import TranslatePhrases from "./TranslatePhrases";
import Translation from "./Translation";

function Translate({props}) {
  // console.log(props)
  return (
    <div className="translate-container">
      <div className="translate-phrases">
          <TranslatePhrases props={props}/>
      </div>
      <div className="translate-input">
        <Translation props={props}/>
      </div>
    </div>
  );
}

export default Translate;
