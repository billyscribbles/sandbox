import React from 'react';
import _ from 'lodash';
import Head from '../../src/components/next/Head';
import { getVenues, getVenuesDetails } from '../../src/lib/Venues/venues';
import { IVenue } from '../../src/lib/Venues/venues.type';
import { getMenuDetails } from '../../src/lib/Menu/menu';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Grid } from 'semantic-ui-react';
import MenuItemCardPlaceholder from '../../src/components/ui/MenuItemCard/MenuItemCardPlaceholder';
import MenuItemCard from '../../src/components/ui/MenuItemCard/MenuItemCard';
import { IItem, IMenu } from '../../src/lib/Menu/menu.type';
import { StyledHeader } from '../../src/styles/pages/venue.style';
import ErrorMessage from '../../src/components/ui/ErrorMessages/ErrorMessage';
import MenuLayout from '../../src/layouts/MenuLayout';
import SubNavigation from '../../src/components/SubNavigation/SubNavigation';
import HeadingBanner from '../../src/components/HeadingBanner/HeadingBanner';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getVenues();

    return { paths, fallback: false };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const venueDetailsData = await getVenuesDetails(params.id);
    return {
        props: {
            venueDetailsData
        }
    };
};

export type VenueProps = {
    venueDetailsData: IVenue;
};

export default function Venue({ venueDetailsData }: VenueProps): JSX.Element {
    const { data, isLoading, isError } = getMenuDetails(venueDetailsData.uniqueID);

    const placeholders: Array<JSX.Element> = [];
    _.times(16, (i: number) => {
        placeholders.push(
            <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                <MenuItemCardPlaceholder />
            </Grid.Column>
        );
    });

    const subMenuTitles = React.useCallback(
        function() {
            const subMenuTitles: string[] = [];

            if (data) {
                data.menu?.map(function(subCategory: IMenu) {
                    subMenuTitles.push(subCategory.submenu);
                });
            }
            return subMenuTitles;
        },
        [data]
    );

    return (
        <>
            <Head siteTitle={`NextMenu - ` + venueDetailsData.displayName} />
            <MenuLayout>
                <HeadingBanner
                    displayName={venueDetailsData.displayName}
                    bannerPhotoURL={venueDetailsData.bannerPhotoURL}
                />
                {isLoading ? (
                    <Grid padded>{placeholders}</Grid>
                ) : (
                    <>
                        <SubNavigation submenus={subMenuTitles()} prepRequired />
                        {data &&
                            data.menu?.map(function(subCategory: IMenu, subCategoryIndex: number) {
                                return (
                                    <div key={subCategoryIndex}>
                                        <StyledHeader as="h3">{subCategory.submenu}</StyledHeader>
                                        <Grid padded={'horizontally'}>
                                            {subCategory.items?.map(function(
                                                item: IItem | undefined,
                                                itemIndex: number
                                            ) {
                                                if (item) {
                                                    const { name, description, price, photoURL } = item;
                                                    return (
                                                        <Grid.Column
                                                            mobile={16}
                                                            tablet={8}
                                                            computer={4}
                                                            key={itemIndex}
                                                        >
                                                            <MenuItemCard
                                                                name={name}
                                                                description={description}
                                                                price={price}
                                                                photoURL={photoURL}
                                                            />
                                                        </Grid.Column>
                                                    );
                                                }
                                            })}
                                        </Grid>
                                    </div>
                                );
                            })}
                        {isError && <ErrorMessage />}
                    </>
                )}
            </MenuLayout>
        </>
    );
}
