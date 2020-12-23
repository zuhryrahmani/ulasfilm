import React, {useState} from 'react';
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import avatar from '../AssetsZuhry/images/avatar.png';

function Article() {

  const [cast, setCast] = useState([
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    },
    {
      img: avatar,
      name: 'James McAvoy',
      char: 'Professor Charles Xavier'
    }
  ]);
  const [review, setReview] = useState([
    {
      img: avatar,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto molestias labore dolores. Eius, delectus quia tenetur earum harum nostrum consequuntur aliquam quasi a cum assumenda quisquam rem dolor recusandae ipsam consequatur laboriosam repellendus, quo adipisci quas. Voluptatum fugiat eveniet obcaecati quaerat libero itaque vel consequuntur suscipit. Velit nihil, omnis in sit accusantium eos vitae nisi, ratione ut iusto animi laboriosam cupiditate magnam iste dicta odit pariatur, ducimus cumque deleniti assumenda nulla commodi. Maxime sunt distinctio ipsum atque provident architecto.'
    },
    {
      img: avatar,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto molestias labore dolores. Eius, delectus quia tenetur earum harum nostrum consequuntur aliquam quasi a cum assumenda quisquam rem dolor recusandae ipsam consequatur laboriosam repellendus, quo adipisci quas. Voluptatum fugiat eveniet obcaecati quaerat libero itaque vel consequuntur suscipit. Velit nihil, omnis in sit accusantium eos vitae nisi, ratione ut iusto animi laboriosam cupiditate magnam iste dicta odit pariatur, ducimus cumque deleniti assumenda nulla commodi. Maxime sunt distinctio ipsum atque provident architecto.'
    },
    {
      img: avatar,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto molestias labore dolores. Eius, delectus quia tenetur earum harum nostrum consequuntur aliquam quasi a cum assumenda quisquam rem dolor recusandae ipsam consequatur laboriosam repellendus, quo adipisci quas. Voluptatum fugiat eveniet obcaecati quaerat libero itaque vel consequuntur suscipit. Velit nihil, omnis in sit accusantium eos vitae nisi, ratione ut iusto animi laboriosam cupiditate magnam iste dicta odit pariatur, ducimus cumque deleniti assumenda nulla commodi. Maxime sunt distinctio ipsum atque provident architecto.'
    },
    {
      img: avatar,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto molestias labore dolores. Eius, delectus quia tenetur earum harum nostrum consequuntur aliquam quasi a cum assumenda quisquam rem dolor recusandae ipsam consequatur laboriosam repellendus, quo adipisci quas. Voluptatum fugiat eveniet obcaecati quaerat libero itaque vel consequuntur suscipit. Velit nihil, omnis in sit accusantium eos vitae nisi, ratione ut iusto animi laboriosam cupiditate magnam iste dicta odit pariatur, ducimus cumque deleniti assumenda nulla commodi. Maxime sunt distinctio ipsum atque provident architecto.'
    },
    {
      img: avatar,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto molestias labore dolores. Eius, delectus quia tenetur earum harum nostrum consequuntur aliquam quasi a cum assumenda quisquam rem dolor recusandae ipsam consequatur laboriosam repellendus, quo adipisci quas. Voluptatum fugiat eveniet obcaecati quaerat libero itaque vel consequuntur suscipit. Velit nihil, omnis in sit accusantium eos vitae nisi, ratione ut iusto animi laboriosam cupiditate magnam iste dicta odit pariatur, ducimus cumque deleniti assumenda nulla commodi. Maxime sunt distinctio ipsum atque provident architecto.'
    }
  ]);

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
      <Jumbotron className='jumbotron'>
        <h1 className="display-3">X-Men Dark Phoenix</h1>
        <div>
          <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
          <span>187 review(s)</span>
        </div>
        <p>Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.</p>
        <button className='trailer'><i class="fas fa-play"></i> Trailer</button>
        <button className='watchlist'><i class="fas fa-plus"></i> Watchlist</button>
      </Jumbotron>

      <Container className='tabs'>
        <Nav tabs className='tabsNav'>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Overview
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Cast
            </NavLink>
          </NavItem>
          <NavItem className='tabsItem'>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Review
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className='tabsContent'>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className='contentContainer'>
                <div className='overviewLine'>
                  <h4>Synopsis</h4>
                </div>
                <p>Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.</p>
                <div className='overviewLine'>
                  <h4>Movie Info</h4>
                </div>
                <p><b>Release Date:</b> 7 June 2019</p>
                <p><b>Director:</b> Simon Kinberg</p>
                <p><b>Featured Song:</b> -</p>
                <p><b>Budget:</b> 200 Million USD</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" className='castContainer'>
                {cast.map(list => {
                  return (
                    <div class='cast'>
                      <img src={list.img}/>
                      <h5>{list.name}</h5>
                      <p>{list.char}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12" className='reviewContainer'>
                <div className='review'>
                  <div className='reviewLeft'>
                    <img src={avatar} />
                  </div>
                  <div className='reviewRight'>
                    <h4>Zuhry Abdi Rahmani</h4>
                    <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <form>
                      <textarea placeholder='type your review here ...' />
                      <button type='submit'>Post</button>
                    </form>
                  </div>
                </div>
                {review.map(list => {
                  return (
                    <div className='review'>
                      <div className='reviewLeft'>
                        <img src={list.img} />
                      </div>
                      <div className='reviewRight'>
                        <h4>{list.name}</h4>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <p>{list.review}</p>
                      </div>
                    </div>
                  );
                })}
                <button>Load more</button>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
}

export default Article;