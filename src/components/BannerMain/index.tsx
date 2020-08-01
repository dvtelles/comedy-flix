import React, { FC } from 'react';
import {VideoIframeResponsive} from './components/VideoIframeResponsive';
import {Container,  Item, Description,  Title,  BannerMainContainer,  WatchButton} from './styles';
import { getYoutubeId } from '../../utils/youtube';

type BannerMainProperties = {
    videoTitle: string,
    videoDescription: string
    url: string
}

export const BannerMain: FC<BannerMainProperties> = ({ videoTitle, videoDescription, url }) => {
    const youtubeId = getYoutubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <Container>
                <Item>
                    <Title>{videoTitle}</Title>
                    <Description>{videoDescription}</Description>
                </Item>

                <Item>
                    <VideoIframeResponsive youtubeId={youtubeId} />
                    <WatchButton>Assistir</WatchButton>
                </Item>
            </Container>
        </BannerMainContainer>
    )
}
