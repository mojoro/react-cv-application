export default function WorkInputs({ handleChange }) {
  return (
    <>
      <input name="workName" type="text" onChange={handleChange} />
      <input name="workTitle" type="text" onChange={handleChange} />
      <input name="workResponsibilities" type="text" onChange={handleChange} />
      <input name="workDateStart" type="text" onChange={handleChange} />
      <input name="workDateEnd" type="text" onChange={handleChange} />
    </>
  );
}
