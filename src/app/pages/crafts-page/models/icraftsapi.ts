import { IimageAPI } from 'src/app/models/iappapi';

export interface IcraftsAPI {
    gallery: IgalleryAPI[];
}

export interface IgalleryAPI {
    title: string;
    gallery: IgalAPI[];
}

export interface IgalAPI {
    name: string;
    img: IimageAPI;
    price: string;
}
