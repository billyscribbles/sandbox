import React from 'react';
import Image from 'next/image';
import { HeadingBannerWrapper, ImageWrapper, StyledHeader } from './HeadingBanner.style';

export type HeadingBannerProps = {
    displayName: string;
    bannerPhotoURL: string;
};

export default function HeadingBanner({ displayName, bannerPhotoURL }: HeadingBannerProps): JSX.Element {
    const bannerPhotoToDisplay = bannerPhotoURL !== '' ? bannerPhotoURL : '/images/white-image.png';

    return (
        <HeadingBannerWrapper>
            <ImageWrapper>{<Image priority src={bannerPhotoToDisplay} height={160} width={160} />}</ImageWrapper>
            <StyledHeader as="h2">{displayName}</StyledHeader>
        </HeadingBannerWrapper>
    );
}
