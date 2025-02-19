export default function ContactInputs({ handleChange, response }) {
  return (
    <div className="input-card contact-group">
      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          defaultValue={response.name}
        />
      </div>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          defaultValue={response.title}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          defaultValue={response.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="text"
          onChange={handleChange}
          defaultValue={response.phone}
        />
      </div>
    </div>
  );
}
