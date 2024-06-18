
// import React from 'react';
// import './Teachers.css';
// import teacherImage from 'path_to_your_image/image.png'; // Ensure to replace this with the correct path

// const teachersData = [
//     { name: "SANDEEP KUMAR (Principal)", subject: "High School (931-SCIENCE)", experience: "1 year", image: "path_to_image_1" },
//     { name: "BALIRAM PRASAD", subject: "Intermediate (103-Sanskrit)", experience: "19 years", image: "path_to_image_2" },
//     { name: "GHANSHYAM MAURYA", subject: "Intermediate (142-Sociology)", experience: "13 years", image: "path_to_image_3" },
//     { name: "ANURADHA TRIPATHI", subject: "High School (932-SOCIAL SCIENCE)", experience: "1 year", image: "path_to_image_4" },
//     { name: "MAHESH KUMAR", subject: "High School (936-DRAWING)", experience: "3 years", image: "path_to_image_5" }
// ];

// const Teachers = () => {
//     return (
//         <div className="teachers-container">
//             <div className="header-image">
//                 <img src={teacherImage} alt="Teachers" />
//             </div>
//             <table className="teachers-table">
//                 <thead>
//                     <tr>
//                         <th>Name of the Teacher</th>
//                         <th>Subject Taught</th>
//                         <th>Experience</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {teachersData.map((teacher, index) => (
//                         <tr key={index}>
//                             <td>
//                                 <img src={teacher.image} alt={teacher.name} />
//                                 {teacher.name}
//                             </td>
//                             <td>{teacher.subject}</td>
//                             <td>{teacher.experience}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Teachers;

import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import '../pages/Teachers.css';


const Teachers = () => {
    return (
        <MainLayout>
            {/* <div className="teachers-container">
             <div className="header-image">
             <img src={teacherImage} alt="Teachers" />
           </div>
             <table className="teachers-table">
                 <thead>
                     <tr>
                         <th>Name of the Teacher</th>
                        <th>Subject Taught</th>
                         <th>Experience</th>
                     </tr>
                 </thead>
                 <tbody>
                     {teachersData.map((teacher, index) => (
                        <tr key={index}>
                            <td>
                                <img src={teacher.image} alt={teacher.name} />
                                {teacher.name}
                            </td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> */}
            
        </MainLayout>
    );
};

export default Teachers;

