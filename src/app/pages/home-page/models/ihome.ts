import { Iimage } from "src/app/models/iapp";

export interface Ihome {
   hero: Ihero;
   samples: Isamples[];
}

export interface Ihero {
    mainImage: Iimage;
    mainText: string;
}

export interface Isamples {
    title: string;
    img : Iimage;
}

