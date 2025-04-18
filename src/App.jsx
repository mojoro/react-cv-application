import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import ResumeForm from "./components/ResumeForm";
import ResumeDisplay from "./components/ResumeDisplay";

function App() {
  const [contactResponse, setContactResponse] = useState({
    name: "Jim Jimmyson",
    title: "Full-stack Developer",
    email: "jimjimmyson@gmail.com",
    phone: "+58 399 493 3994",
  });
  const [educationResponses, setEducationResponses] = useState([
    {
      educationName: "Cambridge",
      degree: "Business",
      educationLocation: "Cambridge, MA",
      educationDateStart: "then",
      educationDateEnd: "past",
      educationDescription: "I am very good at business.",
      responseID: 0,
      editing: false,
    },
  ]);
  const [workResponses, setWorkResponses] = useState([
    {
      workName: "Generic Company",
      workTitle: "Drone",
      workLocation: "Earth",
      workResponsibilities: ["livin' life for the corpos"],
      workDateStart: "birth",
      workDateEnd: "death",
      responseID: 0,
    },
  ]);

  const stateProps = [contactResponse, educationResponses, workResponses];
  const stateSetters = [
    setContactResponse,
    setEducationResponses,
    setWorkResponses,
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
