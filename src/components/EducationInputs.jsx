export default function EducationInputs({
  handleChange,
  responses,
  setResponses,
}) {
  const toggleEdit = (e) => {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key, 10);
    const responseCopy = { ...responses[key] };
    responseCopy.editing = !responseCopy.editing;

    const responsesCopy = [...responses];
    responsesCopy[key] = responseCopy;
    setResponses(responsesCopy);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newIndex = responses.length;
    const newEntry = {
      educationName: "",
      degree: "",
      educationLocation: "",
      educationDateStart: "",
      educationDateEnd: "",
      educationDescription: "",
      responseID: newIndex,
      editing: true,
    };
    const responseCopy = responses;
    responseCopy.push(newEntry);
    setResponses([...responseCopy]);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key, 10);
    const responsesCopy = [...responses];
    responsesCopy.splice(key, 1);
    responsesCopy.forEach((response, index) => {
      response.responseID = index;
    });
    setResponses(responsesCopy);
  };

  return (
    <div className="input-card">
      {responses.map((response, index) =>
        response.editing ? (
          <EditingInputs
            key={index}
            handleChange={handleChange}
            toggleEdit={toggleEdit}
            response={response}
          />
        ) : (
          <SavedInputs
            key={index}
            toggleEdit={toggleEdit}
            handleDelete={handleDelete}
            response={response}
          />
        )
      )}
      <button className="save" onClick={handleAdd}>
        <i onClick={handleAdd} className="fas fa-plus"></i>
      </button>
    </div>
  );
}

function EditingInputs({ handleChange, toggleEdit, response }) {
  return (
    <>
      <div className="response-wrapper">
        <div className="input-group">
          <label htmlFor="educationName">Education Name</label>
          <input
            name="educationName"
            type="text"
            onChange={handleChange}
            defaultValue={response.educationName}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="degree">Degree</label>
          <input
            name="degree"
            type="text"
            onChange={handleChange}
            defaultValue={response.degree}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            name="location"
            type="text"
            onChange={handleChange}
            defaultValue={response.educationLocation}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="educationDateStart">Start Date</label>
          <input
            name="educationDateStart"
            type="text"
            onChange={handleChange}
            defaultValue={response.educationDateStart}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="educationDateEnd">End Date</label>
          <input
            name="educationDateEnd"
            type="text"
            onChange={handleChange}
            defaultValue={response.educationDateEnd}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="educationDescription">Description (optional)</label>
          <input
            name="educationDescription"
            type="text"
            onChange={handleChange}
            defaultValue={response.educationDescription}
            data-key={response.responseID}
          />
        </div>
        <div className="controls">
          <button
            className="save education-button"
            onClick={toggleEdit}
            data-key={response.responseID}
          >
            <i
              className="fas fa-floppy-disk"
              onClick={toggleEdit}
              data-key={response.responseID}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

function SavedInputs({ toggleEdit, handleDelete, response }) {
  return (
    <>
      <div className="response-wrapper education-group">
        <div className="input-group response-group">
          <h3>Education Name</h3>
          <p>{response.educationName}</p>
        </div>
        <div className="input-group response-group">
          <h3>Degree</h3>
          <p>{response.degree}</p>
        </div>
        <div className="input-group response-group">
          <h3>Location</h3>
          <p>{response.educationLocation}</p>
        </div>
        <div className="input-group response-group">
          <h3>Start Date</h3>
          <p>{response.educationDateStart}</p>
        </div>
        <div className="input-group response-group">
          <h3>End Date</h3>
          <p>{response.educationDateEnd}</p>
        </div>
        <div className="input-group response-group">
          <h3>Description (optional)</h3>
          <p>{response.educationDescription}</p>
        </div>
        <div className="controls">
          <button
            className="save"
            onClick={toggleEdit}
            data-key={response.responseID}
          >
            <i
              className="fas fa-pen"
              onClick={toggleEdit}
              data-key={response.responseID}
            ></i>
          </button>
          <button
            className="save"
            onClick={handleDelete}
            data-key={response.responseID}
          >
            <i
              className="fas fa-xmark"
              onClick={handleDelete}
              data-key={response.responseID}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}
