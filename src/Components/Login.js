
import { Form } from 'react-bootstrap'
import MainButton from './Button'
import { useState } from 'react'


// Validate form




function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  //password setter
  function PasswordChanged(event){
      setPassword(event.target.value)
  }
  //email setter
    function EmailChange(event){
      setEmail(event.target.value)
  }
  // Call back function
    function LoginUser(event){
    console.log("just trying it out",  event)
    console.log("main value",  email, password)
    }
// reset values
    function FormResetHandler(event){
        console.log("Found")
    event.preventDefault();
    setEmail('');
    setPassword('');
    
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
  
  <MainButton variant="primary" block-size="lg" btn_title={"Submit"} callback={LoginUser} disabled={!email || !password} />
</Form>
</div>
  )
}

export default LoginForm