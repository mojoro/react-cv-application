export default function ContactInputs({ handleChange }) {
  return (
    <div className="input-card contact-group">
      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input name="phone" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}
