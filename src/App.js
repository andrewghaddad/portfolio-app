import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import TitleImage from "./components/TitleImage";
import InfoBlock from "./components/InfoBlock";
import InfoBlockSubtitle from "./components/InfoBlockSubtitle";
import InfoBlockOverview from "./components/InfoBlockOverview";
import Footer from "./components/Footer";
import Work from "./components/Work";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/SLD" component={SLD}></Route>
        <Route exact path="/BrickConnect" component={BrickConnect}></Route>
        <Route exact path="/RewardPass" component={RewardPass}></Route>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="margin">
        <div className="Headline--section">
          <h1>
            Hey there 👋, my name is <br></br>Andrew— web developer and product
            designer.
          </h1>
          <h4 className="Subtitle--section">
            Based in the NYC Metro Area. Currently doing freelance web <br></br>
            development work at Find Your ID NYC.
          </h4>
        </div>
        <div className="WorkThumbnail--container">
          {" "}
          <Link to="/RewardPass"><div className="thumbnail--wrapper">
            <Work
              subtitle="Reward Pass"
              overhead="Featured Case Study"
              image="RP_thumbnail.png"
            ></Work>
          </div></Link>
          <Link to="/BrickConnect"><div className="thumbnail--wrapper">
            <Work
              subtitle="Brick Connect"
              overhead="Featured Case Study"
              image="BC_thumbnail.png"
            ></Work>
          </div></Link>
          <Link to="/SLD"><div className="thumbnail--wrapper">
            <Work
              subtitle="Shop Local Designers"
              overhead="Featured Web Design"
              image="SLD_thumbnail.png"
            ></Work>
          </div></Link> 
        </div>
        <div className="Headline--section">
          <h1>
            Interested in reaching <br></br>out to me?
          </h1>
          <h4 className="Subtitle--section">Email Address</h4>
          <h5>
            <a href="mailto:andrewghaddad@outlook.com"><p></p>andrewghaddad@outlook.com</a>
          </h5>
        </div>
        </div>
    </>
  );
}

function SLD() {
  return (
    <>
    <TitleImage
    title="Shop Local Designers"
    image="SLD_TitleImage.png"
    ></TitleImage>
    <div className="margin">
      <div className="section">
        <InfoBlockOverview
          title="Overview"
          body="Shop Local Designers is an e-commerce platform that I had developed and designed during my time of working as a Web Developer at Find Your ID NYC. I designed this project from inception to final design using UI/UX principles and ideation."
          subtitle1="Duration of project"
          text1="6 months"
          subtitle2="Tools used"
          text2="Squarespace, CSS, HTML, Javascript, Mailchimp"
          subtitle3="Methods used"
          text3="Design System, UI design, Style guide"
        />
        <img className="caseStudyImage--infographic" src="SLD_screenshot.png" alt="" />
      </div>
    </div>
    </>
  );
}

