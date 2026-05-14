import {
  UserImg,
  ContactsSec,
  AchievementsSec,
  SkillsSec,
  TitleNameSec,
  ProfessionalSec,
  EducatinSec,
  WorkExperienceSec,
} from "./CvSections";

function Cv() {
  return (
    <div className="cvSide border-2 w-[50em] h-[55em] flex gap-5">
      <div className="leftCvWrapper flex items-center">
        <div className="leftCv w-50 flex flex-col gap-[8em] items-center justify-evenly">
          <UserImg />
          <ContactsSec />
          <AchievementsSec />
          <SkillsSec />
        </div>
        <div className="linehz border-[1px] h-[90%]"></div>
      </div>
      <div className="rightCv flex flex-col gap-[8em]  justify-between w-full">
        <TitleNameSec />
        <ProfessionalSec />
        <EducatinSec />
        <WorkExperienceSec />
      </div>
    </div>
  );
}

export default Cv;
