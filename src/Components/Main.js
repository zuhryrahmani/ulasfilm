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

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  // tabs ends

  // pagination
  const [activePage, setActivePage] = useState('1');

  const togglePage = page => {
    if(activePage !== page) setActivePage(page);
  }
  const nextPage = page => {
    let temp = parseInt(page);
    let next = temp + 1;
    if(page !== '5') setActivePage(next.toString());
  }
  const prevPage = page => {
    let temp = parseInt(page);
    let prev = temp - 1;
    if(page !== '1') setActivePage(prev.toString());
  }
  // pagination ends

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
        <div className='tabsContainer'>
          <h1 className='tabsTitle'><i class="fas fa-tags"></i> Genre</h1>
          <Nav tabs className='tabsNav'>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggleTab('1'); }}
              >
                All
              </NavLink>
            </NavItem>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggleTab('2'); }}
              >
                Action
              </NavLink>
            </NavItem>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggleTab('3'); }}
              >
                Thriller
              </NavLink>
            </NavItem>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggleTab('4'); }}
              >
                Comedy
              </NavLink>
            </NavItem>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => { toggleTab('5'); }}
              >
                Romance
              </NavLink>
            </NavItem>
            <NavItem className='tabsItem'>
              <NavLink
                className={classnames({ active: activeTab === '6' })}
                onClick={() => { toggleTab('6'); }}
              >
                Anime
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={activeTab} className='tabsContent'>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className='allContainer'>
                <section
                  className={classnames({ active: activePage === '1' })}
                >
                  {content.map(list => {
                    return (
                      <div className='content'>
                        <img src={list.img} alt='Movie Poster' />
                        <h5>{list.title}</h5>
                        <p>{list.year}<span>{list.genre}</span></p>
                      </div>
                    );
                  })}
                  <p>page 1</p>
                </section>
                <section
                  className={classnames({ active: activePage === '2' })}
                >
                  {content.map(list => {
                    return (
                      <div className='content'>
                        <img src={list.img} alt='Movie Poster' />
                        <h5>{list.title}</h5>
                        <p>{list.year}<span>{list.genre}</span></p>
                      </div>
                    );
                  })}
                  <p>page 2</p>
                </section>
                <section
                  className={classnames({ active: activePage === '3' })}
                >
                  {content.map(list => {
                    return (
                      <div className='content'>
                        <img src={list.img} alt='Movie Poster' />
                        <h5>{list.title}</h5>
                        <p>{list.year}<span>{list.genre}</span></p>
                      </div>
                    );
                  })}
                  <p>page 3</p>
                </section>
                <section
                  className={classnames({ active: activePage === '4' })}
                >
                  {content.map(list => {
                    return (
                      <div className='content'>
                        <img src={list.img} alt='Movie Poster' />
                        <h5>{list.title}</h5>
                        <p>{list.year}<span>{list.genre}</span></p>
                      </div>
                    );
                  })}
                  <p>page 4</p>
                </section>
                <section
                  className={classnames({ active: activePage === '5' })}
                >
                  {content.map(list => {
                    return (
                      <div className='content'>
                        <img src={list.img} alt='Movie Poster' />
                        <h5>{list.title}</h5>
                        <p>{list.year}<span>{list.genre}</span></p>
                      </div>
                    );
                  })}
                  <p>page 5</p>
                </section>
              </Col>
              {/* <div class='pagination'>
                <div><i class="fas fa-chevron-left"></i></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div><i class="fas fa-chevron-right"></i></div>
              </div> */}
              <Pagination aria-label="Page navigation example" className='pagination'>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink first 
                      onClick={() => { togglePage('1'); }}
                    />
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink previous
                      onClick={() => { prevPage(activePage); }}
                    />
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink
                      className={classnames({ active: activePage === '1' })}
                      onClick={() => { togglePage('1'); }}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink
                      className={classnames({ active: activePage === '2' })}
                      onClick={() => { togglePage('2'); }}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink
                      className={classnames({ active: activePage === '3' })}
                      onClick={() => { togglePage('3'); }}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink
                      className={classnames({ active: activePage === '4' })}
                      onClick={() => { togglePage('4'); }}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink
                      className={classnames({ active: activePage === '5' })}
                      onClick={() => { togglePage('5'); }}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink next 
                      onClick={() => { nextPage(activePage); }}
                    />
                  </PaginationItem>
                  <PaginationItem className='paginationItem'>
                    <PaginationLink last
                      onClick={() => { togglePage('5'); }}
                    />
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
                      <p>{list.year}<span>Action</span></p>
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
                      <p>{list.year}<span>Thriller</span></p>
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
                      <p>{list.year}<span>Comedy</span></p>
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
                      <p>{list.year}<span>Romance</span></p>
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
                      <p>{list.year}<span>Anime</span></p>
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