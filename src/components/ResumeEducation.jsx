export default function ResumeEducation({ response }) {
  const educationResponse = response;
  return (
    <div className="education-display">
      <h1>{educationResponse[0].educationName}</h1>
      <h1>{educationResponse[0].degree}</h1>
      <h1>{educationResponse[0].educationDateStart}</h1>
      <h1>{educationResponse[0].educationDateEnd}</h1>
    </div>
  );
}
