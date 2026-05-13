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
    <div className="cvSide flex gap-5">
      <div className="leftCv w-40 flex flex-col gap-[8em] border-2 align-center pt-10 pb-10">
        <UserImg />
        <ContactsSec />
        <AchievementsSec />
        <SkillsSec />
      </div>
      <div className="rightCv flex flex-col gap-[8em] pt-10 pb-10 justify-between">
        <TitleNameSec />
        <ProfessionalSec />
        <EducatinSec />
        <WorkExperienceSec />
      </div>
    </div>
  );
}

export default Cv;
