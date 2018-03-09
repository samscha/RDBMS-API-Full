import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="Users">
        <div className="UsersTitle">Users</div>

        {this.props.users.map(user => (
          <div key={user.id} className="User">
            {user.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
