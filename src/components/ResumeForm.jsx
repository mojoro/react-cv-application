import ContactInputs from "./ContactInputs";
import EducationInputs from "./EducationInputs";
import WorkInputs from "./WorkInputs";

export default function ResumeForm({ responses, setResponses }) {
  const [contactResponse, educationResponse, workResponse] = responses;
  const [setContactResponse, setEducationResponse, setWorkResponse] =
    setResponses;

  const handleContactChange = (e) => {
    const inputType = e.target.name;
    const newResponse = { ...contactResponse, [inputType]: e.target.value };

    setContactResponse(newResponse);
  };

  const handleEducationChange = (e) => {
    const inputType = e.target.name;
    const newResponse = [
      { ...educationResponse[0], [inputType]: e.target.value },
    ];

    setEducationResponse(newResponse);
  };

  const handleWorkChange = (e) => {
    const inputType = e.target.name;
    const newResponse = [{ ...workResponse[0], [inputType]: e.target.value }];

    setWorkResponse(newResponse);
  };
  return (
    <div>
      <form action="submit">
        <div className="input-wrapper">
          <ContactInputs handleChange={handleContactChange}></ContactInputs>
        </div>
        <div className="input-wrapper">
          <EducationInputs
            handleChange={handleEducationChange}
          ></EducationInputs>
        </div>
        <div className="input-wrapper">
          <WorkInputs handleChange={handleWorkChange}></WorkInputs>
        </div>
      </form>
    </div>
  );
}
