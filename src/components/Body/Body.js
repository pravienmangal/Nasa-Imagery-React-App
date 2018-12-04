import React, { Component } from 'react';
import axios from 'axios';
import SearchCallout from './Callouts/SearchCallout';
import GalleryCallout from './Callouts/GalleryCallout';
import Placeholder from '../../assets/placeholder.png';
import Modal from './Modal/Modal'

class Body extends Component {

  state = {
    searchArr: [],
    calloutsArr: [],
    query: '',
    clickedCalloutId: null,
    clickedCalloutImg: null,
    clickedCalloutTitle: null,
    clickedCalloutDesc: null,
    showModal: false
  }

  componentDidMount() {
    if(!this.state.query === '') {
      this.submitHandler();
    }

    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=47430jLqIeqQEmNtLRAALpSq21uPOgYeiVsmHfQf')
      .then(res => {
        const updatedCallouts = res.data.photos.splice(2, 6);
        this.setState({calloutsArr: updatedCallouts});
      })
      .catch(error => console.log('Fetching Failed:', error))
  }

  inputChangeHandler = (e) => {
    this.setState({query: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    if(this.state.query !== '') {
      let queryURL = 'https://images-api.nasa.gov/search?q=' + this.state.query
      axios.get(queryURL)
        .then(result => {
          const updatedResults = result.data.collection.items;
          this.setState({searchArr: updatedResults});
        })  
    }
  }

  calloutClickedHandler = (id, img, title, desc) => {
    this.setState({
      clickedCalloutId: id,
      clickedCalloutImg: img,
      clickedCalloutTitle: title,
      clickedCalloutDesc: desc,
      showModal: true
    });
  } 

  hideModalHandler = () => {
    this.setState({showModal: false});
  }

  render() {
    let searcResult = <li className="no-result">Result Images will be shown here.........</li>;
    if(this.state.searchArr.length) {
      searcResult = (
         this.state.searchArr.map(res => {
          return <SearchCallout
                  key={res.data[0].nasa_id}
                  imgTitle={res.data[0].title}
                  imgSrc={res.data[0].media_type === 'image' ? res.links[0].href : Placeholder}
                  clicked={() => this.calloutClickedHandler(
                    res.data[0].nasa_id, 
                    res.links[0].href,
                    res.data[0].title,
                    res.data[0].description
                  )}/>
          })
      );
    }
    const GalleryCallouts = this.state.calloutsArr.map(callout => {
      return <GalleryCallout
              key={callout.id}
              imgSrc={callout.img_src}
              camera={callout.camera.full_name}/>
    });

    const modal = this.state.showModal;

    return (
      <div className="container">
        <div className="search-content">
          <h1>Search here for Nasa's images</h1>
          <form>
            <input
              className="search-field"
              type="text"
              placeholder="Search here"
              onChange={this.inputChangeHandler} />
            <button
              className='search-btn'
              onClick={this.submitHandler} >
                Searcn
            </button> 
          </form>
          <div className="search-results">
            <ul className="callouts">
              { searcResult }
            </ul>
          </div>
        </div>
        <div className="callout-content">
          <h2>Images of Mars</h2>
          <ul className="callouts">
            { GalleryCallouts }
          </ul>
        </div>
        {modal ?
          <Modal 
            closeClick={this.hideModalHandler}
            modalImg={this.state.clickedCalloutImg.match((/\.(gif|jpg|jpeg|tiff|png)$/i)) ? this.state.clickedCalloutImg : Placeholder}
            modalTitle={this.state.clickedCalloutTitle}
            modalDesc={this.state.clickedCalloutDesc}/> :
          null
        }
      </div>
    );
  }
}

export default Body;