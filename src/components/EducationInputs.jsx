export default function EducationInputs({ handleChange }) {
  return (
    <>
      <input name="educationName" type="text" onChange={handleChange} />
      <input name="degree" type="text" onChange={handleChange} />
      <input name="educationDateStart" type="text" onChange={handleChange} />
      <input name="educationDateEnd" type="text" onChange={handleChange} />
    </>
  );
}
