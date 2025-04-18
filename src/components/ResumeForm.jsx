import ContactInputs from "./ContactInputs";
import EducationInputs from "./EducationInputs";
import WorkInputs from "./WorkInputs";

export default function ResumeForm({ responses, setResponses }) {
  const [contactResponse, educationResponses, workResponses] = responses;
  const [setContactResponse, setEducationResponses, setWorkResponses] =
    setResponses;

  const handleContactChange = (e) => {
    const inputType = e.target.name;
    const newResponse = { ...contactResponse, [inputType]: e.target.value };

    setContactResponse(newResponse);
  };

  const handleEducationChange = (e) => {
    const inputType = e.target.name;
    const key = e.target.dataset.key;
    const newResponse = [...educationResponses];
    newResponse[key][inputType] = e.target.value;

    setEducationResponses(newResponse);
  };

  const handleWorkChange = (e) => {
    const inputType = e.target.name;
    const key = e.target.dataset.key;
    const newResponse = [...workResponses];
    newResponse[key][inputType] = e.target.value;

    setWorkResponses(newResponse);
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
          responses={educationResponses}
          setResponses={setEducationResponses}
        ></EducationInputs>
        <WorkInputs
          handleChange={handleWorkChange}
          responses={workResponses}
          setResponses={setWorkResponses}
        ></WorkInputs>
      </form>
    </div>
  );
}
