export default function ResumePreview (props) {
  const contactResponse = props.responses[0];

  return (
    <h1>{contactResponse.name}</h1>
  )
}