import { React } from "react";

function Contacts(prop) {
  if (prop.website === undefined) {
    return (
      <div className="contacts white">
        <div className="number">
          <div>Number :</div>
          <div>{prop.num}</div>
        </div>
        <div className="email">
          <div>Email :</div>
          <div className="con-email">{prop.email}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contacts">
        <div className="number">
          <div>Number :</div>
          <div>{prop.num}</div>
        </div>
        <div className="email">
          <div>Email :</div>
          <div className="con-email">{prop.email}</div>
        </div>
        <div className="website">
          <div>WebSite :</div>
          <div>{prop.website}</div>
        </div>
      </div>
    );
  }
}

export default Contacts;
