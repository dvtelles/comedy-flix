import React, { FC } from 'react';
import { VideoContainer, ResponsiveIframe } from './styles';

type VideoIframeResponsiveProps = {
    youtubeId: string
}

export const VideoIframeResponsive: FC<VideoIframeResponsiveProps> = ({ youtubeId }) => (
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
