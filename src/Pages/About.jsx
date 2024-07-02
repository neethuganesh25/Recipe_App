import React from 'react'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    
   <>
   <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-4">
        <img  className='border shadow rounded-4 mt-5' src="https://images.unsplash.com/photo-1566312235254-d4b52d8fb053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D"
        height={300} alt="" />
         </div>
        <div className="col-md-5">
            <h3 className='mt-5 text-danger  text-center'>Discover More About Us</h3> 
            <p className='text-dark ms-3 mt-3 ' style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae molestiae, eos voluptate hic delectus, ratione, amet ullam omnis aliquid quae harum nobis reprehenderit asperiores quas voluptatem modi dolorum culpa sequi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae molestiae, eos voluptate hic delectus, ratione, amet ullam omnis aliquid quae harum nobis reprehenderit asperiores quas voluptatem modi dolorum culpa sequi?</p>
            <button className='btn btn-dark mt-3 ms-3 w-25'>Lets Explore</button>
            </div>
    <div className="col-md-2"></div>
    </div>
    <div className="row">
        
         <div className="col-md-2"></div>
            <div className="col-md-3">
            <Card className='mt-5 ' style={{ width: '80%' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1609742022736-46c49c147da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXMlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3">
            <Card className='mt-5 ' style={{ width: '80%' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/08/30/10/22/plum-cake-3641833_640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3">
            <Card className='mt-5' style={{ width: '80%' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/06/30/20/55/mushrooms-2459679_640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            
            
        </div>

        
        <div className="col-md-1"></div>
    
   
   </>
  )
}

export default About