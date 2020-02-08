import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getCharacters, getFilmsThunk, getPlanets, getStarships} from "../../thunk/films-thunk";
import Films from "../Film/Film";
import Grid from "@material-ui/core/Grid";
import Find from "../Find/Find";
import CircularProgress from "@material-ui/core/CircularProgress";
import {alphabetSort} from "../../redux/alphabetSort-reducer";
import {deleteData} from "../../redux/planets-reducers";
import Planets from "../Film/Planets";



const MainPage=(props)=>{
    useEffect(()=>{
        props.getFilmsThunk();
    },[]);


    const [sort, getSort]= useState(false);

    let sortByName = (data)=>{
        getSort(!data);
    };


    return(
            <Grid container spacing={3}>
                <Grid item  xs={12}>
                    <Find sortByName={sortByName} alphabetSort={props.alphabetSort}  />
                </Grid>

                <Grid item xs ={12}>
                    <Grid container  spacing={3}>
                    {
                        props.films !== undefined
                            ? (
                                sort === true
                                    ?
                                [...props.films].sort(function (a, b) {
                                let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
                                if (nameA < nameB)
                                    return -1;
                                if (nameA > nameB)
                                    return 1;
                                return 0;
                            }).map((film, key) => <Films getCharacters={props.getCharacters}
                                                         getPlanets={props.getPlanets} key={key}
                                                         film={film} getStarships={props.getStarships}/>)
                            : props.films.map((film, key) => <Films getCharacters={props.getCharacters}
                                                                    getPlanets={props.getPlanets}
                                                                    getStarships={props.getStarships}
                                                                    key={key} film={film}/>))
                            : <div>
                                <CircularProgress />

                            </div>
                    }
                    </Grid>

                </Grid>

            </Grid>

    )
};



export default connect(state=>({
    films:state.films.films.filter(name => name.title.toUpperCase().includes(state.input.toUpperCase())),

}),{getFilmsThunk,alphabetSort,getPlanets,getStarships,getCharacters})(MainPage);