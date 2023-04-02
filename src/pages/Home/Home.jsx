import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";

function Home() {
    return (
        <div className="container text-center" style={{ marginTop: '50px' }}>
            <h2>A maior loja física e digital de eletrônicos da Zona Oeste</h2>
            <div style={{ width: '100%' }}>
                <div className="Carrossel" style={{ width: '25%', display: 'inline-block', margin: '0 auto' }}>
                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://api.lorem.space/image/watch?w=720&h=720"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?xbox"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?playstation4"
                                alt="Image "
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="Carrossel" style={{ width: '25%', display: 'inline-block', margin: '0 auto' }}>

                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?keyboard"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?jbl"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?earphone"
                                alt="Image "
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="Carrossel" style={{ width: '25%', display: 'inline-block', margin: '0 auto' }}>

                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?playstation4"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?computer"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?laptop"
                                alt="Image "
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="Carrossel" style={{ width: '25%', display: 'inline-block', margin: '0 auto' }}>

                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?headset"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?jbl"
                                alt="Image "
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/random/720x720/?earphone"
                                alt="Image "
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;


