import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/CarouselItem'
import '../assets/styles/App.scss';

const Home = ({myList, trends, originals}) => {
  return (
    <>
      <Search/>
      {myList.length > 0 &&
        <Categories title="My list">
          <Carousel>
          {
            myList.map(item => <Item key={item.id} {...item} myList={true} />)
          }
          </Carousel>
        </Categories>
      }
      <Categories title="Trends">
        <Carousel>
          {
          trends.map(item =>
            <Item key={item.id} {...item}/>
          )

          }
        </Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>
          {
            originals.map(item =>
            <Item key={item.id} {...item}/>
          )
          }
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps, null)(Home);