import React from "react";
import PostForm from './Components/PostForm';
import InputProductSearch from './Components/InputProductSearch';
import Offers from './Components/Offers';
import ShowData from './Components/ShowData';
import "./App.css";

// import bootsrap react
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

// import icons
import { MdClose } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { MdLink } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";

// import star-rating
import StarRatingComponent from "react-star-rating-component";
import FormGroup from "react-bootstrap/FormGroup";

class App extends React.Component {

  state = {
    DATAS: {
      product: '',
      type: '',
      posted_at_date: null,
      title: "",
      description: '',
      youtube: null,
      image: '',
      productUrl: '',
      rating: 1,
      no_offer_price: '',
      price: '',
      startDate: '',
      endDate: '',
      id_price_currency: ''
    },
    postOnClick: false,
    postRender: false,
    reviewOnClick: false,
    reviewRender: false,
    offersOnClick: false,
    offersRender: false,
    showData: false
  };

  // Setting the values

  onStarClick(rating) {

    const DATAS = {
      ...this.state.DATAS, rating
    }

    this.setState(({ DATAS }), () => console.log('star', this.state.DATAS))
  }


  setUrl = (productUrl) => {

    const DATAS = {
      ...this.state.DATAS, productUrl: productUrl
    }

    this.setState(({ DATAS }), () => console.log('setproductUrl', this.state.DATAS))
  }

  setYouTube = (youtube) => {

    const DATAS = {
      ...this.state.DATAS, youtube: youtube
    }

    this.setState(({ DATAS }), () => console.log('setYoutube', this.state.DATAS))
  }

  setImage = (image) => {

    const DATAS = {
      ...this.state.DATAS, image: image
    }

    this.setState(({ DATAS }), () => console.log('setImage', this.state.DATAS))
  }

  setproduct = (product) => {

    const DATAS = {
      ...this.state.DATAS, product: product
    }

    this.setState(({ DATAS }), () => console.log('setproduct', this.state.DATAS))

  }

  setTitle = (title) => {

    const DATAS = {
      ...this.state.DATAS, title: title
    }

    this.setState(({ DATAS }), () => console.log('settitle', this.state.DATAS))

  }

  setDescription = (description) => {

    const DATAS = {
      ...this.state.DATAS, description
    }

    this.setState(({ DATAS }), () => console.log('setdescription', this.state.DATAS))

  }

  setNoOfferPrice = (no_offer_price) => {

    const DATAS = {
      ...this.state.DATAS, no_offer_price
    }

    this.setState(({ DATAS }), () => console.log('setNoOfferPrice', this.state.DATAS))

  }

  setPrice = (price) => {

    const DATAS = {
      ...this.state.DATAS, price
    }

    this.setState(({ DATAS }), () => console.log('setPrice', this.state.DATAS))

  }

  setStartDate = (startDate) => {

    const DATAS = {
      ...this.state.DATAS, startDate
    }

    this.setState(({ DATAS }), () => console.log('setStartDate', this.state.DATAS))

  }

  setEndDate = (endDate) => {

    const DATAS = {
      ...this.state.DATAS, endDate
    }

    this.setState(({ DATAS }), () => console.log('setEndDate', this.state.DATAS))

    
  }

  setPriceCurrency = (id_price_currency) => {

    const DATAS = {
      ...this.state.DATAS, id_price_currency
    }

    this.setState(({ DATAS }), () => console.log('setPriceCurrency', this.state.DATAS))


  }



  // Publish and clear

  publishData = async () => {
    const DATAS = {
      ...this.state.DATAS, posted_at_date: new Date()
    }
    await this.setState ({ showData: true })
    // alert('Your data was published!')
    // console.log(this.state.DATAS)
    // window.location.reload(true);
  }

  clearData = async () => {

    alert('Your data was cleared!')
    console.log(this.state.DATAS)
    window.location.reload(true)
  }

  // Functions for choosing the post type

