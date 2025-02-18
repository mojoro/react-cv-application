import ResumeDisplay from "./ResumeDisplay";

export default function ResumePreview(props) {
  return (
    <div className="preview-wrapper">
      <ResumeDisplay responses={props.responses}></ResumeDisplay>
    </div>
  );
}
