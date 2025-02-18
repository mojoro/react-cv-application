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
    <div className="resume-form">
      <form action="submit">
        <ContactInputs handleChange={handleContactChange}></ContactInputs>
        <EducationInputs handleChange={handleEducationChange}></EducationInputs>
        <WorkInputs handleChange={handleWorkChange}></WorkInputs>
      </form>
    </div>
  );
}
