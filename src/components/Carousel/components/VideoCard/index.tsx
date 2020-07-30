import React, {FC} from 'react';
import { VideoCardContainer } from './styles';

type VideoCardProperties = {
    videoTitle: string, 
    videoURL: string, 
    categoryColor: string
};

const REGEX = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
const getYoutubeId = (youtubeURL : string) => youtubeURL.replace(REGEX, '$7');

export const VideoCard: FC<VideoCardProperties> = 
({videoTitle, videoURL, categoryColor}) => {

    const image = `https://img.youtube.com/vi/${getYoutubeId(videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={image}
            target="_blank"
            href={videoURL}
            borderColor={categoryColor}
            title={videoTitle}
        />
    )
}