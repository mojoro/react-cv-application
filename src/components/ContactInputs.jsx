export default function ContactInputs ({handleChange}) {
  return (
    <>
      <input name="name" type="text" onChange={handleChange}/>
      <input name="email" type="text" onChange={handleChange}/>
      <input name="phone" type="text" onChange={handleChange}/>
    </>
  )
}