import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [contactResponse, setContactResponse] = useState({
    name: "Jim Jimmyson",
    email: "jimjimmyson@gmail.com",
    phone: "+58 399 493 3994",
  });
  const [educationResponse, setEducationResponse] = useState([
    {
      educationName: "Cambridge",
      degree: "Business",
      educationDateStart: "then",
      educationDateEnd: "past",
    },
  ]);
  const [workResponse, setWorkResponse] = useState([
    {
      workName: "Generic Company",
      workTitle: "Drone",
      workResponsibilities: ["livin' life for the corpos"],
      workDateStart: "birth",
      workDateEnd: "death",
    },
  ]);

  const stateProps = [contactResponse, educationResponse, workResponse];
  const stateSetters = [
    setContactResponse,
    setEducationResponse,
    setWorkResponse,
  ];
  return (
    <>
      <ResumeForm
        responses={stateProps}
        setResponses={stateSetters}
      ></ResumeForm>
      <ResumePreview responses={stateProps}></ResumePreview>
    </>
  );
}

export default App;
