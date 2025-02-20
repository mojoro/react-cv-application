export default function ResumeExperience({ response }) {
  if (!response) return null;
  const workResponse = response;
  const parsedResponses = workResponse.map((entry, index) => (
    <div className="organization-entry" key={index}>
      <div className="info-group">
        <p className="organization-dates">
          {entry.workDateStart} - {entry.workDateEnd}
        </p>
        <p className="organization-location">{entry.workLocation}</p>
      </div>
      <div className="title-group">
        <h2 className="organization-name">{entry.workName}</h2>
        <h2 className="organization-title">{entry.workTitle}</h2>
        <p className="organization-description">{entry.workResponsibilities}</p>
      </div>
    </div>
  ));
  return <div className="work-display">{parsedResponses}</div>;
}
