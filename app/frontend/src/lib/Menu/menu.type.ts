export interface IMenuResults {
    menus: IMenuResult[];
}

export interface IMenuResult {
    id?: number;
    displayName?: string;
    surburb?: string;
    bannerPhotoURL?: string;
    menuType?: string;
    message?: string;
    menu?: IMenu[];
}

export interface IMenu {
    submenu: string;
    items?: IItem[];
}

export interface IItem {
    name?: string;
    description?: string;
    price?: string;
    tags?: string[];
    dietry?: string[];
    photoURL?: string;
}
