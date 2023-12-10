import React from 'react'
import { Container, Row, Col, ListGroupItem, ListGroup } from 'react-bootstrap'
import { RiMapPinLine, RiPhoneLine, RiMailLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'

import logo from '../../resources/images/logo.png'


 const Footer = () =>{
    const date = new Date()

    return(
        <footer className='footer'>
    <Container>
      <Row>
        <Col lg="5">
          <div className='logo'>
            <div className='logo-text'>
            <Link to="/"><img src={logo} alt="A-Z Construction" /></Link>
            </div>
          </div>
          <p className="footer-text mt-4">
          A-Z Construction, founded in 2005, is your premier destination for construction machines and materials. With a rich history of excellence, we provide top-quality products to fuel your building projects.
          </p>
        </Col>
        <Col lg="2">
          <div className="footer-quick-links">
            <h4 className='quick-links-title'>Top Tools and Hardware</h4>
            <ListGroup>
              <ListGroupItem>
                <Link to='/catalog/drill-machines'>Drill machines</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/catalog/electrical-screwdrivers'>Electrical screwdrivers</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/catalog/rechargable-kits'>Rechargable kits</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/catalog/jig-saws'>Jig saws</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/catalog/grinders'>Grinders</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/catalog/hand-tools'>Hand tools</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg="2">
          <div className="footer-quick-links">
            <h4 className='quick-links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Privacy Policy</Link>
              </ListGroupItem>

            </ListGroup>
          </div></Col>
        <Col lg="3">
          <div className="footer-quick-links">
            <h4 className='quick-links-title'>Contact</h4>
            <ListGroup>
              <ListGroupItem>
                <Link to='https://www.google.de/maps/place/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD+%D1%82%D0%B5%D0%B0%D1%82%D1%8A%D1%80/@43.2053677,27.9190711,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x40a45409deccf483:0xfa1028629f9b2d2c!2z0LHRg9C7LiDigJ7QodC70LjQstC90LjRhtCw4oCcIDMzLCA5MDAwINCS0LDRgNC90LAg0KbQtdC90YLRitGALCDQktCw0YDQvdCw!3b1!8m2!3d43.2051301!4d27.9201724!16s%2Fg%2F11j8wczltz!3m5!1s0x40a454084b356443:0x2be0940ce34d436a!8m2!3d43.2053638!4d27.921646!16s%2Fg%2F11j48hdysx?entry=ttu'>
                  <p><RiMapPinLine/>Varna, Bulgaria 9000</p>
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='phone:+359 896 333 666'>
                  <span>< RiPhoneLine/> +359 896 333 666</span>
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='mailto:dimitur.tsankov@gmail.com'>
                  <p ><RiMailLine/> dimitur.tsankov@gmail.com</p>
                </Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg="12">
          <span className='footer_copyright'>Copyright {date.getFullYear()}&copy; developed by Dimitar Tsankov.<span>All rights reserved.</span></span>
        </Col>
      </Row>
    </Container>
  </footer>
    )
}

export default Footer;