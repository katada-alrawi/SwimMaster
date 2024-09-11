import { Check } from "lucide-react";
import { Link } from "react-router-dom";


function Pricing() {
  const Pricing = [
    {
      imgUrl: "/public/img11.png",
      title: "QUARTERLY",
      price: "180",
      length: 3,
    },
    {
      imgUrl: "/public/img14.jpg",
      title: "HEAL_YEARLY",
      price: "360",
      length: 6,
    },
    {
      imgUrl: "/public/img16.jpg",
      title: "YEARLY",
      price: "600",
      length: 12,
    },
  ];
  return (
    <section className='pricing'>
    <h1>ELITE EDGE SWIM PLANS</h1>
    <div className='wrapper'>
    {
      Pricing.map(element=>{
        return (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p> for {element.length} Months</p>
            </div>
            <div className="description">
              <p>
                <Check /> Equipment
              </p>
              <p>
                <Check /> All Day Free Training
              </p>
              <p>
                <Check /> Free Restroom
              </p>
              <p>
                <Check /> 24/7 skilled Support
              </p>
              <p>
                <Check /> 20 Day Freezing option 
              </p>
              <Link to={"/"} >Join Now</Link>
            </div>
          </div>
        );
      })
    }

    </div>


    </section>
  )
}

export default Pricing