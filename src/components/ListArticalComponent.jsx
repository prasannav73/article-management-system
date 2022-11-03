import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getArticalById,
  addArtical,
  editArtical,
  deleteArtical,
} from "../redux/actions";
import { connect } from "react-redux";

class ListArticalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articals: [],
    };
    this.addArtical = this.addArtical.bind(this);
    this.editArtical = this.editArtical.bind(this);
    this.viewArtical = this.viewArtical.bind(this);
    this.deleteArtical = this.deleteArtical.bind(this);
  }
  static propTypes = {
    articals: PropTypes.array.isRequired,
    getArticalById: PropTypes.func.isRequired,
    addArtical: PropTypes.func.isRequired,
    editArtical: PropTypes.func.isRequired,
    deleteArtical: PropTypes.func.isRequired,
  };

  deleteArtical(id) {
    if (window.confirm("Are you sure?")) {
      this.setState({
        articals: this.state.articals.filter((artical) => artical.id !== id),
      });
    }
  }
  viewArtical(id) {
    this.props.history.push(`/view-artical/${id}`);
  }
  editArtical(id) {
    if (window.confirm("Are you sure?")) {
      this.props.history.push(`/add-artical/${id}`);
    }
  }

  componentDidMount() {
    this.setState({ articals: this.props.articals });
  }

  addArtical() {
    this.props.history.push("/add-artical/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Articals List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addArtical}>
            {" "}
            Add Artical
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Title</th>
                <th> Author</th>
                <th> Created At</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.articals.map((artical) => (
                <tr key={artical.id}>
                  <td> {artical.title} </td>
                  <td> {artical.author}</td>
                  <td> {artical.createdAt}</td>
                  <td>
                    <button
                      onClick={() => this.editArtical(artical.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteArtical(artical.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewArtical(artical.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
})(ListArticalComponent);
