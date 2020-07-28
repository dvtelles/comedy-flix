import React, {FC} from 'react';
import { VideoCardContainer } from './styles';

interface VideoCardProperties {
    videoTitle: string, 
    videoURL: string, 
    categoryColor: string
};

export const VideoCard: FC<VideoCardProperties> = 
(props) => {
    const getYoutubeId = function(youtubeURL : string) {
        return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
    };
    const image = `https://img.youtube.com/vi/${getYoutubeId(props.videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={image}
            target="_blank"
            href={props.videoURL}
            style={{ borderColor: props.categoryColor || 'red' }}
            title={props.videoTitle}
        />
    )
}