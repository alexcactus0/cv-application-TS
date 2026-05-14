import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import address from "../../assets/address.svg";

export function UserImg() {
  return (
    <div className="userImg border-2 rounded-[50%] h-24 w-24">Img here</div>
  );
}

export function ContactsSec() {
  return (
    <div className="contactInfo">
      <h1>CONTACTS</h1>
      <div className="phnumber">
        <img src={phone} alt="Telephone Icon" />
        <p>Number</p>
      </div>
      <div className="emailInfo">
        <img src={email} alt="Email Icon" />
        <p>Email</p>
      </div>
      <div className="addressInfo">
        <img src={address} alt="Address Icon" />
        <p>Address</p>
      </div>
      <div className="lineh border-b-2 h-6"></div>
    </div>
  );
}

export function AchievementsSec() {
  return (
    <div className="achievementsSe">
      <h1>ACHIEVEMENTS</h1>
      <div className="achievInfo">
        <p>first degree here</p>
        <p>second one here</p>
      </div>
    </div>
  );
}

export function SkillsSec() {
  return (
    <div className="skillsS">
      <h1>SKILLS</h1>
      <div className="skillsInfo">
        <p>first skill here</p>
        <p>second skill here</p>
        <p>third skill here</p>
      </div>
    </div>
  );
}

// ----------------------------- Other Side of the CV

export function TitleNameSec() {
  return (
    <section className="titleName">
      <h1>Your Title Name Here</h1>
      <div className="linehz border-[1px]"></div>
    </section>
  );
}

export function ProfessionalSec() {
  return (
    <section className="professionalSection">
      <p>Your Professional Info here....</p>
      <div className="linehz border-[1px]"></div>
    </section>
  );
}

export function EducatinSec() {
  return (
    <section className="educationSection">
      <h1>EDUCATION</h1>
      <div className="educationParts"></div>
      <div className="linehz border-[1px]"></div>
    </section>
  );
}

export function WorkExperienceSec() {
  return (
    <section className="workExperience">
      <h1>WORK EXPERIENCE</h1>
      <div className="workExpInfo">
        <p></p>
      </div>
    </section>
  );
}
