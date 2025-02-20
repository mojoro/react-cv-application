export default function WorkInputs({ handleChange, response }) {
  return (
    <div className="input-card work-group">
      <div className="input-group">
        <label htmlFor="workName">Work Name</label>
        <input
          name="workName"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workName}
          data-key={response[0].responseID}
        />
      </div>
      <div className="input-group">
        <label htmlFor="workTitle">Work Title</label>
        <input
          name="workTitle"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workTitle}
          data-key={response[0].responseID}
        />
      </div>
      <div className="input-group">
        <label htmlFor="location">Location</label>
        <input
          name="location"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workLocation}
          data-key={response[0].responseID}
        />
      </div>
      <div className="input-group">
        <label htmlFor="workResponsibilities">Responsibilities</label>
        <input
          name="workResponsibilities"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workResponsibilities}
          data-key={response[0].responseID}
        />
      </div>
      <div className="input-group">
        <label htmlFor="workDateStart">Start Date</label>
        <input
          name="workDateStart"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workDateStart}
          data-key={response[0].responseID}
        />
      </div>
      <div className="input-group">
        <label htmlFor="workDateEnd">End Date</label>
        <input
          name="workDateEnd"
          type="text"
          onChange={handleChange}
          defaultValue={response[0].workDateEnd}
          data-key={response[0].responseID}
        />
      </div>
    </div>
  );
}
