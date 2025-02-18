export default function ResumeExperience({ response }) {
  const workResponse = response;
  return (
    <div className="work-display">
      <h1>{workResponse[0].workName}</h1>
      <h1>{workResponse[0].workTitle}</h1>
      <h1>{workResponse[0].workResponsibilities}</h1>
      <h1>{workResponse[0].workDateStart}</h1>
      <h1>{workResponse[0].workDateEnd}</h1>
    </div>
  );
}
