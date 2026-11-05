import React from "react";
import CarbonPrint from "../components/carbonprint";
import Lovenders from "../components/lovenders";
import Offbeat from "../components/offbeat";
import HappyFridge from "../components/happy-fridge";
import EMC from "./emc";
import Tablo from "./tablo";
import Miinga from "./miinga";
import Accolade from "./accolade";

const FeaturedWork = () => {
  return (
    <div id="work" className="featured-work-con">
      <div className="featured-work-title-con">
        <div><p className="eyebrow">02 / SELECTED WORK</p><h2>Ideas brought to life.</h2></div><p>A selection of apps I’ve helped build.<br />Real products. Thoughtful engineering.</p>
      </div>
      <Accolade />
      <hr className="divider-hr" />
      <Tablo />
      <hr className="divider-hr" />
      <EMC />
      <hr className="divider-hr" />
      <Miinga />
      <hr className="divider-hr" />
      <Lovenders />
      <hr className="divider-hr" />
      <Offbeat />
      <hr className="divider-hr" />
      <HappyFridge />
      <hr className="divider-hr" />
      <CarbonPrint />
      <hr className="divider-hr" />
      {/* <Realisting /> */}
    </div>
  )
}

export default FeaturedWork;
