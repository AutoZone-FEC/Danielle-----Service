import React from 'react';
import axios from 'axios';
import Toolbar from './components/toolbar/Toolbar';
import navbar from './navbar.css';
import Vehicles from './components/vehicles/Vehicles';
import Mystore from './components/mystore/Mystore';
import Rewards from './components/rewards/Rewards';
import Mycart from './components/cart/Mycart'
import Logo from './components/logo/Logo'

class Navbar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           searchItemOne: [], //first product in the dropdown
           searchItems: [], //second product in the dropdown through tenth (or less)
           searchIDs: {}, //object with all 10 (or less searched products and product numbers)
           emptySearch: true,
           showDropdown: false,
           selectedItem: "cannon", //product clicked on in dropdown
           selectedID: 1,  //productID clicked on in dropdown
           inputValue: '',
           count: '',
        }
        this.searchingItem = this.searchingItem.bind(this);
        this.itemSelect = this.itemSelect.bind(this);
    }

    searchingItem(event) {
        var search = event.target.value;
    
        if (search === "") {
            this.setState({
                searchItemOne: [],
                searchItems: [],
                searchIDs: [],
                emptySearch: true,
                showDropdown: false,
                inputValue: search,
            })
        } else {
        axios.get(`http://localhost:8081/${search}`)
        .then( ( {data}) => {
            //update state with 10 product names and their corresponding product id's from the database
            var searchedItemsArray = [];
            var searchedIDsObj = {};
            var searchedItemOne = '';
            var searchedIDOne = '';
            for (var i = 0; i< data.length; i++) {
  
                    searchedItemsArray.push(data[i].productName);
                    searchedIDsObj[data[i].productName] = data[i].productID;
            }

            this.setState({
                searchItemOne: [searchedItemOne],
                searchItems: [...searchedItemsArray],
                searchIDs: searchedIDsObj,
                emptySearch: false,
                showDropdown: true,
                inputValue: search
            })
        })
        .catch( (err) => {
            console.log(err)
        })
    }
    }

    itemSelect(item) {
        window.localStorage.setItem('productID',this.state.searchIDs[item])
        this.setState({
            selectedItem: item,
            selectedID: this.state.searchIDs[item],
            searchItemOne: [],
            searchItems: [],
            searchIDs: [],
            emptySearch: true,
            showDropdown: false,
            inputValue: '',
        })
    }

    timer() {
        this.setState({
            count: window.localStorage.getItem('count')
        })
    }
    componentDidMount() {
        var intervalId = setInterval(this.timer.bind(this),1000)
    }

    render() {
        return(
            <>
            <Toolbar/>
            <div className={navbar.innerContainer}>
                <div className="container containerMarginLeft">
                    <div className={navbar.innerContainer}>
                        <div className={navbar.col362}>
                            <Logo
                                showDropdown={this.state.showDropdown}
                                searchIDs={this.state.searchIDs}
                                searchingItem={this.searchingItem}
                                itemSelect={this.itemSelect}
                                searchItems={this.state.searchItems}
                                searchItemOne={this.state.searchItemOne}
                                selectedID={this.state.selectedID}
                                inputPlaceholder={this.state.inputPlaceholder}
                                inputValue={this.state.inputValue}
                            />
                        </div>
                        <div className={navbar.col145}>
                            <Vehicles/>
                        </div>
                        <div className={navbar.col229}>
                            <Mystore/>
                        </div>
                        <div className={navbar.col145}>
                            <Rewards/>
                        </div>
                        <div className={navbar.col105}>
                            <Mycart
                                count={this.state.count}
                            />        
                        </div>
                    </div> 
                </div>     
            </div>
            </>
        )
    }
}

export default Navbar;

 // this.hoverOverItem = this.hoverOverItem.bind(this);
 // this.onMouseLeaveOverItem = this.onMouseLeaveOverItem.bind(this);
// hoverOverItem={this.hoverOverItem}
// onMouseLeaveOverItem={this.onMouseLeaveOverItem}
/* Styling on hover over of searchbar drop down menu */    
    // hoverOverItem(event, item) {
    //     event.target.style.background = "grey";
    //     event.target.style.color = "white";
    //     event.target.style.fontWeight = "bold";
    //     console.log(item)
    //     var selectedProductID = Number(event.target.href.replace("http://localhost:8081/",""))
    //     this.setState({
    //         selectedID: selectedProductID
    //     })
    // }

    // onMouseLeaveOverItem(event) {
    //     event.target.style.background = "white";
    //     event.target.style.color = "black";
    //     event.target.style.fontWeight = "normal";
    // }
