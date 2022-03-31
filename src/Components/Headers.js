import { Navbar, Container, Nav } from 'react-bootstrap'
// import './custom.scss';
import MainButton from './Button'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function Clicked_btn({}){
//   console.log("Header BTN clicked")

//   const someEventHandler = () => {
//        navigate('/login');
// }
// }

function Headers({signup_title, signup_callback, login_title}) {
  
  let navigate = useNavigate();
  return (
  <div>
    
  <Navbar collapseOnSelect expand="lg" bg='success' variant="dark">
  <Container>
  <Navbar.Brand href="/">Sentit Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
      <MainButton variant="outline-light" btn_title={signup_title} callback={() => {
        navigate("/signup");
      }} />
      <MainButton variant="outline-light" callback={() => {
        navigate("/login");
      }} 
      btn_title={login_title}  
      >
      </MainButton>
   
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  )
}

export default Headers