import { Button } from "react-bootstrap";



function MainButton({btn_title, callback}) {
  return (
    <>
    <Button type="submit" variant="success" onClick={callback} >
        {btn_title}
    </Button>
    </>
  )
}

export default MainButton