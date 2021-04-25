import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <img
            src="https://turnkey.id/wp-content/uploads/2020/10/ezgif.com-gif-maker-7.png"
            class="img-fluid"
            alt="Responsive image"
          ></img>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">This data taken from random user API</p>
          <hr className="my-2" />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
