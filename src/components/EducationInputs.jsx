export default function EducationInputs({ handleChange, response }) {
  return (
    <div className="input-card education-group">
      <div className="input-group">
        <label htmlFor="educationName">Education Name</label>
        <input
          name="educationName"
          type="text"
          onChange={handleChange}
          value={response[0].educationName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          name="degree"
          type="text"
          onChange={handleChange}
          value={response[0].degree}
        />
      </div>
      <div className="input-group">
        <label htmlFor="educationDateStart">Start Date</label>
        <input
          name="educationDateStart"
          type="text"
          onChange={handleChange}
          value={response[0].educationDateStart}
        />
      </div>
      <div className="input-group">
        <label htmlFor="educationDateEnd">End Date</label>
        <input
          name="educationDateEnd"
          type="text"
          onChange={handleChange}
          value={response[0].educationDateEnd}
        />
      </div>
    </div>
  );
}
