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
    const key = e.target.dataset.key;
    const newResponse = [...educationResponse];
    newResponse[key][inputType] = e.target.value;
    // const newResponse = [
    //   { ...educationResponse[0], [inputType]: e.target.value },
    // ];

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
        <ContactInputs
          handleChange={handleContactChange}
          response={contactResponse}
        ></ContactInputs>
        <EducationInputs
          handleChange={handleEducationChange}
          response={educationResponse}
        ></EducationInputs>
        <WorkInputs
          handleChange={handleWorkChange}
          response={workResponse}
        ></WorkInputs>
      </form>
    </div>
  );
}
