// import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchButton,
  SearchInput,
  Label,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  handleNameChange = event => {
    this.setState({ searchInput: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            value={this.state.searchInput}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchButton type="submit">
            <Label>
              Search
              <BsSearch style={{ width: 20, height: 20 }} />
            </Label>
          </SearchButton>
        </Form>
      </Header>
    );
  }
}
