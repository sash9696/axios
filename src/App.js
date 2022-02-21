import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


import axios from "axios";

function App() {
  const [details, setDetails] = useState([])
  
  console.log(details)

    const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/");
    setDetails(data.results[0])
    


  }
  useEffect(()=> {
    fetchDetails()
    
  }, [])
  

  return (
    // <Container fluid className="p-4 bg-primary App">
    //   <Row>
    //     <Col md={4} className="offset-md-4 mt-4">
    //       <Card>
    //         <CardBody className="text-center">
    //           <img
    //             height="150"
    //             width="150"
    //             className="rounded-circle img-thumbnail border-danger"
    //             src=" "
    //           />
    //           <CardTitle className="text-primary">
    //             <h1>
    //               <span className="pr-2">title </span>
    //               <span>first name</span>
    //               <span>last name</span>
    //             </h1>
    //           </CardTitle>
    //           <CardText>
    //             <FaMapMarkedAlt />
    //              location
    //             <p>phone</p>
    //           </CardText>
    //         </CardBody>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="p-4 bg-primary App">
      <Row>
      <Col md={4} className="offset-md-4 mt-4">
        <Card>
          <CardBody className="text-center">
            <img
                  height="150"
                  width="150"
                  className="rounded-circle img-thumbnail border-danger"
                  src= {details.picture?.large}
                />
                <CardTitle className="text-primary">
                  <h1>
                    <span className="pr-2">{details.name?.title} </span>
                    <span>{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                  </h1>
               </CardTitle>
                    <CardText>
                  <FaMapMarkedAlt />
                  {details.location?.city}
                  <p>{details?.phone}</p>
                  </CardText>
          </CardBody>

        </Card>


      </Col>
      </Row>

    </Container>
  );
}
export default App;