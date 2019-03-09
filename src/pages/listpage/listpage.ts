import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import{DataService} from '../../app/data.service';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import swal from 'sweetalert';

/**
 * Generated class for the ListpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpage',
  templateUrl: 'listpage.html',
})
export class ListpagePage implements OnInit {
  feedbackList:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private nav:Nav,
              public dataservice:DataService
              ) {
              
  }
  ngOnInit(){
    var getData = JSON.parse(localStorage.getItem("userdetails"));
    let data = {
      'userId':getData.user._id
    }
    this.dataservice.findFeedBackList(data).subscribe(res=>{
      this.feedbackList=res.result;
    })
  }

  NotificationDetails(value){
    let data  = {
      'userId':value.userId,
      '_id':value._id,
      'readStatus':1
    }
    this.dataservice.readfeedbackservice(data).subscribe(res=>{
      this.feedbackList=res.result;
    })
  }

  ionViewDidLoad() {  }
  goToBack(){
    this.nav.setRoot(HomePage)
  }
  del(value){
    let data = {
      '_id':value._id,
      'userId':value.userId
    }
    this.dataservice.delfeedbackservice(data).subscribe(res=>{
    this.feedbackList=res.result;
    if(res.message =='Delete Successfully'){
      swal("Oh noes!",res.message);
    }else if(res.message=='Cannot Delete'){
      swal("Oh noes!",res.message);
    }
    })
  }
}
