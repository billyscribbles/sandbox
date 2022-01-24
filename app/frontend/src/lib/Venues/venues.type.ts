export interface IVenuesResults {
    restaurants: IVenue[];
}

export interface IVenue {
    id: number;
    uniqueID: string;
    displayName: string;
    navigationURL: string;
    address?: string;
    surburb?: string;
    country?: string;
    phone?: string;
    email?: string;
    bannerPhotoURL: string;
    serverOptions?: string[];
    message?: string;
    openingHours?: IOpeningHour[];
    webisiteURL?: string;
    instagramURL?: string;
    facebookURL?: string;
    reservation?: string[];
}

export interface IOpeningHour {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}
