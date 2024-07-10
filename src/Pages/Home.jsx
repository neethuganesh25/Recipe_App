import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
function Home() {
  const Url = window.location.href;
  return (
    <>
    
     <Header/>
    <section id='home'>
    <div className="row mb-5">
      <div className="col-md-1"></div>
      <div className="col-md-5 mt-5">
        <h1 className='mt-5 fs-1 fw-bold'>Huge Selection of Delicios Recipes</h1>
        <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique quidem adipisci repudiandae libero necessitatibus sunt perspiciatis modi. Esse blanditiis incidunt repellendus sequi illo deserunt iure quisquam vitae explicabo aliquid!</p>
        <div className='d-flex mt-5'>
         <Link to={'/recipes'}><Button variant="dark w-25" >Explore Latest</Button></Link>
        <Button variant="outline-dark w-25 ms-3 ">View Random</Button>{' '}
        </div>
      </div>
      <div className="col-md-5 mt-5 ">
        <img className='shadow rounded'  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" alt="no image" width={'90%'} height={'400px'} />
      </div>
      <div className="col-md-1"></div>
    </div>



    <div className="row w-100 mt-5">
    <div className="col-md-1"></div>
    <div className="col-md-10 d-flex">
    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg" />
      <Card.Body>
        <Card.Title>Thai</Card.Title>
        
      </Card.Body>
    </Card>

    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://nypost.com/wp-content/uploads/sites/2/2016/08/burger2.jpg?quality=90&strip=all&w=1328" />
      <Card.Body>
        <Card.Title>American</Card.Title>
      </Card.Body>
    </Card>

    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://wallpaperaccess.com/full/1400970.jpg" />
      <Card.Body>
        <Card.Title>Chinese</Card.Title>
      </Card.Body>
    </Card>

    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://blog.amigofoods.com/wp-content/uploads/2020/12/mexican-food-enchiladas.jpg" />
      <Card.Body>
        <Card.Title>Mexican</Card.Title>
      </Card.Body>
    </Card>

    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://theplanetd.com/images/popular-indian-dishes-cuisine.jpg" />
      <Card.Body>
        <Card.Title>Indian</Card.Title>
      </Card.Body>
    </Card>

    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://blog.souqfann.com/wp-content/uploads/2021/09/AnyConv.com__kab.jpg" />
      <Card.Body>
        <Card.Title>Arabian</Card.Title>
      </Card.Body>
    </Card>
    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg" />
      <Card.Body>
        <Card.Title>Japanese</Card.Title>
      </Card.Body>
    </Card>
    <Card className='border-0 ms-3' style={{ width: '300px',height:'200px' }}>
      <Card.Img variant="top" src="https://gumlet.assettype.com/knocksense/2022-04/64e9f6e3-be85-4d59-8c8a-412d7a3679c3/sp1.webp?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" />
      <Card.Body>
        <Card.Title>Italian</Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-1"></div>
    </div>


    <div className="row w-100">
    <h3 style={{marginLeft:'8%'}}>Latest Recipes</h3>
      <div className="col-md-1"></div>
      <div className="col-md-10 d-flex">
        
      <Card className='mt-4 shadow' style={{ width: '350px', height:'350px'}}>
      <Card.Img variant="top" src="https://www.eatingthaifood.com/wp-content/uploads/2017/05/thai-cashew-chicken-recipe-1024x683.jpg"  height={'350px'}/>
      <Card.Body>
        <Card.Title>Lemon Garlic Baked Chicken</Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-around mt-3">
                  <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <TwitterIcon size={25} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                </div>
    </Card>


    <Card className='mt-4 shadow ms-4' style={{ width: '350px' , height:'350px' }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/FxLcVJdNt5o/maxresdefault.jpg"  height={'350px'}/>
      <Card.Body>
        <Card.Title>Lemon Garlic Baked Chicken</Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-around mt-3">
                  <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <TwitterIcon size={25} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                </div>
    </Card>
    <Card className='mt-4 shadow ms-4' style={{ width: '350px', height:'350px'}}>
      <Card.Img variant="top" src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg"  height={'350px'}/>
      <Card.Body>
        <Card.Title>Chinese Fried Noodles</Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-around mt-3">
                  <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <TwitterIcon size={25} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                </div>
    </Card>
    <Card className='mt-4 shadow ms-4' style={{ width: '350px' , height:'350px'}}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0551/3055/4471/files/italian-black-rice-recipes.jpg?v=1719902990"  height={'350px'}/>
      <Card.Body>
        <Card.Title>Italian Eggplant Recipe</Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-around mt-3">
                  <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <TwitterIcon size={25} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                </div>
    </Card>
    
      </div>
      <div className="col-md-1"></div>
    </div>

    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 mt-5 d-flex justify-content-center align-items-center flex-column ">
        <h1 className='text-center'>Publish Your recipe for free</h1>
        <p className='text-center mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <Button variant="dark w-25 my-4 ms-5">Submit Recipe</Button></div>
      <div className="col-md-1"></div>
    </div>
    
    </section>
    <Footer/>
   </>
  )
}

export default Home