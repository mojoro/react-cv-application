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
          <h1 className="section-header">
            {hasContent(educationResponse) ? "Education" : null}
          </h1>
          <ResumeEducation response={educationResponse}></ResumeEducation>
          <h1 className="section-header">
            {hasContent(workResponse) ? "Professional Experience" : null}
          </h1>
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