function BrickConnect() {
  return (
    <>
    <TitleImage
      title="Brick Connect"
      image="BC_titleImage.png"
    ></TitleImage>
    <div className="margin">
    <div className="section">
        <InfoBlock 
          title="Background"
          text="Town municipalities are notorious for having “bad” websites and The Borough of Raritan is no exception. There have been many complaints by the community that it is incredibly difficult to find things on the site. The challenge in this case, is to map out the current information architecture and propose a new structure that is both visually appealing and makes information easily accessible."
        />
      </div>
      <div className="section">
        <InfoBlockOverview 
          title="Overview"
          body="RewardPass is a fictional application that serves as a loyalty program to encourage users to support local businesses by receiving rewards coupons. This is a class project I did for the course Managment of Technological Organizations during my time as an undergraduate student. I was one of the team members who helped come up with this solution to the on-going impact COVID-19 has on small businesses. I am personally responsible for the design of this application using UI/UX principles and ideation based off of the project research."
          subtitle1="Duration of project"
          text1="6 months"
          subtitle2="Tools used"
          text2="Figma, Marvel"
          subtitle3="Methods used"
          text3="Constructing problem statements, user scenarios, personas, low-fidelity prototypes, user-testing, and high-fidelity prototypes.   "
        />
      </div>
      <div className="section">
        <InfoBlock
          title="Research"
          text="When conducting this research, it has been found that:"
        />
        <img className="caseStudyImage--graphic" src="BC_infographic1.png" alt="3.1: average family size; 65%: households are families" />
        <InfoBlock
          text="After conducting research on the Brick Townships population, it was concluded that there is a high population of families. Whereas, these key findings pointed to a persona hypothesis of parents. This quantitative research on parents in Brick township has made it apparent that there needs to be more emphasis on a product that appeals to this demographic. To get a better understanding of what this demographic feels about the current municipality website, we decided to conduct qualitative research with an ethnographic interview, with a focus group of specific mothers."
        />
        <InfoBlock 
          text="During these interviews of 4 parents in Brick Township, it has been found that:"
        />
        <img className="caseStudyImage--graphic" src="BC_infographic2.png" alt="" />
      </div>
      <div className="section">
        <InfoBlock 
          title="Problem"
          text="Once reflecting on our qualitative and quantative data, we have compiled the interviewer’s thoughts. We then categorized these user goals to create user problem statements."
        />
        <InfoBlockSubtitle 
          subtitle="“Getting families involved in town events is a challenge for large families because they do not have access to.”"
        />
        <InfoBlockSubtitle 
          subtitle="“Keeping up to date with the community is a challenge for working class parents because they do not have time to research different news outlets.”"
        />
        <InfoBlockSubtitle 
        subtitle="“Finding important municipal information is a struggle because Brick Township residents do not have access to a platform that consolidates all information in one place.”"
        />
        <InfoBlock 
          text="During these interviews of 4 parents in Brick Township, it has been found that:"
        />
        <img className="caseStudyImage--infographic" src="BC_persona.png" alt="" />
      </div>
      <div className="section">
        <InfoBlock 
          title="Early Ideation"
          text="From creating a persona, we then were able to gain insight into the users Visceral, behavioral, and reflective goals when interacting with this product. From there we have curated a user scenario that represents the ideal interaction they would like to have with this product:"
        />
        <InfoBlockSubtitle 
          subtitle="User Type: Mother"
        />
        <InfoBlockSubtitle 
          subtitle="“As a mother, I want to be able to have somewhere where I can view town announcements and alerts, see what events or local activities my children & I might want to attend, keep in touch with town news, and have access to any supplementary information I may need in a dashboard or summary layout, so I don't have to do too much researching or reading accommodate my families busy schedule.”"
        />
        <InfoBlock 
          text="To reflect this user scenario we have I began the process to ideate the application with a low-fidelity prototype."
        />
        <img className="caseStudyImage--infographic" src="BC_prototype1.png" alt="" />
        <img className="caseStudyImage--infographic" src="BC_prototype2.png" alt="" />
        <img className="caseStudyImage--infographic" src="BC_prototype3.png" alt="" />
        <img className="caseStudyImage--infographic" src="BC_prototype4.png" alt="" />
      </div>
      <div className="section">
        <InfoBlock 
          title="Final Solution"
          text="When working through the early ideation and conducting usability testing, there were a few findings that were made in the final prototype on the product. Major highlights from the feedback of users during the usability testing were:"
        />
        <img className="caseStudyImage--graphic" src="BC_infographic3.png" alt="" />
        <img className="caseStudyImage--infographic" src="BC_HighFidelity.png" alt=""/>
      </div>
      <div className="section">
        <InfoBlock 
          title="Learnings"
          text="Upon going through the process of ideation to design for this project, it has led me to look at other government of municipal products. During the COVID-19 crisis emergency, 'e-government' websites (and affiliated social media accounts) have become vital, beneficial, and authoritative sources of information. Before COVID-19, these types of products were of little importance to people were able to live their lives while rarely interacting directly with the government. Given such, it has made me realize government or municipal products that support the needs of the community are of great importance and effort."
        />
      </div>
    </div>
    </>
  );
}

