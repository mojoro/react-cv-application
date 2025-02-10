import { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

function App() { 
    const [contactResponse, setContactResponse] = useState({name: '', email: '', phone: ''});
    const [educationResponse, setEducationResponse] = useState([{educationName: '', degree: '', educationDateStart: '', educationDateEnd: ''}]);
    const [workResponse, setWorkResponse] = useState([{employer: '', title: '', responsibilities: [''], workDateStart: '', workDateEnd: ''}])
    
    const stateProps = [contactResponse, educationResponse, workResponse];
    const stateSetters = [setContactResponse, setEducationResponse, setWorkResponse];
  return (
    <>
      <ResumeForm responses={stateProps} setResponses={stateSetters}></ResumeForm>
      <ResumePreview responses={stateProps}></ResumePreview>
    </>
  )
}

export default App
