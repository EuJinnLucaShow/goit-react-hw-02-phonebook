import React, { Component } from 'react';
import { Input } from './Filter.styled'

class Filter extends Component {
  handleFilterChange = (event) => {
    this.props.setFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <Input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={this.handleFilterChange}
      />
    );
  }
}

export default Filter;
