import React from 'react';
import PopupLinkUrl from './PopupLinkUrl';
import PopupYoutube from './PopupYoutube';
import ImageList from './ImageList';
import { SearchProductsData } from '../Fixtures/SearchProductsData';
import { MentionsInput, Mention } from 'react-mentions';
import { userMentionData } from '../Fixtures/USERS'


import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

import { MdClose } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { MdLink } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";




class InputProductSearch extends React.Component {

    state = {
        renderModalUrl: false,
        renderModalYouTube: false,
        renderImageList: false,
        inputSearch: '',
        filterProduct: [],
        title: '',
        inputArea: ''
    }

    handleUrlVisibility = () => {

        this.setState({ renderModalUrl: !this.state.renderModalUrl })
    }

    handleYoutubeVisibility = () => {

        this.setState({ renderModalYouTube: !this.state.renderModalYouTube })
    }

    handleImageListVisibility = () => {
        this.setState({ renderImageList: !this.state.renderImageList })
    }

    onSearchChange = async e => {
        console.log(e.target.value)
        const inputSearch = e.target.value;
        await this.setState({
            inputSearch
        });
        this.displayProduct(this.state.inputSearch);
        this.props.setproduct(this.state.inputSearch);
    };
    displayProduct = input => {
        const searchWord = input.toLowerCase().split("");
        for (let i = 0; i < searchWord.length; i++) {
            this.cleanArray(this.state.filterProduct);
            SearchProductsData.data.products.map(item => {
                const product = item.name_es.toLowerCase().split("");
                const brand = item.brand.name.toLowerCase().split("")

                if (searchWord[i] === product[i] || searchWord[i] === brand[i]) {
                    searchWord[i] === product[i] && this.state.filterProduct.push(item.name_es)
                    searchWord[i] === brand[i] && this.state.filterProduct.push(item.brand.name)
                }
                return this.state.filterProduct
            });
        };
    }
    cleanArray = arr => {
        arr.splice(0, arr.length);
        this.setState({
            displayProduct: arr
        });
    };

    titleOnChange = async (e) => {
        const title = e.target.value
        await this.setState({ title })

        this.props.setTitle(this.state.title)
    }

    handleInputChange = async (e, inputArea) => {
        console.log(inputArea)
        await this.setState({
          inputArea
        })

        this.props.setDescription(this.state.inputArea);

      }
    
    



    render() {
        return (
            <div>
                {this.state.renderModalUrl &&
                    <PopupLinkUrl setUrl={this.props.setUrl} handleUrlVisibility={this.handleUrlVisibility} renderModalUrl={this.state.renderModalUrl}/>}
                {this.state.renderModalYouTube &&
                    <PopupYoutube setYouTube={this.props.setYouTube} handleYoutubeVisibility={this.handleYoutubeVisibility} renderModalYouTube={this.state.renderModalYouTube}/>
                }
                {this.state.renderImageList &&
                    <ImageList setImage={this.props.setImage} handleImageListVisibility={this.handleImageListVisibility} renderImageList={this.state.renderImageList}/>
                }

                <InputGroup className="mt-5 input-search">
                    <InputGroup.Prepend className="border-0">
                        <InputGroup.Text className="bg-transparent border-0">
                            <MdSearch className="search-icon" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                       list="search"
                        className="bg-transparent border-0"
                        type="text"
                        placeholder="What will you talk about ?"
                        value={this.state.inputSearch}
                        onChange={this.onSearchChange}
                    />
                    <datalist id="search" >
                        {this.state.filterProduct.map(i => {
                            return <option  key={i} value={i}>{i}</option>;
                        })}
                    </datalist>
                   
                </InputGroup>



                <Form.Group
                    className="my-5"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Control
                        className="input-title"
                        type="text"
                        placeholder="Title" 
                        onChange={this.titleOnChange}
                    />
                    <MentionsInput
                    value={this.state.inputArea}
                    onChange={this.handleInputChange}
                    markup="@{{__type__||__id__||__display__}}"
                    placeholder="Add text, @tag somebody"
                    className="input-text-area pt-5"
                  >
                    <Mention
                      type="user"
                      trigger="@"
                      data={userMentionData}
                      className="mentions__mention"
                    />
                    </MentionsInput>
                    <IconContext.Provider value={{ color: "#f9f9f9" }}>
                        <div className="icons">
                            <MdImage className="icon mr-2 p-1" onClick={this.handleImageListVisibility} />
                            <MdVideoLibrary className="icon mr-2 p-1" onClick={this.handleYoutubeVisibility} />
                            <MdLink className="icon mr-2 p-1" onClick={this.handleUrlVisibility} />
                        </div>
                    </IconContext.Provider>
                </Form.Group>

            </div>
        )
    }
}

export default InputProductSearch;
