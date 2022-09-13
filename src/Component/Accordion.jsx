import React, { Component } from "react";
import Accordionchild from "./Accordionchild";

class Accordion extends Component {
  state = {
    datas: [
      {
        
        title: "Do I have to allow the use of cookies?",
        info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
      },
      {
      
        title: "How do I change my My Page password?",
        info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
      },
      {
       
        title: "What is BankID?",
        info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
      },
      {
      
        title: "Whose birth number can I use?",
        info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
      },
      {
        
        title: "When do I recieve a password ordered by letter?",
        info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
      },
    ],
  };
  render() {
    return (
      <div>

        {this.state.datas.map(data =>
        <Accordionchild title = {data.title} info = {data.info}/>



        )}
      
      </div>
    );
  }
}

export default Accordion;
