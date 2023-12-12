import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import {fetchFromAPI} from '../utils/fetchFromAPI';

import {Sidebar, Videos} from './';

function Feed(props) {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]); //pass this state bto the Video component

    //call the fetchFromAPI as soon as this component loads
    useEffect(()=>{

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))


    },[selectedCategory])


    return (
        <div>
            <Stack sx={{flexDirection: {sx:"column", md:"row"} }}>
                {/* Sidebar */}
                <Box sx={ {height: {sx:"auto", md:"92vh"}, borderRight: "1px solid #3d3d3d", px: {sx:0, md:2} }}>

                    {/* Sidebar Component*/}
                    <Sidebar 
                        selectedCategory={selectedCategory} 
                        setSelectedCategory={setSelectedCategory}    
                    /> 

                    <Typography 
                        className="copyright" 
                        variant="body2" 
                        sx={{mt:1.5, color: '#FFF'}} 
                    >
                        Copyright 2023 Karthi
                    </Typography>

                </Box>
                {/* Main div */}
                <Box 
                    p={2} 
                    sx={{overflowY:'auto', height:'90vh', flex:2}}
                >
                    <Typography 
                        varient="h4" fontWeight="bold" 
                        mb={2} 
                        sx={{color: 'white'}}
                    >
                        {/* selectedCategory comes from State */}
                        {selectedCategory} <span style= {{color:'#F31503'}}>Videos</span>
                    </Typography>

                    <Videos videos={videos} />
                </Box>
            </Stack>
        </div>
    );
}

export default Feed;