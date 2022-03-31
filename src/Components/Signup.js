
import { Form } from 'react-bootstrap'
import MainButton from './Button'
import { useState } from 'react'
import useFetch from './useFetch'
import axios from 'axios'



function SignupForm() {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [apiReply, setapireply] = useState('')

    
    

    function validateForm() {
    return email.length > 0 && password.length > 0;
  }

    function PasswordChanged(event){
      setPassword(event.target.value)
  }
  //email setter
    function EmailChange(event){
      setEmail(event.target.value)
  }
  function ConfirmPasswordChange(event){
      setConfirmPassword(event.target.value)
  }
    function FormResetHandler(event){
    event.preventDefault();
    window.alert("Form Submitted")
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setapireply('');
    }

    function SignUpUser(){
        console.log("user signup")
        console.log(email, password, confirmPassword)
        axios({
          method: "post",
          url: "http://localhost:5000/users",
          data:{
            email:email,
            password:password
          }
          
        }).then((response) => { setapireply(response.data);
        })


    console.log(apiReply)
    
    }

  return (
     <div className="Login">
      
 <Form className='Login' onSubmit={FormResetHandler}>
  <Form.Group className='p-2' size="lg" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={email} required={true} placeholder="Enter email" autoFocus onChange={EmailChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className='p-2' size="lg"  controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required={true} value={password} onChange={PasswordChanged} />
  </Form.Group>

  <Form.Group className='p-2' size="lg"  controlId="confirmformBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" required={true} value={confirmPassword} onChange={ConfirmPasswordChange} />
  </Form.Group>
  
  <MainButton variant="primary" block-size="lg" btn_title={"Submit"} callback={SignUpUser} disabled={!validateForm()} />
</Form>
</div>
  )
}

export default SignupForm;