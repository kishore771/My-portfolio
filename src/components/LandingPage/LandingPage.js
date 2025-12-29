import React from 'react';
import emailjs from "@emailjs/browser";
import bgVideo1 from '../../assets/bgVideo1.mp4';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import './LandingPage.css';

const LandingPage = () => {

   const myProjects = [
        {
            id: 1,
            name: "Movie Blogger",
            description: "This is a page where a user can share his Movie experiences",
            technologies: "React.js",
            image: "https://i.postimg.cc/Hs80WXhx/DALL-E-2025-02-02-12-35-39-A-modern-and-stylish-logo-for-a-Movie-Blogger-web-application-The-de.webp",
            link: "https://movie-blogger.vercel.app/"
        },
        {
            id: 2,
            name: "Jobby App",
            description: "This is a page where a user can find jobs and apply for them",
            technologies: ": React JS, JS, CSS, Bootstrap, Routing, REST API Calls, LocalStorage, JWT Token, Authorization, Authentication",
            image: "https://i.postimg.cc/fT7qqW0p/jobby-app-image.png",
            link: "https://jobbylee.ccbp.tech/login"
        },
         {
            id: 3,
            name: "Foodie Stop",
            description: "This is a fully responsive website that offers a comprehensive list of food items and detailed information about each item.",
            technologies: ":HTML, CSS, Bootstrap, React JS, React Router, React Icons, React Bootstrap",
            image: "https://i.postimg.cc/Zn5nwXTf/logo-transparent-png.png",
            link: "https://foodie-stop-xi.vercel.app/"
        },
        {
            id: 4,
            name: "Weather App",
            description: "A responsive React weather app showing real-time data with animated icons and search functionality using OpenWeatherMap API.",
            technologies: ":React, Axios, Bootstrap, Lottie, OpenWeatherMap API, HTML, CSS",
            image: "https://i.postimg.cc/6pptWgNY/weather.png",
            link: "https://weather-app-omega-eight-26.vercel.app/"
        },
        {
            id: 5,
            name: "Guessing Game",
            description: "A responsive React Guessing Game app using React.Js",
            technologies: ":React, HTML, CSS",
            image: "https://i.postimg.cc/13QKXs1c/10374941-4462136.jpg",
            link: "https://guessing-game-rouge-three.vercel.app//"
        }

    ]


     const certifications = [
    {
      id: 1,
      name: "Building static Websites using HTML, CSS and Bootstrap",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/19d4HFhjS43WBPAJuskY1ZcWW5JQ7K3KH/view?usp=drive_link",
    },
    {
      id: 2,
      name: "Building Responsive Websites using Javascript",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/1TVvQ-TW_f696Jpp1bQyRuCeoIywE7Hfj/view?usp=drive_link",
    },
    {
      id: 3,
      name: "Building React Apps",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/1dB_PeVHSvM2lMAwMcJHMc3mwB_TD4dTo/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Deloitte Job Simulation",
      organization: "Deloitte",
      link: "https://drive.google.com/file/d/1siOpsXf0AjJtlxHqH0rukVHH0quCA9l7/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Deloitte Data Analyst Job Simulation",
      organization: "Deloitte",
      link: "https://drive.google.com/file/d/1C9H6gwfya67LdEWV-86Ebn9OOrISW_dr/view?usp=drive_link",
    },
  ];


  return (
    <div className="landing-page">
      <div className="header">  
         <h1 className="header-title">MY PORTFOLIO</h1>
         <nav className="nav-links">
              <a href="#sectionIntroPage" className="active">Home</a>
              <a href="#sectionAboutMe" className="active">About Me</a>
              <a href="#sectionProjects" className="active">Projects</a>
              <a href="#sectionSkills" className="active">Skills</a>
              <a href="#sectionCertifications" className="active">Certifications</a>
              <a href="#sectionContact" className="active">Contact</a>
         </nav>
     </div>
      <section className="introduction-page" id="sectionIntroPage">
        <div className="intro-container">

          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bgVideo1} type="video/mp4" />
          </video>

          <div className="intro-details">
            <h1 className="intro-title">
              Hello, <span className="intro-name">I'm Kishore Gundelli</span> -<br />
              Aspirant Frontend Developer
            </h1>
            <p className="intro-subtitle">
              A Frontend Developer specializing in building exceptional digital experiences.
            </p>
            <div className="intro-buttons">
            <a href="#sectionAboutMe" className="btn">Learn More About Me</a>
            <a href="#sectionProjects" className="btn btn-secondary">View My Projects</a>
            <button className="btn btn-secondary download-btn" onClick={() => { window.location.href = 'https://drive.google.com/file/d/1XUZXtxwuo9wpNJIVXd8Wg_11LNZzoNIG/view?usp=drive_link'; }
            }>
              Download CV
            </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/MTzf90hP/Untitled-Project-(3)-(1).jpg"
              alt="Kishore Gundelli"
              className="intro-image"
            />
          </div>

        </div>
      </section>
      <section className="about-me-page" id="sectionAboutMe">
        <div className="about-me-container">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            I'm Kishore Gundelli, a passionate Frontend Developer dedicated to crafting seamless and engaging user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic web applications. My goal is to create visually appealing and user-friendly interfaces that leave a lasting impression.
          </p>
          <div className="education-section">
            <h1 className="education-title">Educational Background</h1>
            <ul className="education-list">
              <li>Master of Business Administration (MBA)| R.G.R Siddhanthi College of Business Management | First Division | (2023 - 2025)</li>
              <li>Bachelor of Commerce (Computer Applications) | Dr.Br.Ambedkar degree college | CGPA : 8.16 | (2020 - 2023)</li>
              <li>XII (Board of Intermediate) | Tapasya Junior College | 65.9% | (2018- 2020)</li>
              <li>X (SSC) | Sri Vivekananda High School | CGPA : 7.8</li>
            </ul>
          </div>
          <a href="#sectionProjects" className="btn">View My Projects</a>
        </div>
      </section>
      <section className='skills' id="sectionSkills">
        <div className="skills-container">
          <h2 className="skills-title">My Skills</h2>
          <ul className="skills-list">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Redux</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git, GitHub)</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>
      </section>
      <section className="projects-page" id="sectionProjects">
        <div className="projects-container">
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-list">
            {myProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.name} className="project-image" />
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">{project.technologies}</p>
                <a href={project.link} className="btn">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="certifications-page" id="sectionCertifications">
        <div className="certifications-container">
          <h2 className="certifications-title">My Certifications</h2> 
          <div className="certifications-list">
            {certifications.map((certification) => (
              <div className="certification-card" key={certification.id}>
                <h3 className="certification-name">{certification.name}</h3>
                <p className="certification-organization">{certification.organization}</p>
                <a href={certification.link} className="btn">View Certification</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-page" id="sectionContact">
          <div className="contact-container">
            <h2 className="contact-title">Get In Touch</h2>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();

                emailjs
                  .sendForm(
                    "service_bf48kw6",
                    "template_hk1cv5w",
                    e.target,
                    "utMGz2F8Pzg_Cb-78"
                  )
                  .then(
                    () => {
                      alert("Message sent successfully!");
                      e.target.reset();
                    },
                    () => {
                      alert("Something went wrong. Please try again.");
                    }
                  );
              }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="contact-input"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="contact-input"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="contact-textarea"
              />

              <button type="submit" className="btn contact-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </section>
        <footer className="footer-container fixed-bottom">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/kishore771?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="http://www.linkedin.com/in/g-kishore-g-78579432b" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/im_kishore_117/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://x.com/gundelli25405" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Kishore Gundelli. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;
