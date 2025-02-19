export default function ResumeExperience({ response }) {
  if (!response) return null;
  const workResponse = response;
  const parsedResponses = workResponse.map((entry, index) => (
    <div className="work-entry" key={index}>
      <h1>{entry.workName}</h1>
      <h1>{entry.workTitle}</h1>
      <h1>{entry.workResponsibilities}</h1>
      <h1>{entry.workDateStart}</h1>
      <h1>{entry.workDateEnd}</h1>
    </div>
  ));
  return <div className="work-display">{parsedResponses}</div>;
}
