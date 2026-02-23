import { useState, type ChangeEvent, type FunctionComponent } from "react"

interface FormProps {
  moviesearch: Function,
}

const Form: FunctionComponent<FormProps> = ({ moviesearch }) => {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (e: ChangeEvent) => {
    setFormData({ ...formData, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value });
  }

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    moviesearch(formData.searchterm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchterm" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form;