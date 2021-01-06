import React from "react";
import HomePresenter from "./HomePresenter";
import {MyApi} from "LOLapi";

export default class extends React.Component{
    async componentDidMount(){
        try{
            const {data:{data:{movies}}} = await MyApi.PHBoon();
            console.log(movies);

            const gettin = await MyApi.PHBoon();
            console.log(gettin);
        }catch{
            console.log("err");
        }
    }

    render(){
        return (<HomePresenter/>)
    }
}