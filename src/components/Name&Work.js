import React from "react";
import Name from "./Name.js";
import Work from "./Work.js";

function NameAndWork(prop) {
  return (
    <div className="NameAndWork">
      <Name name={prop.name} />
      <Work work={prop.work} />
    </div>
  );
}

export default NameAndWork;
