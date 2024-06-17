import React from 'react';
import abouttag from '../pic/ursprincipal.jpg';
import MainLayout from '../../Layout/MainLayout';
import '../pages/aboutus.css';


const AboutUs = () => {
    return (
        <MainLayout>
            <div className="about-us-container">
                <img
                    src={abouttag}
                    alt="urs inter college moglaha campierganj Gorakhpur"
                    className="about-us-image"/>
                <div className="about-us-content">
                    <h1>ABOUT US</h1> </div>
                    <br />
                    <br />
                <div className='pairagraph'>
                    <p>
                    Education with a provision for extension up to Higher Secondary level. We solemnly pledge with our utmost mission that
                    Uma Ram Shankar Singh Inter College Moglahan Kunwar Campierganj Gorakhpur will help the children cope with the national and global
                    needs of modern times taking into account of Indian culture and heritage as well to achieve these objects. We fervently appeal for benign
                    co-operation from all concerns of the society.
                </p>
                <br />
                <p>Welcome to Uma Ram Shankar Singh Inter College, where excellence is not just a goal, but a way of life. Here, 
                    we believe that every student has the potential to soar to great heights, and it's our mission to provide them with the wings to do so.
                    At Uma Ram Shankar Singh Inter College, we don't just focus on academic success, but also on nurturing well-rounded individuals who are equipped with the skills, knowledge, and character to thrive in an ever-changing world. We believe in the power of perseverance,
                    determination, and hard work, and we strive to instill these values in each and every one of our students. In our halls, you will find a community of dedicated educators who are passionate about inspiring and empowering young minds. We believe in fostering a supportive
                    and inclusive environment where every student feels valued, respected, and encouraged to reach for their dreams. So, whether you aspire to be a doctor, engineer, artist, or entrepreneur, know that at Uma Ram Shankar Singh Inter College, the sky is the limit. With determination,
                    dedication, and a sprinkle of courage, you can achieve anything you set your mind to. So, let's embark on this journey together, and let's make every moment count.
                </p>
            </div>
            </div>
        </MainLayout>
    );
};

export default AboutUs;
