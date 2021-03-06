import React from "react";
import {
  Segment,
  Icon,
  Container,
  Menu,
  Responsive,
  Header,
  Visibility
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Services = () => {
  return (
    <div>
      <div>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility once={false}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 100, padding: "1em 0em" }}
              vertical
            >
              <Menu size="large">
                <Container>
                  <Menu.Item as="a">
                    <Link to={`/`}>Home</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Link to={`/services`}>Services</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Link to={`/contact`}>Contact Us</Link>
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
        </Responsive>
      </div>
      <Segment color="teal" style={{ textAlign: "center" }}>
        <Link to={`/`}>
          <Icon name="home" size="big" color="teal" />
        </Link>
      </Segment>

      <Container>
        <Header as="h2">Services</Header>
        <p>Comming soon.</p>
        <br />
      </Container>
    </div>
  );
};

export default withRouter(Services);
