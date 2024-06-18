
import React from 'react';
import './Facilities.css';
import MainLayout from '../../Layout/MainLayout';
import facilitiespic from '../pic/facilitiespic.jpg'
const Facilities = () => {
  return (
    <MainLayout>
    <div className="facilities-container">
      <img src={facilitiespic} alt="Students" className="facilities-image" />
      <div className="facilities-content">
        <h1 className="facilities-title">FACILITIES</h1>
        <ul className="facilities-list">
          <li>
            <strong>SPORTS –</strong> The School has its own play ground within the campus. We also conduct our annual sports day in February in the same ground. Our school has a scrolling campus with a own playground.
          </li>
          <li>
            <strong>SOCIAL & CULTURAL –</strong> School host social events annually to showcase the talents of the students. Also various cultural programs and competitions which helps in cultural upliftment of the students.
          </li>
          <li>
            <strong>COMPUTER –</strong> The school has spacious software lab for holding computer classes.
          </li>
          <li>
            <strong>LABORATORY –</strong> We have set up a laboratory with all necessary requirements for creating the interest in science.
          </li>
          <li>
            <strong>AUDIO VISUAL AIDED TEACHING –</strong> We have a Projector Room for imparting education through multimedia encouraging e learning.
          </li>
          <li>
            <strong>HEALTH CHECKUP –</strong> Every year before Puja a health checkup camp is organized.
          </li>
          <li>
            <strong>CAREER COUNSELLING –</strong> Arrangement for career counseling for career guidance.
          </li>
          <li>
            <strong>CONVEYANCE –</strong> School has its own buses which render the facility of pick and drop of the students.
          </li>
        </ul>
      </div>
    </div>
    </MainLayout>
  );
}

export default Facilities;