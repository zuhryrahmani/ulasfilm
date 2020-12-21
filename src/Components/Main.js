import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,
  Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import classnames from 'classnames';
import img from '../AssetsZuhry/images/contoh.jpeg';

// carousel images
import carousel1 from '../AssetsZuhry/images/carousel1.jpg';
import carousel2 from '../AssetsZuhry/images/carousel2.jpg';
import carousel3 from '../AssetsZuhry/images/carousel3.jpg';
import carousel4 from '../AssetsZuhry/images/carousel4.jpg';

const items = [
  {
    src: carousel1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: carousel2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: carousel3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: carousel4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];
// carousel images ends

function Main() {

  const [content, setContent] = useState([
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    },
    {
      img: img,
      title: 'X-Men Dark Phoenix',
      year: '2019',
      genre: 'Action'
    }
  ]);

  // carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className='carouselItem'
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  // carousel ends

  // tabs
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  // tabs ends

  // styles
  const navlink = {
    color: 'white',
    backgroundColor: '#191919',
  }
  // styles ends

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className='mainCarousel'
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <Container className='tabs'>
        <Nav tabs className='tabsNav'>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
              style={navlink}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
              style={navlink}
            >
              Action
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
              style={navlink}
            >
              Thriller
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
              style={navlink}
            >
              Comedy
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
              style={navlink}
            >
              Romance
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { toggle('6'); }}
              style={navlink}
            >
              Anime
            </NavLink>
          </NavItem>
          <h1>Category <i class="fas fa-tags"></i></h1>
        </Nav>
        <TabContent activeTab={activeTab} className='tabsContent'>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}<span>{list.genre}</span></p>
                    </div>
                  );
                })}
              </Col>
              <Pagination aria-label="Page navigation example" className='pagination'>
                  <PaginationItem disabled className='paginationItem'>
                    <PaginationLink first href="#" className='paginationLink'/>
                  </PaginationItem>
                  <PaginationItem disabled className='paginationItem'>
                    <PaginationLink previous href="#" className='paginationLink'/>
                  </PaginationItem>
                  <PaginationItem active className='paginationItem'>
                    <PaginationLink href="#" className='paginationLink'>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink href="#" className='paginationLink'>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink href="#" className='paginationLink'>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink href="#" className='paginationLink'>
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink href="#" className='paginationLink'>
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink next href="#" className='paginationLink'/>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink last href="#" className='paginationLink'/>
                  </PaginationItem>
                </Pagination>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12" className='contentContainer'>
                {content.map(list => {
                  return (
                    <div className='content'>
                      <img src={list.img} alt='Movie Poster' />
                      <h5>{list.title}</h5>
                      <p>{list.year}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
}

export default Main;