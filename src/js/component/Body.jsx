import React from "react";
import BodyHead from "./BodyHead.jsx";
import BodyCenter from "./BodyCenter.jsx";
import BodyFooter from "./BodyFooter.jsx";


const Body = ()=>{
    return(
    <div class=" container body">
        <div class="row row-max">
            <div class="col col-max">
                <div class="row row-int">
                    <div class="col-sm-3 col-int">
                        <div class="row row-3">
                            <BodyHead/>
                            <BodyCenter/>
                            <BodyFooter/>
                        </div>
                    </div>
                    <div class="col-sm-3 col-int">
                        <div class="row row-3">
                            <BodyHead/>
                            <BodyCenter/>
                            <BodyFooter/>
                        </div>
                    </div>
                    <div class="col-sm-3 col-int">
                        <div class="row row-3">
                            <BodyHead/>
                            <BodyCenter/>
                            <BodyFooter/>
                        </div>
                    </div>
                    <div class="col-sm-3 col-int">
                        <div class="row row-3">
                            <BodyHead/>
                            <BodyCenter/>
                            <BodyFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Body;