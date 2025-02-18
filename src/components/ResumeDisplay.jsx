import ResumeContact from "./ResumeContact";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

export default function ResumeDisplay(props) {
  const [contactResponse, educationResponse, workResponse] = props.responses;

  return (
    <div className="resume-display">
      <ResumeContact response={contactResponse}></ResumeContact>
      <ResumeEducation response={educationResponse}></ResumeEducation>
      <ResumeExperience response={workResponse}></ResumeExperience>
    </div>
  );
}
