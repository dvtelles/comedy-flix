import React, { FC } from 'react'

import { getYoutubeId } from '../../../../utils/youtube'
import { VideoCardContainer } from './styles'

type VideoCardProperties = {
    videoTitle: string
    videoURL: string
    categoryColor: string
}

export const VideoCard: FC<VideoCardProperties> = ({
    videoTitle,
    videoURL,
    categoryColor,
}) => {
    const image = `https://img.youtube.com/vi/${getYoutubeId(
        videoURL
    )}/hqdefault.jpg`

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
