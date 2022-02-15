
import Article from "./Article";
import { CardGroup } from 'react-bootstrap'
function BlogHome() {
  return (
    <div>
     
        {/* <a href='/'> */}
             <div className="container" href='/'>
        <CardGroup>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        </CardGroup>        
        </div>

        {/* </a> */}
        </div>
  )
}

export default BlogHome;