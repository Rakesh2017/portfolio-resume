import React from "react";
import ExpTemplate from "./exp-template";

const WorkExperience = () => {
  const senior_dev = "Senior Mobile Application Developer";
  const inter_dev = "Intermediate Android Developer";
  const dev = "Android Developer";
  const freelancer = "Senior Android Developer";
  const software_engineer = "Software Engineer [Android + Flutter]";
  return (
    <div className="work-exp-con" id="work-experience">
      <div>
        <p className="eyebrow">03 / THE JOURNEY</p><h2>Experience that adds up.</h2>
      </div>
      <div style={{ position:"relative" }}>
        {/* <div id="line1" className="horizontal-line" /> */}
        {/* <div id="line2" className="horizontal-line" /> */}
        <div className='exp-content-con'>
          <ExpTemplate
            company={"Software Engineer"}
            designation={software_engineer}
            date={"Feb 2025 - current"}
          />
        <ExpTemplate
            company={"Freelancing"}
            designation={freelancer}
            date={"Apr 2024 - May 2025"}
          />
          <ExpTemplate
            company={"Iversoft Solutions"}
            designation={senior_dev}
            date={"May 2022 - Mar 2024"}
          />
          <ExpTemplate
            company={"Skythinking Technology Co. Ltd."}
            designation={inter_dev}
            date={"Mar 2021 - Apr 2022"}
          />
          <ExpTemplate
            company={"Professional Development: PG in Mobile and Web Design and Development"}
            designation={""}
            date={"Aug 2019 - Jan 2021"}
          />
          <ExpTemplate
            company={"NRI Media Inc."}
            designation={dev}
            date={"Dec 2018 - Jun 2019"}
          />
          {/* <ExpTemplate
            company={"CarByke"}
            designation={dev}
            date={"June 2018 - November 2018"}
          /> */}
          <ExpTemplate
            company={"Enhabyto IT Solutions"}
            designation={dev}
            date={"Aug 2017 - Nov 2018"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
