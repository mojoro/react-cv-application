export default function ResumePreview(props) {
  const [contactResponse, educationResponse, workResponse] = props.responses;

  return (
    <div className="preview-wrapper">
      <h1>{contactResponse.name}</h1>
      <h1>{contactResponse.email}</h1>
      <h1>{contactResponse.phone}</h1>
      <h1>{educationResponse[0].educationName}</h1>
      <h1>{educationResponse[0].degree}</h1>
      <h1>{educationResponse[0].educationDateStart}</h1>
      <h1>{educationResponse[0].educationDateEnd}</h1>
      <h1>{workResponse[0].workName}</h1>
      <h1>{workResponse[0].workTitle}</h1>
      <h1>{workResponse[0].workResponsibilities}</h1>
      <h1>{workResponse[0].workDateStart}</h1>
      <h1>{workResponse[0].workDateEnd}</h1>
    </div>
  );
}
