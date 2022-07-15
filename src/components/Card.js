import React from "react";
import CardItems from "./CardItems.js";

function Card() {
  let inu = 0;
  const info = [
    {
      id: ++inu,
      image: "AAmohamed.jpg",
      name: "Mohamed Kaream",
      work: "Unkown",
      num: "010578348989",
      email: "mohamedbauimi@gmail.com",
      // website: "mohamed.com",
    },
    {
      id: ++inu,
      image: "abdullah.jpeg",
      name: "Abdullah Nozha",
      work: "Programmer",
      num: "01023242049",
      email: "abdullahelhandassa@gmail.com",
      website: "elhandassa.com",
    },
    {
      id: ++inu,
      image: "abdullahAndMazen.jpeg",
      name: "Mazen&Abdullah",
      work: "Unkown",
      num: "0102546876",
      email: "mazenzenelden@gmail.com",
      website: "mazen.com",
    },
    {
      id: ++inu,
      image: "AhmedRafat.jpeg",
      name: "Ahmed Rafat",
      work: "منجد",
      num: "01034679221",
      email: "ahmedrafat@gmail.com",
      // website: "ahmedrafat.com",
    },
    {
      id: ++inu,
      image: "aMazen.jpeg",
      name: "Mazen zen",
      work: "Unkown",
      num: "50565423345",
      email: "mazenzenelhdaddjflask@gmail.com",
      website: "mazennee.com",
    },
    {
      id: ++inu,
      image: "AAmohamed.jpg",
      name: "Mohamed Kaream",
      work: "Unkown",
      num: "010578348989",
      email: "mohamedbauimi@gmail.com",
      // website: "mohamed.com",
    },
    {
      id: ++inu,
      image: "abdullah.jpeg",
      name: "Abdullah Nozha",
      work: "Programmer",
      num: "01023242049",
      email: "abdullahelhandassa@gmail.com",
      website: "elhandassa.com",
    },
    {
      id: ++inu,
      image: "abdullahAndMazen.jpeg",
      name: "Mazen&Abdullah",
      work: "Unkown",
      num: "0102546876",
      email: "mazenzenelden@gmail.com",
      website: "mazen.com",
    },
    {
      id: ++inu,
      image: "AhmedRafat.jpeg",
      name: "Ahmed Rafat",
      work: "منجد",
      num: "01034679221",
      email: "ahmedrafat@gmail.com",
      // website: "ahmedrafat.com",
    },
    {
      id: ++inu,
      image: "aMazen.jpeg",
      name: "Mazen zen",
      work: "Unkown",
      num: "50565423345",
      email: "mazenzenelhdaddjflask@gmail.com",
      website: "mazennee.com",
    },
    {
      id: ++inu,
      image: "AAmohamed.jpg",
      name: "Mohamed Kaream",
      work: "Unkown",
      num: "010578348989",
      email: "mohamedbauimi@gmail.com",
      // website: "mohamed.com",
    },
    {
      id: ++inu,
      image: "abdullah.jpeg",
      name: "Abdullah Nozha",
      work: "Programmer",
      num: "01023242049",
      email: "abdullahelhandassa@gmail.com",
      website: "elhandassa.com",
    },
    {
      id: ++inu,
      image: "abdullahAndMazen.jpeg",
      name: "Mazen&Abdullah",
      work: "Unkown",
      num: "0102546876",
      email: "mazenzenelden@gmail.com",
      website: "mazen.com",
    },
    {
      id: ++inu,
      image: "AhmedRafat.jpeg",
      name: "Ahmed Rafat",
      work: "منجد",
      num: "01034679221",
      email: "ahmedrafat@gmail.com",
      // website: "ahmedrafat.com",
    },
    {
      id: ++inu,
      image: "aMazen.jpeg",
      name: "Mazen zen",
      work: "Unkown",
      num: "50565423345",
      email: "mazenzenelhdaddjflask@gmail.com",
      website: "mazennee.com",
    },
    {
      id: ++inu,
      image: "AhmedRafat.jpeg",
      name: "Ahmed Rafat",
      work: "منجد",
      num: "01034679221",
      email: "ahmedrafat@gmail.com",
      // website: "ahmedrafat.com",
    },
    {
      id: ++inu,
      image: "aMazen.jpeg",
      name: "Mazen zen",
      work: "Unkown",
      num: "50565423345",
      email: "mazenzenelhdaddjflask@gmail.com",
      website: "mazennee.com",
    },
    {
      id: ++inu,
      image: "AhmedRafat.jpeg",
      name: "Ahmed Rafat",
      work: "منجد",
      num: "01034679221",
      email: "ahmedrafat@gmail.com",
      // website: "ahmedrafat.com",
    },
    {
      id: ++inu,
      image: "aMazen.jpeg",
      name: "Mazen zen",
      work: "Unkown",
      num: "50565423345",
      email: "mazenzenelhdaddjflask@gmail.com",
      website: "mazennee.com",
    },
  ];
  // console.log(inu);
  return (
    <div className="Cards">
      {info.map((mem) => {
        return (
          <CardItems
            key={mem.id}
            image={mem.image}
            name={mem.name}
            work={mem.work}
            num={mem.num}
            email={mem.email}
            website={mem.website}
          />
        );
      })}
    </div>
  );
}

export default Card;
