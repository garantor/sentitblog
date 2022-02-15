
import { Form } from 'react-bootstrap'
import MainButton from './Button'
import { useState } from 'react'



function SignupForm() {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')


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
        console.log("Found")
    event.preventDefault();
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    }

    function SignUpUser(){
        console.log("user signup")
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