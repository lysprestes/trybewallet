import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </>
    );
  }
}

const mapState = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapState)(Header);
