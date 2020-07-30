import React, { FC } from 'react';
import {VideoIframeResponsive} from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

const REGEX = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/; 
const getYoutubeId = (url: string) => url.replace(REGEX, '$7');

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
            <ContentAreaContainer>
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>

                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>

                <ContentAreaContainer.Item>
                    <VideoIframeResponsive
                        youtubeId={youtubeId}
                    />
                    <WatchButton>
                        Assistir
          </WatchButton>
                </ContentAreaContainer.Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    );
}
