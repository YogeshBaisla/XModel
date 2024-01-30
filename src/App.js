import "./App.css"
import {useState} from 'react'
function App() {
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    phone:"",
    dob:""
  })
  const makeFormVisible = ()=>{
    let formDiv = document.getElementsByClassName("modal")[0]
    formDiv.style.display = "flex"
  }
  const formHandle = (e)=>{
    e.preventDefault()
    if(e.target[2].value.length < 10){
      alert("Invalid phone number. Please enter a 10-digit phone number.")
    }
    else if(new Date(e.target[3].value) > new Date()){
      alert("Invalid date of birth. Date of birth cannot be in the future.")
    }
    else{setFormData({
      username:"",
      email:"",
      phone:"",
      dob:""
    })}
  }
  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button className="buttonStyle" onClick={makeFormVisible}>Open Form</button>
      <div className="modal">
      <h1>Fill Details</h1>
      <form className="modal-content" onSubmit={formHandle}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" className="inputFields" value={formData.username} onChange={(e)=>{setFormData(prevState => ({
      ...prevState,
      ['username']: e.target.value
    }))}} />
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" className="inputFields" value={formData.email} onChange={(e)=>{setFormData(prevState => ({
      ...prevState,
      ['email']: e.target.value
    }))}} required/>
        <label htmlFor="phone">Phone Number:</label>
        <input id="phone" type="number" className="inputFields" value={formData.phone} onChange={(e)=>{setFormData(prevState => ({
      ...prevState,
      ['phone']: e.target.value
    }))}} required/>
        <label htmlFor="dob">Date of Birth:</label>
        <input id="dob" type="date" className="inputFields" value={formData.dob} onChange={(e)=>{setFormData(prevState => ({
      ...prevState,
      ['dob']: e.target.value
    }))}} required/>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;