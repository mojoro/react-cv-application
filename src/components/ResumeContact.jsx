export default function ResumeContact({ response }) {
  const contactResponse = response;
  return (
    <div className="contact-display">
      <h1 className="name">{contactResponse.name}</h1>
      <h2 className="title">{contactResponse.title}</h2>
      <p className="email">{contactResponse.email}</p>
      <p className="phone">{contactResponse.phone}</p>
    </div>
  );
}
