export default function WorkInputs({ handleChange }) {
  return (
    <div className="input-card work-group">
      <div className="input-group">
        <label htmlFor="workName">Work Name</label>
        <input name="workName" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="workTitle">Work Title</label>
        <input name="workTitle" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="workResponsibilities">Responsibilities</label>
        <input
          name="workResponsibilities"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="workDateStart">Start Date</label>
        <input name="workDateStart" type="text" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label htmlFor="workDateEnd">End Date</label>
        <input name="workDateEnd" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}
