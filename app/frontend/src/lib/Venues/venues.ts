import { IVenue } from './venues.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getVenues(): Promise<any> {
    const res = await fetch('http://localhost:8083/venues/');
    const venues = await res.json();

    return venues.map((venue: IVenue) => ({
        params: { id: venue.uniqueID }
    }));
}

export async function getVenuesDetails(id: string): Promise<IVenue> {
    const res = await fetch(`http://localhost:8083/venues/${id}`);
    return res.json();
}
