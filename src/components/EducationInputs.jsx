export default function EducationInputs({ handleChange }) {
  return (
    <div className="input-card education-group">
      <div className="input-group">
        <label htmlFor="educationName">Education Name</label>
        <input name="educationName" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input name="degree" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="educationDateStart">Start Date</label>
        <input name="educationDateStart" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="educationDateEnd">End Date</label>
        <input name="educationDateEnd" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}
