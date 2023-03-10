import { theme } from './Layout';
// import { GlobalStyle } from "./GlobalStyle";

import { ThemeProvider } from "styled-components";
import { Layout } from "./Layout"
import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from 'react';



export class App extends Component {
  state = {
    images: null,
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
      <Layout>
      <Searchbar/>
    </Layout>
    </ThemeProvider>
    )
  }

};
