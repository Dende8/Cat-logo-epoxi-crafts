import { IimageAPI } from "src/app/models/iappapi";


export interface IhomeAPI {
    hero: IheroAPI;
    samples: IsamplesAPI[];
 }
 
 export interface IheroAPI {
     mainImage: IimageAPI;
     mainText: string;
 }
 
 export interface IsamplesAPI {
     title: string;
     img : IimageAPI;
 }