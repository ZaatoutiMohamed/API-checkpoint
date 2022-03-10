import {Card , Button} from "react-bootstrap";
import Img from "./userIcon.jpg";
const  User =({el})=>{
    return (
        
            <div >
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>
        Name: {el.name}
    </Card.Title>
    
        <li> UserName: {el.username} </li>
        <li> email : {el.email}</li>
        <li> Adress : {el.address.street},{el.address.suite},{el.address.city}.</li>
        <li> Phone number : {el.phone}</li>

  </Card.Body>
</Card>
            </div>
        
    )
};
 export default User