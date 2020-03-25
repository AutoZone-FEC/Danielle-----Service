import React from 'react';
import logo from './logo.css';
import $ from "jquery";

let Logo = ({showDropdown, searchingItem, searchIDs, itemSelect, searchItems, searchItemOne, inputValue}) => {
    
    $(document).ready(function() {
        $("button").bind("mouseenter focusin focusout mouseleave",
        function(event) {
            var currentID = $( '#' + event.currentTarget.id);
            if (event.type === "focusin") {
                $("button").css({"background-color": "white", "color":"black", "outline":"none"})
                currentID.css({"background-color":"#666666", "color":"white", "outline":"none"});
            } else if (event.type ==="mouseenter") {
                $("button").css({"background-color": "white", "color":"black", "outline":"none"})
                currentID.css({"background-color":"#666666", "color":"white", "outline":"none"});
            } else {
                $("button").css({"background-color": "white", "color":"black", "outline":"none"})
            }
            }
        )
    }) 
      
    return (
        <>
        <div className={logo.grid}>
            <img src="https://i.imgur.com/QTQETFB.png" className={logo.logo}></img>
            <div className= {showDropdown ? "dropdown show" : "dropdown"}> {/* Bootstrap dropdown class*/}
                <input 
                    type="text" className={logo.inputbox} autoComplete="off"
                    
                    placeholder="Search keyword, vehicle, part #, etc" 
                    name="searchText" data-toggle={showDropdown ? "dropdown" : ""} 
                    onChange={searchingItem} value={inputValue} 
                ></input>
            
                <div className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                
                    <span className={logo.dropdowntext}>
                        {searchItems.map( (item, index) => ( 
                             <button item={item} key={index} type="button"
                             className={"dropdown-item"+ ' ' + logo.dropdownList}  
                             id ={index} 
                             onClick={ (event) => {itemSelect(event, item, index)} }>{item}
                              {index===0 ? <p className={logo.searchSuggestion}
                                >Search Suggestions
                                </p> : ""}
                             </button>
                        ))}
                    </span>
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



export default Logo;






    
                        /* First search item in drop down only
                        {searchItemOne.map( (item, index) => ( 
                            <button item={item} key={index} type="button"
                            className={"dropdown-item"+ ' ' + logo.dropdownList
                           }  
                            onClick={ (event) => {itemSelect(event, item)} }>{searchItemOne}
                                <p className={logo.searchSuggestion}
                                >Search Suggestions
                                </p>
                            </button>
                        ))} */

    //     $("button").bind("mouseenter focusin focusout mouseleave", 
    //     function(event) { 
    //         if (event.type === "mouseenter" || event.type === "focusin") {
    //             $(this).css("background-color", "red")
    //         } else {
    //            $(this).css("background-color", "yellow")
    //         } 
    // });
                // var workingArray = [];
                // workingArray.push(searchItemOne[0]+'<p class="r-10qygMYrAS8d9FvIqk5">Search Suggestions</p>')
                // for (var item in searchItems) {
                //     workingArray.push(searchItems[item])
                // }
                // console.log("test---",event.type)
                // if (event.type === "mouseleave") {
                //     var mouseLeaveArray = []
                //     mouseLeaveArray.push(workingArray.indexOf(event.currentTarget.innerHTML));
                // }
                // console.log(mouseLeaveArray)
                // // if (event.type === "focusin") {
                // //     console.log(mouseLeaveArray)
                // //     // $(nextItem).addClass(logo.event_hover)
                // //     // event.currentTarget.innerHTML = nextItem;
                // // }
                // console.log(event.type, workingArray.indexOf(event.currentTarget.innerHTML))

    // function() {
            //    $(this).addClass(logo.event_hover);
            //    $("button").removeClass(logo.event_focus);
            //    $(this).removeClass(logo.event);
            // }, 
            // function() {
            //     $(this).removeClass(logo.event_hover);
            //     $(this).removeClass(logo.event);
            // }, 

  // $("button").on({
        //     focusin: function() {
        //        $(this).addClass(logo.event_focus);
        //        $("button").removeClass(logo.event_hover);
        //        $(this).removeClass(logo.event);
        //     }, 
        //     focusout: function() {
        //         $(this).removeClass(logo.event_focus);
        //         $(this).addClass(logo.event);
        //      }
        //     }
        // )