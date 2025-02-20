import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumeDisplay from "./components/ResumeDisplay";

function App() {
  const [contactResponse, setContactResponse] = useState({
    name: "Jim Jimmyson",
    title: "Full-stack Developer",
    email: "jimjimmyson@gmail.com",
    phone: "+58 399 493 3994",
  });
  const [educationResponse, setEducationResponse] = useState([
    {
      educationName: "Cambridge",
      degree: "Business",
      educationLocation: "Cambridge, MA",
      educationDateStart: "then",
      educationDateEnd: "past",
    },
  ]);
  const [workResponse, setWorkResponse] = useState([
    {
      workName: "Generic Company",
      workTitle: "Drone",
      workLocation: "Earth",
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
      <ResumeDisplay responses={stateProps}></ResumeDisplay>
    </>
  );
}

export default App;
