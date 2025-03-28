import { useState } from "react";

export default function EducationInputs({
  handleChange,
  response,
  setResponse,
}) {
  const [editing, setEditing] = useState(true);
  const [responseIndex, setResponseIndex] = useState(0);
  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setResponseIndex(e.target.dataset.key);
    setEditing(true);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newIndex = response.length + 1;
    setResponseIndex(newIndex);
    const newEntry = {
      educationName: "",
      degree: "",
      educationLocation: "",
      educationDateStart: "",
      educationDateEnd: "",
      educationDescription: "",
      responseID: newIndex,
    };
    const responseCopy = response;
    responseCopy.push(newEntry);
    setResponse([...responseCopy]);
    setEditing(true);
  };

  return (
    <div className="input-card education-group">
      {editing ? (
        <EditingInputs
          handleChange={handleChange}
          handleSave={handleSave}
          response={response[responseIndex]}
        ></EditingInputs>
      ) : (
        <SavedInputs
          handleEdit={handleEdit}
          handleAdd={handleAdd}
          response={response[responseIndex]}
        ></SavedInputs>
      )}
    </div>
  );
}

function EditingInputs({ handleChange, handleSave, response }) {
  return (
    <>
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
      <button
        className="save education-button"
        onClick={handleSave}
        data-key={response.responseID}
      >
        Save
      </button>
    </>
  );
}

function SavedInputs({ handleEdit, handleAdd, response }) {
  return (
    <>
      <div className="education-group">
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
        <button className="save" onClick={handleEdit}>
          Edit
        </button>
      </div>
      <button className="save" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
