import { Injectable } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, XHRBackend } from '@angular/http';

export interface User{
    name:string,
    age:number,
    city:string
}
@Injectable()

export class DataService{   
    userloginservice:any;
    AddFeedBack:any;
    baseURL='https://medicaltracking.herokuapp.com'

    constructor(public http:Http) {}
   
    /* login service */
    login(value){
        return this.http.post(this.baseURL+'/user/login',value)
        .map(result=>this.userloginservice=result.json())
      }
    /* end */

    addFeedbackService(value){
        return this.http.post(this.baseURL+'/feedback/addFeedBack',value)
        .map(result=>this.AddFeedBack=result.json())
    }
    /* find feedbacklist */
    findFeedBackList(value){
        return this.http.post(this.baseURL+'/feedback/finduserFeedBack',value)
        .map(result=>this.AddFeedBack=result.json())
    }
    /* end */

    /** read feedback */
    readfeedbackservice(value){
        return this.http.post(this.baseURL+'/feedback/readFeedback',value)
        .map(result=>this.AddFeedBack=result.json())
    }
    /* end */

    /* del feedback */
    delfeedbackservice(value){
        return this.http.post(this.baseURL+'/feedback/delFeedback',value)
        .map(result=>this.AddFeedBack=result.json())
    }
    /* end */
}
