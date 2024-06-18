
// MessagesComponent.jsx
import React from 'react';
import './MessagesComponent.css';
import headerImage from './path/to/your/header-image.png'; // Ensure to replace with the actual path
import logoImage from './path/to/your/logo.png'; // Ensure to replace with the actual path

const MessagesComponent = () => {
  return (
    <div className="messages-container">
      <div className="header">
        <img src={headerImage} alt="Message Header" className="header-image" />
      </div>
      <div className="message-section">
        <div className="message-title president-title">
          <span className="pencil-icon">✏️</span>
          FROM PRESIDENT'S DESK
        </div>
        <div className="message-content">
          <img src={logoImage} alt="School Logo" className="school-logo" />
          <div className="message-text">
            <p>
              To set the child in the right direction in order to build a strong and firm foundation, Jawahar Shiksha Niketan Inter College Jungle Babban Bhourabari Gorakhpur, an Hindi medium institution, is here to offer inevitable opportunities and resources. It works best with strong interests and direction.
            </p>
            <p>
              The pleasant environment, trained and experienced teachers, individual care, modern tools, teaching aids and equipment for the learners. Well-equipped library, regular meetings with parents are the special features of the institution for parting useful and quality education in the area.
            </p>
          </div>
        </div>
      </div>
      <div className="message-section">
        <div className="message-title headmistress-title">
          <span className="pencil-icon">✏️</span>
          FROM HEAD MISTRESS'S DESK
        </div>
        <div className="message-content">
          <img src={logoImage} alt="School Logo" className="school-logo" />
          <div className="message-text">
            <p>
              At the very onset, I am prompted to use a John Dewey's quote, "Education is not preparation for life... Education is life itself."
            </p>
            <p>
              It is a matter of pride and immense pleasure that destiny has given me the opportunity to join Jawahar Shiksha Niketan Inter College Jungle Babban Bhourabari family as its head. I take this opportunity to welcome all teachers, students, parents, staffs, guardians for choosing this school and being a part of it.
            </p>
            <p>
              Through the Jawahar Shiksha Niketan Inter College Jungle Babban Bhourabari Gorakhpur curriculum, our academic standards improve every year. Being a pure English Medium School in this kind of homely environment, the school is designed to be both accessible and challenging for all students, irrespective of their ability. Modern technologies like Smart Boards, Projectors, Science Laboratory, Computer Lab are part of the curriculum.
            </p>
            <p>
              Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime. Hence learning skill along with knowledge will enable our students not only to be seekers, but also job creators and emerge as global leaders in every field.
            </p>
            <p>
              I look forward to welcoming you to ensure the best standard of education and personal development for your child.
            </p>
            <p>
              Mr. Sandeep Kumar<br />
              Principal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesComponent;
