export interface Poll {
    id?:number;
    name:string;
    finish:Date;
    token:string;
    options:string | string[];
    author:number;
}
