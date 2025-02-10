export default function ResumeForm({responses, setResponses}) {
  const contactResponse = responses[0];
  const setContactResponse = setResponses[0];
  const educationResponse = responses[1];
  const setEducationResponse = setResponses[1];
  const workResponse = responses[2];
  const setWorkResponse = setResponses[2]

  const handleContactChange = (e) => {
    const inputType = e.target.name;
    const newResponse = {...contactResponse, [inputType]: e.target.value};
    
    setContactResponse(newResponse);
  }

  const handleEducationChange = (e) => {
    const inputType = e.target.name;
    const newResponse = [{...educationResponse[0], [inputType]: e.target.value}];
    
    setEducationResponse(newResponse);
  }

  const handleWorkChange = (e) => {
    const inputType = e.target.name;
    const newResponse = [{...workResponse[0], [inputType]: e.target.value}];
    
    setWorkResponse(newResponse);
  }
  return(
    <>
      <form action="submit">
        <input name="name" type="text" onChange={handleContactChange}/>
        <input name="email" type="text" onChange={handleContactChange}/>
        <input name="phone" type="text" onChange={handleContactChange}/>
        <input name="educationName" type="text" onChange={handleEducationChange}/>
        <input name="degree" type="text" onChange={handleEducationChange}/>
        <input name="educationDateStart" type="text" onChange={handleEducationChange}/>
        <input name="educationDateEnd" type="text" onChange={handleEducationChange}/>
        <input name="workName" type="text" onChange={handleWorkChange}/>
        <input name="workTitle" type="text" onChange={handleWorkChange}/>
        <input name="workResponsibilities" type="text" onChange={handleWorkChange}/>
        <input name="workDateStart" type="text" onChange={handleWorkChange}/>
        <input name="workDateEnd" type="text" onChange={handleWorkChange}/>
      </form>
    </>
  )
}