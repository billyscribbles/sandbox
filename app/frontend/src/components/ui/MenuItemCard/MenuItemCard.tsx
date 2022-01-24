import React from 'react';
import Image from 'next/image';
import { Header } from 'semantic-ui-react';
import { StyledSegment, MenuCardWrapper, ImageWrapper, TextWrapper, StyledDescriptionText } from './MenuItemCard.style';

export type MenuCardProps = {
    name?: string;
    description?: string;
    price?: string;
    photoURL?: string;
};

export default function MenuCard({ name, description, price, photoURL }: MenuCardProps): JSX.Element {
    const photoURLtoDisplay = function(): string {
        if (photoURL === '' || photoURL === undefined) {
            return '/images/white-image.png';
        } else return photoURL;
    };

    return (
        <StyledSegment raised>
            <MenuCardWrapper>
                <TextWrapper>
                    <Header as="h4">{name}</Header>
                    <StyledDescriptionText>{description}</StyledDescriptionText>
                    <p>{price}</p>
                </TextWrapper>
                <ImageWrapper>
                    <Image priority src={photoURLtoDisplay()} height={250} width={250} alt={name} />
                </ImageWrapper>
            </MenuCardWrapper>
        </StyledSegment>
    );
}
