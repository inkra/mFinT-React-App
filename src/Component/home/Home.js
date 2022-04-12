import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './home.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaRobot, FaHandHoldingHeart } from 'react-icons/fa';
import { MdAccountBalance, MdQrCode2 } from 'react-icons/md';
import { Carousel } from 'react-bootstrap'


class Home extends React.Component {
    
    render(){
        return(
            <div className='home'>
                <div className='welcome'>
                    <p className='hello'>Hello,</p>
                    <h1>Blaze <img src='https://emojigraph.org/media/apple/fire_1f525.png' width={40}></img></h1> 
                </div>
                <img className='profile' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/d07bca98931623.5ee79b6a8fa55.jpg' width={60}></img>

                <Carousel className='banner'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>QR mFinT</h3>
                        <p>Digital payment transaction features.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Robobot</h3>
                        <p>Learn more about financial literacy.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Pay Later</h3>
                        <p>Loans when the situation is urgent.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                

                <h3>Feature</h3><h5>Show All</h5><br></br>
                <div className="row list-feature">
                    <div className="col-3">
                        <div className='feature-box DDE4FF'>
                            <div className='img-icon'><MdAccountBalance className='icon' size={25} /></div>
                            <h6>BAFinT</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='feature-box FCDDFF'>
                            <div className='img-icon'><FaRobot className='icon' size={25} /></div>
                            <h6>Robobot</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='feature-box D9E4F9'>
                            <div className='img-icon'><FaHandHoldingHeart className='icon' size={22} /></div>
                            <h6>Charity</h6>
                        </div>
                    </div>
                    <div className="col-3">
                        <a href='/qr'>
                        <div className='feature-box FDF5D3'>
                            <div className='img-icon'><MdQrCode2 className='icon' size={25} /></div>
                            <h6>QR</h6>
                        </div>
                        </a>
                    </div>
                </div>
                
                
                <h3>Recent Activity</h3><h5><BsArrowRight size={28}/></h5>
                <div className="row recent-activity">
                    <div className="col-3">
                        <div className='illustration'><img src='https://cdn3d.iconscout.com/3d/premium/thumb/bill-2871541-2389347.png' width={50}></img></div>
                    </div>
                    <div className="col-5">
                        <div className='title-activity'>
                            <h2 className='title'>Pay Bills</h2>
                            <h6 className='desc'>Electricity Bills</h6>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='description'>
                            <h3 className='harga'>Rp 250.000</h3>
                            <h6 className='date'>April 16</h6>
                        </div>
                    </div>
                </div>

                <div className="row recent-activity">
                    <div className="col-3">
                        <div className='illustration'><img src='https://cdn3d.iconscout.com/3d/premium/thumb/bill-2871541-2389347.png' width={50}></img></div>
                    </div>
                    <div className="col-5">
                        <div className='title-activity'>
                            <h2 className='title'>Pay Bills</h2>
                            <h6 className='desc'>Electricity Bills</h6>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='description'>
                            <h3 className='harga'>Rp 200.000</h3>
                            <h6 className='date'>April 09</h6>
                        </div>
                    </div>
                </div>
                
            </div>

            
        )
    }
}

export default Home;