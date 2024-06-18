// ManagerComponent.jsx
import React from 'react';
import './ManagerComponent.css';
import managerImage from './path/to/your/image.jpg'; // Ensure to replace with the actual path

const ManagerComponent = () => {
  return (
    <MainLayout>
    <div className="manager-container">
      <div className="manager-header">
        <img src={campas} alt="Manager" className="campaspic" />
      </div>
      <div className="managing-committee">
        <h2 className="committee-title">
          <span className="pencil-icon">✏️</span>
          MANAGING COMMITTEE
        </h2>
        <div className="manager-details">
          <img src="path/to/logo.png" alt="School Logo" className="school-logo" />
          <div className="manager-info">
            <h3>MANAGER</h3>
            <div className='cain'/>
            <p className="manager-name">Mrs. PUSHPA SINGH</p>
            <p className="manager-title">( Uma Ram Shankar Singh Inter College)</p>
            <p className="manager-description">
              At our school, we are driven by a visionary ethos that extends beyond traditional education paradigms. 
              We believe in embracing innovation as the catalyst for transformation, empowering our students to become 
              agile thinkers and creators in a rapidly changing world. Our vision encompasses the cultivation of global 
              citizens, instilling in our students a deep sense of empathy, cultural awareness, and responsibility towards 
              the global community.
            </p>

            
            <p className="manager-description">
              We nurture future leaders who are not only academically proficient but also compassionate and socially conscious, 
              equipped to address complex challenges with resilience and integrity. Sustainability is at the core of our vision, 
              as we strive to foster environmental stewardship and promote sustainable practices within our school and beyond. 
              Central to our mission is the belief in amplifying student voice and agency, creating a culture of inclusivity, 
              collaboration, and empowerment. We are committed to championing equity, diversity, and inclusion, ensuring that 
              every student feels valued, respected, and supported in their educational journey. Through our collective efforts, 
              we are building resilient communities where every individual has the opportunity to thrive and make a positive 
              impact on the world.
            </p>
           
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

export default ManagerComponent;