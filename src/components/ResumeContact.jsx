export default function ResumeContact({ response }) {
  const contactResponse = response;
  return (
    <div className="contact-display">
      <h1>{contactResponse.name}</h1>
      <h1>{contactResponse.email}</h1>
      <h1>{contactResponse.phone}</h1>
    </div>
  );
}
