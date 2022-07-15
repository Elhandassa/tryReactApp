import React from "react";
import Img from "./Img.js";
import Contacts from "./Contacts.js";
import NameAndWork from "./Name&Work.js";
function CardItems(prop) {
  return (
    <div className="Card">
      <Img image={prop.image} />
      <NameAndWork name={prop.name} work={prop.work} />
      <Contacts num={prop.num} email={prop.email} website={prop.website} />
    </div>
  );
}

export default CardItems;
