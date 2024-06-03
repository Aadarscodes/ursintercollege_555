import React from 'react';
import './Admission.css';

const Admission = () => {
    return (
        <div className="admission-container">
            <div className="header">
                <img src="path_to_your_image/admission.jpg" alt="Admission" />
            </div>
            <div className="academic-info">
                <h1>ADMISSION</h1>
                <h2>ACADEMIC INFORMATION</h2>
                <div className="session">
                    <h3>Session :</h3>
                    <p>Junior section - January to December</p>
                    <p>Secondary and Higher Secondary Section - June to May</p>
                </div>
                <div className="timing">
                    <h3>Timing:</h3>
                    <p>For Class Nursery - 8:30 a.m. to 12:30 p.m.</p>
                    <p>For Classes KG to Class IV - 8:30 a.m. to 1:15 p.m.</p>
                    <p>For Classes V to XII - 8:30 a.m. to 1:50 p.m.</p>
                </div>
                <div className="subjects">
                    <h3>Subject Combinations for Class XI</h3>
                    <ul>
                        <li>Hindi</li>
                        <li>English</li>
                        <li>Sanskrit</li>
                        <li>ARTS</li>
                        <li>Education</li>
                        <li>Political Science</li>
                        <li>History</li>
                        <li>Geography</li>
                    </ul>
                </div>
            </div>
            <div className="age-criteria">
                <h2>AGE CRITERIA</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VI</td>
                            <td>11+ years</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td>12+ years</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td>13+ years</td>
                        </tr>
                        <tr>
                            <td>IX</td>
                            <td>14+ years</td>
                        </tr>
                        <tr>
                            <td>XI</td>
                            <td>15+ years</td>
                        </tr>
                    </tbody>
                </table>
                <button className="enquiry-button">ENQUIRY</button>
            </div>
            <div className="download-form">
                <a href="path_to_your_download_link/admission_form.pdf" className="download-link">DOWNLOAD ADMISSION FORM</a>
            </div>
        </div>
    );
};

export default Admission;
