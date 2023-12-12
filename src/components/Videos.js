import React from 'react';
import {Stack, Box} from '@mui/material'; 
import {VideoCard, ChannelCard} from './';

function Videos(props) {
    
    if(!props.videos?.length)  return "Loading..." ;

    return (
        <Stack direction={props.direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>

            {props.videos.map((item, idx)=>(
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
            
        </Stack>
    );
}

export default Videos;