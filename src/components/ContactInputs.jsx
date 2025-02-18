export default function ContactInputs({ handleChange, response }) {
  return (
    <div className="input-card contact-group">
      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={response.name}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          value={response.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="text"
          onChange={handleChange}
          value={response.phone}
        />
      </div>
    </div>
  );
}