function RewardPass() {
  return (
    <>
    <TitleImage
    title="Reward Pass"
    image="RP_TitleImage.png"
    ></TitleImage>
    <div className="margin">
      <div className="section">
        <InfoBlock 
          title="Background"
          text="Due to the on-going impact COVID-19 has on small businesses and working-class consumers, shopping locally is harder than ever. Consumers are choosing to spend their money at larger corporations, rather than local businesses due to their competitive pricing. This poses a huge threat to our economy, as local businesses are experiencing economic hardship and are at risk of closing, if they have not already."
        />
      </div>
      <div className="section">
        <InfoBlockOverview 
          title= "Overview"
          body= "RewardPass is a fictional application that serves as a loyalty program to encourage users to support local businesses by receiving rewards coupons. This is a class project I did for the course Managment of Technological Organizations during my time as an undergraduate student. I was one of the team members who helped come up with this solution to the on-going impact COVID-19 has on small businesses. I am personally responsible for the design of this application using UI/UX principles and ideation based off of the project research."
          subtitle1= "Duration of project"
          text1= "4 months"
          subtitle2= "Tools Used"
          text2= "Figma, Adobe XD"
          subtitle3= "Methods used"
          text3= "Lorem Ipsum"
        />
      </div>
      <div className="section">
        <InfoBlockSubtitle 
          title="Problem"
          subtitle="“Supporting local businesses and helping them survive is a challenge for its local communities because of the COVID-19 economic impact and competitive prices from large corporations.”"
        />
      </div>
      <div className= "section">
        <InfoBlockSubtitle 
          title="Solution"
          subtitle="Incentivize shopping locally."
          text="A proposed solution to this problem is finding a way to incentivize shopping locally. With technology and smartphones dominating our society, we saw creating an application as technological solution to this current problem."
        />
        <img className="caseStudyImage--graphic" src="RP_infographic1.png" alt="" />
      </div>
      <div className="section">
        <InfoBlock 
          title="Research"
          text="Driving factors that led to the pursuit of an all-in-one and easy to use application that benefits local customers as well as businesses, are:"
        />
        <img className="caseStudyImage--infographic" src="RP_infographic2.png" alt="" />
        <InfoBlock 
          text="From the initial findings in the market research, we then curated a Magic Quadrant and SWOT analysis to further identify the market and research what is missing within the consumer market of loyalty programs."
        />
        <img className="caseStudyImage--infographic" src="RP_infographic3.png" alt="" />
        <img className="caseStudyImage--infographic" src="RP_infographic4.png" alt="" />
      </div>
      <div className="section">
        <InfoBlockSubtitle 
          title="Insights"
          subtitle="An all-in-One Easy to use application that benefits both Customers and Business Owners in local areas."
          text="Based on the market research, we compiled these findings into personas that represent the needs and wants of the main types of users that will interact with this application."
        />
        <img className="caseStudyImage--infographic" src="RP_persona.png" alt="" />
        <InfoBlock 
          text="In order to fully ideate a logical and comprehensive understanding of a fully-working application, we proposed potential ethics, privacy, and security problems the consumer may have with solutions to these concerns."
        />
        <img className="caseStudyImage--infographic" src="RP_infographic5.png" alt="" />
      </div>
      <div>
        <InfoBlock 
          title="Concept"
          text="After taking all research and Insights into consideration, I began to ideate and come up with a solution flow diagram of how a user will interact to successfully track, redeem, and explore current and future rewards."
        />
        <img className="caseStudyImage--graphic" src="RP_infographic6.png" alt="" />
        <InfoBlock 
          text="Upon the creation of the solution flow diagram, low-fidelity prototypes were constructed; combining satisfactory UI elements and innovative interfaces from unsatisfactory UI from competitors."
        />
        <img className="caseStudyImage--infographic" src="RP_prototype1.png" alt="" />
        <img className="caseStudyImage--infographic" src="RP_prototype2.png" alt="" />
        <img className="caseStudyImage--infographic" src="RP_prototype3.png" alt="" />
      </div>
      <div>
        <InfoBlockSubtitle 
          title="Design"
          subtitle="The final product."
          text="Based on the market research, we compiled these findings into personas that represent the needs and wants of the main types of users that will interact with this application"
        />
        <img className="caseStudyImage--infographic" src="RP_HighFidelity.png" alt="" />
      </div>
    </div>
    </>
  );
}