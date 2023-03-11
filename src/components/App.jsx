import { theme } from './Layout';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Layout } from "./Layout"
import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer} from 'react-toastify';

export class App extends Component {
  state = {
    searchValue: null,
  }

  handleFormSubmit = searchValue => {
    this.setState({searchValue})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery searchValue={this.state.searchValue} />
        </Layout>
        <ToastContainer autoClose={1500} hideProgressBar={true}/>
      </ThemeProvider>
    )
  }

};