  postOnClick = () => {
    this.setState({
      postOnClick: true,
      postRender: true,
      reviewRender: false,
      offersRender: false
    });

    const DATAS = {
      ...this.state.DATAS, type: '1'
    }

    this.setState({ DATAS })

  };

  reviewOnClick = () => {
    this.setState({
      reviewOnClick: true,
      postRender: false,
      reviewRender: true,
      offersRender: false
    });

    const DATAS = {
      ...this.state.DATAS, type: '2'
    }

    this.setState({ DATAS })

  };

  offersOnClick = () => {
    this.setState({
      offersOnClick: true,
      postRender: false,
      reviewRender: false,
      offersRender: true
    });

    const DATAS = {
      ...this.state.DATAS, type: '3'
    }

    this.setState({ DATAS })

  };

  onMouseLeave = () => {
    this.setState({
      postOnClick: false,
      reviewOnClick: false,
      offersOnClick: false
    });
  };




  render() {
    const { rating } = this.state;

    let renderAllPosts;
    if (this.state.postRender) {
      renderAllPosts = (
        <InputProductSearch
          setUrl={this.setUrl}
          setYouTube={this.setYouTube}
          setImage={this.setImage}
          setproduct={this.setproduct}
          setTitle={this.setTitle}
          setDescription={this.setDescription}
        />
      );
    } 
    if (this.state.reviewRender) {
      renderAllPosts = (
        <div>
          <InputProductSearch
            setUrl={this.setUrl}
            setYouTube={this.setYouTube}
            setImage={this.setImage}
            setproduct={this.setproduct}
            setTitle={this.setTitle}
            setDescription={this.setDescription}
          />
          <Card.Text className="mt-4 ratings text-left">Ratings</Card.Text>
          <StarRatingComponent
            className="mt-2"
            starColor={"#e7386a"}
            emptyStarColor={"#e5e5e5"}
            name="rate1"
            starCount={5}
            value={rating}
            renderStarIcon={() => (
              <span>
                <FaStar className="icon-star mr-4" />
              </span>
            )}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      );
    }
    if (this.state.offersRender) {
      renderAllPosts = (
        <div>
          <InputProductSearch
            setUrl={this.setUrl}
            setYouTube={this.setYouTube}
            setImage={this.setImage}
            setproduct={this.setproduct}
            setTitle={this.setTitle}
            setDescription={this.setDescription}
          />
            
           <Offers setNoOfferPrice={this.setNoOfferPrice} 
           setPrice={this.setPrice} 
           setStartDate={this.setStartDate} 
           setEndDate={this.setEndDate} 
           setPriceCurrency={this.setPriceCurrency} />

          </div>
        );
      }

      return (
        <Container fluid={true}>
          <Row>
            <PostForm publishData={this.publishData} clearData={this.clearData} />
          </Row>
          <Row>
            <Col id="main" xl={12}>
              <main className="text-center m-3">

              <ButtonGroup aria-label="Basic example">
                  <Button
                    onFocus={this.postOnClick}
                    onBlur={this.onMouseLeave}
                    className={
                      this.state.postRender
                        ? "active mr-3 bg-transparent"
                        : "not-active mr-3 bg-transparent"
                    }
                  >
                    Post
                  </Button>
                  <Button
                    onFocus={this.reviewOnClick}
                    onBlur={this.onMouseLeave}
                    className={
                      this.state.reviewRender
                        ? "active mr-3 bg-transparent"
                        : "not-active mr-3 bg-transparent"
                    }
                  >
                    Review
                  </Button>
                  <Button
                    onFocus={this.offersOnClick}
                    onBlur={this.onMouseLeave}
                    className={
                      this.state.offersRender
                        ? "active mr-3 bg-transparent"
                        : "not-active mr-3 bg-transparent"
                  }
                >
                  Offers
                </Button>
              </ButtonGroup>
              {renderAllPosts}

              {this.state.showData && <ShowData DATAS={this.state.DATAS} image={this.state.DATAS.image} product={this.state.DATAS.product} showData={this.state.showData} clearData={this.clearData}/>}

            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
