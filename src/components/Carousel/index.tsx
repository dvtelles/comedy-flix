import React, { FC } from 'react'

import { VideoCard } from './components/VideoCard'
import {
    VideoCardGroupContainer,
    VideoCardList,
    Title,
    ExtraLink,
} from './styles'

type Video = {
    titulo: string
    url: string
}

type LinkExtra = {
    text: string
    url: string
}

type VideoCategory = {
    titulo: string
    link?: string
    cor: string
    linkExtra?: LinkExtra
    videos: Video[]
}

type VideoCardGroupProperties = {
    ignoreFirstVideo: boolean
    category: VideoCategory
}

export const Carousel: FC<VideoCardGroupProperties> = ({
    ignoreFirstVideo,
    category,
}) => {
    const categoryTitle = category.titulo
    const categoryColor = category.cor
    const categoryExtraLink = category.linkExtra
    const { videos } = category

    return (
        <VideoCardGroupContainer>
            {categoryTitle && (
                <>
                    <Title style={{ backgroundColor: categoryColor || 'red' }}>
                        {categoryTitle}
                    </Title>
                    {categoryExtraLink && (
                        <ExtraLink href={categoryExtraLink.url} target="_blank">
                            {categoryExtraLink.text}
                        </ExtraLink>
                    )}
                </>
            )}
            <VideoCardList>
                {videos.map((video: Video, index: number) => {
                    if (ignoreFirstVideo && index === 0) {
                        return
                    }

                    return (
                        <li key={video.titulo}>
                            <VideoCard
                                videoTitle={video.titulo}
                                videoURL={video.url}
                                categoryColor={categoryColor}
                            />
                        </li>
                    )
                })}
            </VideoCardList>
        </VideoCardGroupContainer>
    )
}
