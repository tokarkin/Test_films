import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import photo from '../../images/358477.700xp.jpg'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Planets from "./Planets";






const Films =(props)=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    useEffect(()=>{
        props.getPlanets(props.film.planets,props.film.episode_id);
        props.getCharacters(props.film.characters,props.film.episode_id);
        props.getStarships(props.film.starships,props.film.episode_id);
    },[]);

    const handleExpandClick = ()  => {
        setExpanded(!expanded);
    };

    return(
        <Grid item xs={6}>
            <Card raised={true} onClick={handleExpandClick}>
                <CardHeader
                    title={props.film.title}
                    subheader={props.film.release_date}
                />
                <CardMedia
                    className={classes.media}
                    image={photo}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" >
                        Director:{props.film.director}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Producer:{props.film.producer}
                    </Typography>

                </CardContent>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                           Planets: {props.film.planets !== String ?props.film.planets.map((el,key)=>
                            <ul key={key} >
                             {el.name !== undefined? <li>{el.name}</li>:<span></span>}
                            </ul>)
                        :<div></div>}

                            Characters: {props.film.characters !== String ?props.film.characters.map((el,key)=>
                            <ul key={key}>
                                {el.name !== undefined? <li>{el.name}</li>:<span></span>}
                            </ul>)
                            :<div></div>}

                            Starships: {props.film.starships !== String ?props.film.starships.map((el,key)=>
                                <ul key={key}>
                                    {el.name !== undefined? <li>{el.name}</li>:<span></span>}
                                </ul>)
                            :<div></div>}

                            {props.film.opening_crawl}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
};
export default Films;

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin:'5px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
