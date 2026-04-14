export function GeneralInfo() {
  return (
    <div className="generalInfoCon">
      <h2>General Information</h2>
      <div className="generalInfoInputs">
        <label htmlFor="username">Name*</label> <br />
        <input type="text" name="username" id="username" />
        <label htmlFor="userAddress">Address*</label> <br />
        <input type="text" name="userAddress" id="userAddress" />
        <label htmlFor="userPhoneNum">Phone Number*</label> <br />
        <input type="text" name="userPhoneNum" id="userPhoneNum" />
        <label htmlFor="userMail">Email Address*</label> <br />
        <input type="text" name="userMail" id="userMail" />
      </div>
    </div>
  );
}

export function Objective() {
  return (
    <div className="objectiveCon">
      <h1>Objective</h1>
      <div className="objectiveInputs">
        <label htmlFor="objectiveArea">Objective*</label>
        <textarea
          name="objectiveArea"
          id="objectiveArea"
          placeholder="Describe your goal or objective here"
        ></textarea>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <div className="educationCon">
      <h1>Education</h1>
      <div className="edInputs">
        <label htmlFor="edLevel">Education Level*</label> <br />
        <input type="text" name="edLevel" id="edLevel" />
        <label htmlFor="schoolName">School Name*</label> <br />
        <input type="text" name="schoolName" id="schoolName" />
        <label htmlFor="schoolAddress">School Address*</label> <br />
        <input type="text" name="schoolAddress" id="schoolAddress" />
        <label htmlFor="schoolYear">School Year*</label> <br />
        <input type="text" name="schoolYear" id="schoolYear" />
        <label htmlFor="edStatus">Educational Status*</label> <br />
        <select name="edStatus" id="edStatus">
          <option value="">Select your Education Status</option>
          <option value="graduate">Graduate</option>
          <option value="lastYear">Last Attended Year</option>
          <option value="studying">Currently Studying</option>
        </select>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div className="experienceCon">
      <h1>Experience</h1>
      <div className="experienceInputs">
        <label htmlFor="experience">Experience*</label> <br />
        <textarea
          name="experience"
          id="experience"
          placeholder="e.g. Worked at a (Company name)..."
        ></textarea>
      </div>
    </div>
  );
}

export function UploadPicture() {
  return (
    <div className="uploadPictureCon">
      <button>Upload Picture*</button>
      <p>Macimum size is 2MB</p>
      <p>File types: JPG or PNG</p>
    </div>
  );
}

export function DownloadCv() {
  return (
    <div className="downloadCvCon">
      <h1>Download CV</h1>
      <div className="downloadCvInputs">
        <label htmlFor="exportCV">Export CV*</label> <br />
        <button id="exportCV"></button>
      </div>
    </div>
  );
}
