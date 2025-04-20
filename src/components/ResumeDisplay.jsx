import ResumeContact from "./ResumeContact";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

export default function ResumeDisplay(props) {
  const [contactResponse, educationResponse, workResponse] = props.responses;

  return (
    <div className="preview-wrapper">
      <div className="resume-display">
        <ResumeContact response={contactResponse}></ResumeContact>
        <div className="resume-body">
          {hasContent(educationResponse) ? (
            <h1 className="section-header">Education</h1>
          ) : null}

          <ResumeEducation response={educationResponse}></ResumeEducation>

          {hasContent(workResponse) ? (
            <h1 className="section-header">Professional Experience</h1>
          ) : null}

          <ResumeExperience response={workResponse}></ResumeExperience>
        </div>
      </div>
    </div>
  );
}

function hasContent(responseArray) {
  for (const response of responseArray) {
    for (const key in response) {
      if (response[key]) {
        return true;
      }
    }
  }
  return false;
}
