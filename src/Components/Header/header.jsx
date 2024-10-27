//#region Import section

import React, { useState } from 'react'
import './header.css'
// import CTA from './CTA'
import profileImage from '../../Assets/profileimage.png'
import skillImage from '../../Assets/skill.png'
import valuestreammap from "../../Assets/value-stream-mapping.png"
import fastracker from "../../Assets/fastracker.png"
import CV from '../../Assets/CV.pdf'
import Modal from './modal'
import {BsFillArrowDownCircleFill, BsJournalAlbum, BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//#endregion

const Header = () => {

//#region Page Navigation Controller

  const [check, setCheck] = useState("#")
  function changeScreen(){
    if (check === "#"){
      setCheck("#skill_container")
    }
    else if (check === "#skill_container"){
      setCheck("#education_container")
    }
    else if (check === "#education_container"){
      setCheck("#project_container_1")
    }
    else if (check === "#project_container_1"){
      setCheck("#project_container_2")
    }
    else if (check === "#project_container_2"){
      setCheck("#bottom_container")
    }
    else if (check === "#bottom_container"){
      setCheck("#")
    }
  }

//#endregion


//#region Project - 1
  const project_photo_1 = valuestreammap
  const project_title_1 = 'MANPOWER OPTIMIZATION'
  const project_details_1 = "In this article, we will delve into the powerful methodologies of Value Stream Mapping (VSM), Process Standardization, and Process Flow Diagrams, which have collectively enabled us to achieve an impressive 13.47% manpower optimization. By implementing these practices, we have streamlined our operations, minimized waste, and maximized the utilization of our human capital. Let's explore these concepts in detail.\n\n"+
                            "<h3>Value Stream Mapping (VSM):</h3>\n" +
                            "Value Stream Mapping is a lean management technique used to analyze, visualize, and optimize the flow of information and materials in our organization's processes. By mapping out the entire value stream, from the initial customer request to the final delivery, we gain valuable insights into the steps and activities involved in each process.\n" +
                            "Our VSM process involves:\n" +
                            "<b>1. Identifying Value-Added and Non-Value-Added Activities:</b> We categorize activities into those that directly contribute value to our products/services and those that do not. By eliminating or minimizing non-value-added activities, we reduce inefficiencies.\n" +
                            "<b>2. Streamlining Process Flow:</b> Through VSM, we identify bottlenecks and areas of waste in our workflows. We then redesign processes to enhance flow and optimize resource utilization.\n" +
                            "<b>3. Creating Future State VSM:</b> We envision an ideal state for our processes and design a roadmap to achieve it. This includes setting improvement goals and defining the steps to reach them.\n\n" +
                            "<h3>Process Standardization:</h3>\n" +
                            "Process Standardization involves establishing consistent, best-practice procedures across our organization. It ensures that each team member performs tasks in a uniform manner, eliminating variations that can lead to errors and inefficiencies.\n" +
                            "<b>Our Process Standardization approach includes:</b>\n" +
                            "<b>1. Process Documentation:</b> We meticulously document each process, outlining the required steps, roles, responsibilities, and expected outcomes. This documentation serves as a comprehensive reference for all employees.\n" +
                            "<b>2. Training and Education:</b> We invest in training our employees to follow standardized processes efficiently. This ensures that everyone is equipped with the necessary skills and knowledge to contribute to the organization's success.\n" +
                            "<b>3. Continuous Improvement:</b> We foster a culture of continuous improvement, encouraging employees to provide feedback on existing processes and propose enhancements.\n" +
                            "\n<h3>Process Flow Diagrams:</h3>\n" +
                            "Process Flow Diagrams visually represent the sequence of steps in a process, providing a clear understanding of the workflow.\n" +
                            "\n<b>Our Process Flow Diagram approach includes:</b>\n" +
                            
                            "<b>1. Mapping the Current State:</b> We create detailed diagrams for existing processes to identify inefficiencies, redundancies, and opportunities for optimization.\n" +
                            "<b>2. Designing the Future State:</b> Based on the insights gained from the current state analysis, we design improved process flow diagrams that incorporate lean principles and best practices.\n" +
                            "<b>3. Implementing the Changes:</b> We collaborate with cross-functional teams to implement the changes effectively and monitor the results.\n" +
                            "\n<h3>Results and Benefits:</h3>\n" +
                            "<b>1.</b> Through the successful integration of Value Stream Mapping, Process Standardization, and Process Flow Diagrams, [Your Organization's Name] has achieved an impressive 13.47% manpower optimization. The benefits of these practices include:\n" +
                            "<b>2.</b> Enhanced Efficiency: Streamlined processes lead to faster turnaround times and reduced lead times, increasing overall productivity.\n" +
                            "<b>3.</b> Reduced Costs: Minimizing non-value-added activities and eliminating waste helps us save costs associated with unnecessary labor and materials.\n" +
                            "<b>4.</b> Improved Quality: Standardizing processes and optimizing workflows lead to a decrease in errors and defects, resulting in higher-quality products and services.\n" +
                            "<b>5.</b> Empowered Employees: By involving employees in process improvement initiatives, we foster a culture of engagement and continuous learning.\n" +
                            "\nembracing Value Stream Mapping, Process Standardization, and Process Flow Diagrams is the key to unlocking the full potential of our manpower resources. The 13.47% optimization achieved is a testament to the effectiveness of these methodologies in driving organizational success. By constantly seeking to improve and innovate, we remain committed to staying at the forefront of efficiency and delivering exceptional value to our customers."

//#endregion


//#region Project - 2

  const project_photo_2 = ""
  const project_title_2 = "FASTRACKER"
  const project_details_2 = '<h3>Track, Analyze, Optimize: Taking Production Management to New Heights</h3>'+
                            '<p>Are you tired of the traditional, cumbersome methods of production tracking? Does the lack of real-time data and analytics impede your decision-making process, leading to inefficiencies and missed opportunities? Well, fret no more, because we have a game-changer for you! Introducing FASTRACKER, the innovative application that promises to transform the way you manage production, enhancing productivity, efficiency, and overall success.</p>' +
                            '\n<h3>The Birth of FASTRACKER: A Solution to Industry Challenges</h3>' +
                            "<p>As an entrepreneur and a technophile, I always had an eye on the manufacturing and production sector. Having closely observed the challenges faced by many businesses in this domain, I was determined to create a comprehensive solution that addresses their pain points and propels them toward growth. That's when FASTRACKER was born - an intuitive, real-time production tracking and analysis application designed to optimize processes and maximize output.</p>" +
                            "\n<h3>The Power of Real-Time Tracking</h3>" +
                            "<p>One of the most significant advantages of FASTRACKER is its real-time tracking capability. No more relying on outdated spreadsheets or manual data entry; FASTRACKER empowers your workforce with instant access to production data. From the shop floor to management, everyone can now monitor progress, identify bottlenecks, and respond to issues proactively. This real-time visibility ensures that no problems go unnoticed, leading to quicker problem-solving and minimizing downtime.</p>" +
                            "\n<h3>Seamless Integration for Web and Android</h3>" +
                            "<p>Recognizing the diversity of modern workplaces, FASTRACKER has been developed to work seamlessly across both web and Android platforms. Whether you're in the office analyzing data on your computer or on the go, checking production metrics via your smartphone, FASTRACKER ensures that you stay connected to your production process at all times.</p>" +
                            "\n<h3>Unlocking Insights with Advanced Analytics</h3>" +
                            "<p>At the core of FASTRACKER lies its robust analytical capabilities. Our application not only tracks production in real-time but also provides comprehensive insights into productivity and efficiency trends. From detailed performance reports to predictive analytics, FASTRACKER enables data-driven decision-making for better resource allocation, process optimization, and cost reduction. With this level of informed analysis, your business gains a competitive edge in the market.</p>" +
                            "\n<h3>Reduced Reaction Time, Increased Productivity</h3>" +
                            "<p>Gone are the days of waiting for manual reports to detect issues and inefficiencies. FASTRACKER's real-time alerts and notifications instantly draw attention to anomalies and deviations from production targets. This reduced reaction time to problem-solving ensures that your team can take prompt action, mitigating risks and maximizing productivity.</p>" +
                            "\n<h3>User-Friendly Interface, Hassle-Free Adoption</h3>" +
                            "<p>As the creator of FASTRACKER, I understand the importance of user experience. We have invested considerable effort in crafting an intuitive and user-friendly interface that requires minimal training for adoption. With its clean design and straightforward navigation, FASTRACKER ensures that every member of your team can utilize the app effectively, from the tech-savvy to the less technically-inclined.</p>" +
                            "\n<h3>Embrace the Future of Production Management with FASTRACKER</h3>" +
                            "<p>in conclusion, FASTRACKER represents the next-generation solution for production tracking and analysis. By providing real-time data, advanced analytics, and seamless integration between web and Android platforms, it empowers businesses to make data-driven decisions and optimize their production processes efficiently. With FASTRACKER in your arsenal, you can take your business to new heights of success.</p>" +
                            "\n<p>Are you ready to experience the power of FASTRACKER? Join us on this journey of productivity and efficiency! Let's FASTRACK your success together!</p>"
  
//#endregion


//=============== Project-3 ==============//
  const project_title_3 = "INTEGRATED MATERIAL FLOW SYSTEM"
  const project_summary_3 = 'You don’t have Key Performance Indicator? Well, you don’t have progress as well. We developed KPI based evaluation system for every stage of the employee, which improved the overall efficiency of the organization by 4.86%.'
  //=============== Project-4 ==============//
  const project_title_4 = "MACHINE LEARNING MODEL"
  const project_summary_4 = 'The whole world is running towards Industry 4.0, where are we? Well, keeping that in mind we developed our own Android Apps for data management and server-based system for data storing. Which allowed us to see real time performance level of the organization and give us insight about improvement scopes.'
  //=============== Project-5 ==============//
  const project_title_5 = "OPTIMUM MATERIAL CONSUMPTION"
  //=============== Project-6 ==============//
  const project_title_6 = "KPI BASED EVALUATION SYSTEM"

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [photo, setPhoto] = useState('')

  const handleOpenModal = (project_photo, project_Title, project_details) => {
    setPhoto(project_photo)
    setTitle(project_Title);
    setDetails(project_details)
    setShowModal(true);
    console.log(photo)
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPhoto('')
    setTitle('')
    setDetails('')
  };


  return (
    <header>

      {/* ---------------- Photo, name and intro section ------------------ */}
      <section>
        <div className="container">
          <img src={profileImage} className='profile_image'/>
          <div className="text_container">
            <h4 className='text suffix_text_profile_name'>Hello, I'm</h4>
            <h1 className='text profile_name'> A K M TASFIQ ABEDIN</h1>
            <h4 className='text suffix_text_profile_name'>Industrial Engineer, Data Analyst, Programmer, LEAN Practitioner, AI Practitioner</h4>
          </div>
          <div className='quote_container'>
            <p className='quote_1'>Only You Can Decide <span className='high_priority'>What You Want To BE</span></p>
          </div>
          <a onClick={changeScreen} href={check} className='downArrow'><BsFillArrowDownCircleFill/></a>
          {/* <CTA/> */}
          <div className='design'>
            <div id="column_1"></div>
            <div id="column_2"></div>
            <div id="column_3"></div>
          </div>
        </div>
      </section>
      {/* ---------------- UPDATED - 27.10.2024 ------------------ */}

      {/* ---------------- SKILLS & COMPETENCY CONTAINER ------------------ */}
      <section>
        <div id='skill_container' className='container'>
            <div className='container_title'><p className='title'>SKILLS & COMPETENCY</p></div>
            <div className='skillexp'>
              <div className='interpersonalExp'>
                <h2>INTERPERSONAL EXPERTISE</h2>
                <ul>
                  <li>Decision making and problem solving</li>
                  <li>Able to work under pressure</li>
                  <li>Very meticulous and versatile</li>
                  <li>Can work independently and as well as a part of team</li>
                  <li>Leadership</li>
                  <li>Excellent communication skill</li>
                  <li>Negotiation</li>
                </ul>
              </div>
              <div className='bordercontainer'>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
                <div id='dotelement'></div>
              </div>
              <div className='technicalExp'>
                <h2>TECHNICAL EXPERTISE</h2>
                <h3 id='subtechexp'>PROGRAMMING LANGUAGE</h3>
                <div id='programmingSkill'>
                  <div id='programCard'><h3 id='progskillname'>Python</h3></div>
                  <div id='programCard'><h3 id='progskillname'>SQL</h3></div>
                  <div id='programCard'><h3 id='progskillname'>JavaScript</h3></div>
                  <div id='programCard'><h3 id='progskillname'>REACT</h3></div>
                  <div id='programCard'><h3 id='progskillname'>REACT NATIVE</h3></div>
                </div>
                <h3 id='subtechexp'>SOFTWARE EXPERTISE</h3>
                <div id='softwareSkill'>
                  <div id='softCardContainer_1'>
                    <div id='softCard'><h3 id='softskillname'>MS Office Tools</h3></div>
                    <div id='softCard'><h3 id='softskillname'>SolidWorks</h3></div>
                    <div id='softCard'><h3 id='softskillname'>MATLAB</h3></div>
                    <div id='softCard'><h3 id='softskillname'>MiniTAB</h3></div>
                    <div id='softCard'><h3 id='softskillname'>MS Power Bi</h3></div>
                  </div>
                  <div id='softCardContainer_2'>
                    <div id='softCard'><h3 id='softskillname'>MS Excel Power Query & DAX</h3></div>
                    <div id='softCard'><h3 id='softskillname'>MS Excel Dashboard</h3></div>
                    <div id='softCard'><h3 id='softskillname'>Adobe Photoshop</h3></div>
                    <div id='softCard'><h3 id='softskillname'>Adobe Illustrator</h3></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={skillImage} className="skill_image"/>
            </div>
        </div>
      </section>

      {/* ---------------- EDUCATION CONTAINER ------------------ */}
      <section>
        <div id='education_container' className='container'>
          <div className='container_title'><p className='title'>EDUCATION</p></div>
          <div className='certification_detail'>
            <div className='education_cert_detail'>
              <h2 id='cert_header'>EDUCATIONAL CERTIFICATE</h2>
              <h3 id='cert_stage_header'>POST GRADUATE DIPLOMA</h3>
              <ul id='cert_details'>
                <li>Supply Chain Management</li>
                <li>2019 -- 2020</li>
                <li>International Supply Chain Alliance (ISCEA)</li>
                <li><a href='https://drive.google.com/file/d/1vTLvPu5rU1-7oKEjgMMqZ7D1KhduppK-/view?usp=sharing'>CRETIFICATION</a></li>
              </ul>
              <h3 id='cert_stage_header'>BACHELOR OF SCIENCE</h3>
              <ul id='cert_details'>
                <li>Industrial & Production Engineering</li>
                <li>2013 -- 2017</li>
                <li>Ahsanullah University of Science & Technology</li>
                <li><a>Ask for GPA?</a></li>
              </ul>
              <h3 id='cert_stage_header'>HIGHER SECONDARY CERTIFICATE</h3>
              <ul id='cert_details'>
                <li>Science</li>
                <li>2011 -- 2012</li>
                <li>National Ideal College</li>
                <li>CGPA: 5.00 Out of 5.00</li>
              </ul>
            </div>

            <div className='education_cert_detail'>
              <h2 id='cert_header'>PROFESSIONAL CERTIFICATE</h2>
              <div id='prof_cert_1'>
                <p id='prof_cert_head'>LEAN SIX SIGMA YELLOW BELT CERTIFICATION</p>
                <p id='prof_cert_uni'>Technical University of Munich</p>
                <p id='prof_cert_cer'><a href='https://drive.google.com/file/d/1HKsqOKzJtJTUaQigKO8zo3H4nro5tbwx/view?usp=sharing'>CRETIFICATION</a></p>
              </div>
              <div id='prof_cert_1'>
                <p id='prof_cert_head'>MS EXCEL PROFESSIONAL CERTIFICATION</p>
                <p id='prof_cert_uni'>UDEMY</p>
                <p id='prof_cert_cer'><a href='https://www.udemy.com/certificate/UC-110c1faf-38b8-44ae-b3db-e49b79563a40/'>CRETIFICATION</a></p>
              </div>
              <div id='prof_cert_1'>
                <p id='prof_cert_head'>ISO 9001:2015 LEAD AUDITOR CERTIFICATION</p>
                <p id='prof_cert_uni'>INTERTEK</p>
                <p id='prof_cert_cer'><a href='https://drive.google.com/file/d/1yBlRerD5iRWt6NXds01DS0itnpZHKY6K/view?usp=sharing'>CRETIFICATION</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECT CONTAINER - ADDVERT TYPE - 1 ------------------ */}
      <section>
        <div id='project_container_1' className='container'>
          <div className='container_title'><p className='title'>MAJOR PROJECTS</p></div>
          <div className='rectangle rect_position_1' onClick={()=>handleOpenModal(project_photo_1, project_title_1, project_details_1)}>
            <div>
              <p className='project_value'>13.47%</p>
              <p className='project_desc'>Manpower Optimization through value stream mapping, Process standardization & Process flow diagram</p>
            </div>
          </div>

          <div className='rectangle rect_position_2' onClick={()=>handleOpenModal(project_photo_2, project_title_2, project_details_2)}>
            <div>
              <p id='project_value_2' className='project_value'>47%</p>
              <p id='project_desc_2' className='project_desc'>reduction of reaction time by developing and implementing Data Management Sorftware FASTRACKER</p>
            </div>
          </div>

          <div className='rectangle rect_position_3'>
            <div>
              <p className='project_value'>71%</p>
              <p className='project_desc'>Optimization of end line quality inspector by implementing integrated material flow system.</p>
            </div>
          </div>
          {showModal && (
              <Modal
                photo={photo}
                title={title}
                details={details}
                onClose={handleCloseModal}
              />
          )}
        </div>
      </section>

      {/* ---------------- PROJECT CONTAINER - ADDVERT TYPE - 2 ------------------ */}
      <section>
        <div id='project_container_2' className='container'>
          <div id='major_project_title' className='container_title'><p className='title'>MAJOR PROJECTS</p></div>
          <div className='rectangle rect_position_4'>
            <div>
              <p className='project_value'>83%</p>
              <p className='project_desc'>Confident machine learning model to predict manpower demand considering forecasted production quantity</p>
            </div>
          </div>

          <div className='rectangle rect_position_5'>
            <div>
              <p id='project_value_2' className='project_value'>17.04%</p>
              <p id='project_desc_2' className='project_desc'>Reduction of wastage by real time tracking of material consumption</p>
            </div>
          </div>

          <div className='rectangle rect_position_6'>
            <div>
              <p className='project_value'>4.86%</p>
              <p className='project_desc'>Improved overall factory efficiency by introducing KPI based evaluation system for every employee</p>
            </div>
          </div>
          <div className='quote_container_2'>
            <p className='quote_2'>Live Every Single Second of Your Life With <span className='high_priority'>Purpose</span></p>
            <p >IKIGAI</p>
          </div>
        </div>
        {showModal && (
              <Modal
                photo={photo}
                title={title}
                details={details}
                onClose={handleCloseModal}
              />
        )}
      </section>

      {/* ----------------- BOTTOM CONTAINER ------------------- */}
      <section>        
        <div id='bottom_container'>
          <div className='circle circle_position_1'>
            <div className='resume_title'>
              <p className='resume'>LOOKING FOR MY RESUME?</p>
              <a href={CV} download className='button_resume'>DOWNLOAD RESUME</a>
            </div>
          </div>
          <div className='socialMedia'>
            <h2 id='find_me_here'>Find me Here,</h2>
            <a className='mediaIcon' href='https://www.linkedin.com/in/a-k-m-tasfiq-abedin/'><BsLinkedin/></a>
            <a className='mediaIcon' href='https://github.com/TasfiqAbedinIE'><BsGithub/></a>
            <a className='mediaIcon' href='https://www.facebook.com/tasfiq.abedin'><BsFacebook/></a>
            {/* <a className='mediaIcon' href=''><BsJournalAlbum/></a> */}
          </div>
        </div>
        <div className='footer'>
          <div id='trademark_section'>
            {/* <h5>Want a website like this?</h5> */}
            <h4>Contact With Me</h4>
            <p>© AKM TASFIQ ABEDIN</p>
            <h5>tasfiq.ipe.aust@gmail.com</h5>
          </div>
          <div id='go_game_section'>
            <div id='game_button'>
              <h3 id='game_button_text'>BLOG - Coming Soon</h3>
            </div>
          </div>
          

        </div>
      </section>
    </header>
  )
}

export default Header

