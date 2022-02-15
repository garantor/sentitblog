import { Card} from "react-bootstrap"
import MainButton from "./Button"



function Article({readmore_btn}) {
  return (
    <div className="p-2">
       <Card style={{ width: '25rem', color:"#000"}} className="single-card" >
        <Card.Img variant="top" src="https://picsum.photos/100/50" />
        <Card.Body>
            <Card.Title>
                <small  className="text-muted">
                    Card Section
                </small>
            </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    
        <Card.Body>
            <MainButton variant="success" callback={readmore_btn} btn_title={"READ MORE"} />
        </Card.Body>
        </Card>
    </div>
  )
}

export default Article

