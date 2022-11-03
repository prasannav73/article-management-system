import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getArticalById,
  addArtical,
  editArtical,
  deleteArtical,
} from "../redux/actions";
import { connect } from "react-redux";

class ViewArticalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match?.params.id,
      title: "",
      author: "",
      createdAt: "",
      content: "",
      tag: "",
    };
  }
  static propTypes = {
    articals: PropTypes.array.isRequired,
    getArticalById: PropTypes.func.isRequired,
    addArtical: PropTypes.func.isRequired,
    editArtical: PropTypes.func.isRequired,
    deleteArtical: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const articalId = this.props.articals.filter(
      (item) => item.id === parseInt(this.props.match?.params.id)
    )[0];
    this.setState(articalId);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center"> View Artical Details</h3>
            <div className="card-body">
              <div className="row">
                <label> Title: </label>
                <div> {this.state.title}</div>
              </div>
              <div className="row">
                <label> Author: </label>
                <div> {this.state.author}</div>
              </div>
              <div className="row">
                <label> Content: </label>
                <div> {this.state.content}</div>
              </div>
              <div className="row">
                <label> Tag: </label>
                <div> {this.state.tag}</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <a href="/articals">Back to Articals</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articals: state.articals,
});

export default connect(mapStateToProps, {
  getArticalById,
  addArtical,
  editArtical,
  deleteArtical,
})(ViewArticalComponent);
