export interface User
{
   // userId:number;
    userName:string;
    emailId:string;
    firstName:string;
    lastName:string;
    userpassword:string;
    roleId:string;
    active:boolean;

}

export interface Useri
{
   userId:number;
    userName:string;
    emailId:string;
    firstName:string;
    lastName:string;
    userpassword:string;
    roleId:string;
    active:boolean;

}

export interface Userl
{
    userName:string | null;
    emailId:string;
    firstName:string;
    lastName:string;
    userpassword:string |null;
    roleId:string;
    active:boolean;


}