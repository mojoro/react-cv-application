export default function ResumeEducation({ response }) {
  if (!response) return null;
  const educationResponse = response;
  const parsedResponses = educationResponse.map((entry, index) => (
    <div className="organization-entry" key={index}>
      <div className="info-group">
        <p className="organization-dates">
          {entry.educationDateStart} - {entry.educationDateEnd}
        </p>
        <p className="organization-location">{entry.educationLocation}</p>
      </div>
      <div className="title-group">
        <h2 className="organization-name">{entry.educationName}</h2>
        <h3 className="organization-title">{entry.degree}</h3>
        {entry.educationDescription ? (
          <p className="organization-description">
            {entry.educationDescription}
          </p>
        ) : null}
      </div>
    </div>
  ));
  return <div className="education-display">{parsedResponses}</div>;
}
