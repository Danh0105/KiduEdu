import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Carousel from './Carousel';
export default class UserLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <Content />
        <Footer />
      </>
    )
  }
}
