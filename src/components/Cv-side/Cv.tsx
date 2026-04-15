import {
  ProfessionalSec,
  ObjectiveSec,
  EducatinSec,
  PersonalInfoSec,
} from "./CvSections";

function Cv() {
  return (
    <div className="cvSide">
      <div className="cv">
        <h1>Curriculum Vitae</h1>
        <ProfessionalSec />
        <ObjectiveSec />
        <EducatinSec />
        <PersonalInfoSec />
      </div>
    </div>
  );
}

export default Cv;
