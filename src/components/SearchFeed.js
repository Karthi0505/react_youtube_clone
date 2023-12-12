import {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';

import {fetchFromAPI} from '../utils/fetchFromAPI';
import {Videos} from './';

function SearchFeed(props) {
    const [videos, setVideos] = useState([]); //pass this state bto the Video component
    const {searchTerm} = useParams();

    //call the fetchFromAPI as soon as this component loads
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))

    }, [searchTerm]);


    return (
        
        <Box p={2} sx={{ overflowY:'auto', height:'90vh', flex:2 }}>

            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: '#FFF'}} 
            >
                Search Results for: 
                <span style={{color:'#F31503'}}>
                    {searchTerm}
                </span> videos
            </Typography>
            
            <Videos videos={videos} />
        </Box>
        
    );
}

export default SearchFeed;