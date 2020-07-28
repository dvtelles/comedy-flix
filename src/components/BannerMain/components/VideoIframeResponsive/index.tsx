import React, {FC} from 'react';
import { VideoContainer, ResponsiveIframe } from './styles';

export const VideoIframeResponsive: FC<{youtubeId : string}> = ({youtubeId}) => {

    return (
        <VideoContainer>
            <ResponsiveIframe
            title="Titulo do Iframe"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </VideoContainer>
    )
}