export default function WorkInputs({ handleChange, responses, setResponses }) {
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
      workName: "",
      workTitle: "",
      workLocation: "",
      workResponsibilities: "",
      workDateStart: "",
      workDateEnd: "",
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
          <label htmlFor="workName">Work Name</label>
          <input
            name="workName"
            type="text"
            onChange={handleChange}
            defaultValue={response.workName}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="workTitle">Work Title</label>
          <input
            name="workTitle"
            type="text"
            onChange={handleChange}
            defaultValue={response.workTitle}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            name="location"
            type="text"
            onChange={handleChange}
            defaultValue={response.workLocation}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="workResponsibilities">Responsibilities</label>
          <input
            name="workResponsibilities"
            type="text"
            onChange={handleChange}
            defaultValue={response.workResponsibilities}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="workDateStart">Start Date</label>
          <input
            name="workDateStart"
            type="text"
            onChange={handleChange}
            defaultValue={response.workDateStart}
            data-key={response.responseID}
          />
        </div>
        <div className="input-group">
          <label htmlFor="workDateEnd">End Date</label>
          <input
            name="workDateEnd"
            type="text"
            onChange={handleChange}
            defaultValue={response.workDateEnd}
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
      <div className="response-wrapper work-group">
        <div className="input-group response-group">
          <h3>Work Name</h3>
          <p>{response.workName}</p>
        </div>
        <div className="input-group response-group">
          <h3>Work Title</h3>
          <p>{response.workTitle}</p>
        </div>
        <div className="input-group response-group">
          <h3>Location</h3>
          <p>{response.workLocation}</p>
        </div>
        <div className="input-group response-group">
          <h3>Responsibilities</h3>
          <p>{response.workResponsibilities}</p>
        </div>
        <div className="input-group response-group">
          <h3>Start Date</h3>
          <p>{response.workDateStart}</p>
        </div>
        <div className="input-group response-group">
          <h3>End Date</h3>
          <p>{response.workDateEnd}</p>
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
