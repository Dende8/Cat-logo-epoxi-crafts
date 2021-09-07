import { Iimage } from 'src/app/models/iapp';

export interface Icrafts {
    gallery: Igallery[];
}

export interface Igallery {
    title: string;
    gallery: Igal[];
}

export interface Igal {
    name: string;
    img: Iimage;
    price: string;
}
