import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getArticalById,
  addArtical,
  editArtical,
  deleteArtical,
} from "../redux/actions";
import { connect } from "react-redux";

class CreateArticalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: "",
      author: "",
      createdAt: "",
      content: "",
      tag: "",
    };
    this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
    this.changeContentHandler = this.changeContentHandler.bind(this);
    this.saveOrUpdateArtical = this.saveOrUpdateArtical.bind(this);
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeTagHandler = this.changeTagHandler.bind(this);
    this.saveOrUpdateArtical = this.saveOrUpdateArtical.bind(this);
  }

  static propTypes = {
    articals: PropTypes.array.isRequired,
    getArticalById: PropTypes.func.isRequired,
    addArtical: PropTypes.func.isRequired,
    editArtical: PropTypes.func.isRequired,
    deleteArtical: PropTypes.func.isRequired,
  };
  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      const articalId = this.props.articals.filter(
        (item) => item.id === parseInt(this.props.match.params.id)
      )[0];
      this.setState(articalId);
    }
  }
  saveOrUpdateArtical = (e) => {
    e.preventDefault();
    let artical = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      createdAt: "" + new Date(),
      content: this.state.content,
      tag: this.state.tag,
    };
    console.log("artical => " + JSON.stringify(artical));

    // step 5
    if (this.state.id === "_add") {
      artical.id = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      this.props.addArtical(artical);
      this.props.history.push("/articals");
    } else {
      this.props.editArtical(artical);
      this.props.history.push("/articals");
    }
  };

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeAuthorHandler = (event) => {
    this.setState({ author: event.target.value });
  };

  changeContentHandler = (event) => {
    this.setState({ content: event.target.value });
  };

  changeTagHandler = (event) => {
    this.setState({ tag: event.target.value });
  };

  cancel() {
    this.props.history.push("/articals");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Artical</h3>;
    } else {
      return <h3 className="text-center">Update Artical</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Title: </label>
                    <input
                      placeholder="Title"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Content: </label>
                    <input
                      placeholder="content"
                      name="content"
                      className="form-control"
                      value={this.state.content}
                      onChange={this.changeContentHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Author: </label>
                    <input
                      placeholder="author"
                      name="author"
                      className="form-control"
                      value={this.state.author}
                      onChange={this.changeAuthorHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tag: </label>
                    <select
                      className="form-control"
                      onChange={this.changeTagHandler}
                      value={this.state.tag}
                    >
                      <option value="tag1">Tag1</option>
                      <option value="tag2">Tag2</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateArtical}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <a href="/articals">Back to Articals</a>
            </div>
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
})(CreateArticalComponent);
