import React, {FC} from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import {VideoCard} from './components/VideoCard';

interface VideoCardGroupProperties {
    ignoreFirstVideo: boolean,
    category: any
}

export const Carousel: FC<VideoCardGroupProperties> = ({ignoreFirstVideo, category}) => {
    const categoryTitle = category.titulo;
    const categoryColor = category.cor;
    const categoryExtraLink = category.link_extra;
    const videos : any = category.videos;

    return (
        <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video: any, index: number) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
    )
}

