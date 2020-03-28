import React from 'react';
import logo from './logo.css';
import $ from "jquery";

class Logo extends React.Component{
    // showDropdown, searchingItem, searchIDs, itemSelect, searchItems, searchItemOne, inputValue
    constructor(props) {
        super(props)
        this.state = {
            highlightItem: -1
        }
    }
    
    highlightItem(event) {
        this.setState({
            highlightItem: event.currentTarget.id
        })
    }


    pressingKey(event) {
        var currentHightlight = this.state.highlightItem
        if (this.props.showDropdown === false) {
            this.setState({
                highlightItem: -1
            })
        }
        if (event.key === "ArrowDown") {
            if (Number(currentHightlight) === this.props.searchItems.length-1) {
                this.setState({
                    highlightItem: "0"
                })
            } else {
                this.setState({
                    highlightItem: (Number(currentHightlight)+1).toString()
                })
            }
        }
        if (event.key === "ArrowUp") {
            if (Number(currentHightlight) === 0) {
                this.setState({
                    highlightItem: (this.props.searchItems.length-1).toString()
                })
            } else {
                this.setState({
                    highlightItem: (Number(currentHightlight)-1).toString()
                })
            }
        }
    }

    updateHighlightEvent(event) {
        if (this.props.showDropdown === false) {
            this.setState({
                highlightItem: -1
            })
        }
    }

    render() {
    return (
        <>
        <div className={logo.grid}>
            <img src="https://i.imgur.com/QTQETFB.png" className={logo.logo}></img>
            <div className= {this.props.showDropdown ? "dropdown show" : "dropdown"}> 
                <input 
                    type="text" className={logo.inputbox} autoComplete="off"
                    
                    placeholder="Search keyword, vehicle, part #, etc" 
                    name="searchText" data-toggle={this.props.showDropdown ? "dropdown" : ""} 
                    onChange={this.props.searchingItem} 
                    onClick={this.updateHighlightEvent.bind(this)}
                    value={this.props.inputValue} 
                    onKeyDown={this.pressingKey.bind(this)}
                ></input>
            
                <div className={this.props.showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                
                    <ul className={logo.dropdowntext}>
                        {this.props.searchItems.map( (item, index) => ( 
                             <li item={item} key={index} type="button"
                             className={"dropdown-item"+ ' ' + logo.dropdownList}  
                             onMouseOver={this.highlightItem.bind(this)}
                             style={{backgroundColor:
                                  Number(this.state.highlightItem) === index ? '#666666' : 'white',
                                  color: Number(this.state.highlightItem) === index ? 'white' : '#666666',
                                  fontWeight: Number(this.state.highlightItem) === index ? 'bold' : 'normal'
                                }}
                             id ={index} 
                             onClick={ (event) => {this.props.itemSelect(event, item, index)}}
                             >{item}
                              {index===0 ? <p className={logo.searchSuggestion}
                                >Search Suggestions
                                </p> : ""}
                             </li>
                        ))}
                    </ul>
                </div>
                
                <input type="submit" className={logo.searchicon}></input>
            </div>

            <span className={logo.searchtext}>Ex. 04 Bedazzled Wheel  
                <span className={logo.searchexample}>
                    See More Examples
                </span>
            </span>
        </div>
        </>
    )
}
}

export default Logo;



        // $(document).ready(function() {
            // console.log(this.state.highlightItem)
            // $("button").bind("mouseenter focusin focusout mouseleave",
            // function(event) {
            //     var currentID = $( '#' + event.currentTarget.id);
            //     if (event.type === "focusin") {
            //         $("button").css({"background-color": "white", "color":"black", "outline":"none"})
            //         currentID.css({"background-color":"#666666", "color":"white", "outline":"none"});
            //     } else if (event.type ==="mouseenter") {
            //         $("button").css({"background-color": "white", "color":"black", "outline":"none"})
            //         currentID.css({"background-color":"#666666", "color":"white", "outline":"none"});
            //     } else {
            //         $("button").css({"background-color": "white", "color":"black", "outline":"none"})
            //     }
            //     }
            // )
        // }) 