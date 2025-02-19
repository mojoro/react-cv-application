export default function ResumeEducation({ response }) {
  if (!response) return null;
  const educationResponse = response;
  const parsedResponses = educationResponse.map((entry, index) => (
    <div className="education-entry" key={index}>
      <h1>{entry.educationName}</h1>
      <h1>{entry.degree}</h1>
      <h1>{entry.educationDateStart}</h1>
      <h1>{entry.educationDateEnd}</h1>
    </div>
  ));
  return <div className="education-display">{parsedResponses}</div>;
}
