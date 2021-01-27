import React, {Component} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";

class MapApi extends Component{
    render(){
        const mapStyles={
            width:"500px",
            height:"500px",
            display:"flex",
            justify_content:"center"
        };
        return(
            <div className="MapApi">
                <Map google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{lat:37.544448, lng:127.06864}}></Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({region:"kr",
    apiKey:"AIzaSyDWQv0DgCy7TWZetffVgCHGSuNdIJcA100"
    
})(MapApi);