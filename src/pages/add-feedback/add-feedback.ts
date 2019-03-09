import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataService } from '../../app/data.service';
import swal from 'sweetalert';

/**
 * Generated class for the AddFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-feedback',
  templateUrl: 'add-feedback.html',
})
export class AddFeedbackPage {
  feedBack:any;
  myDate = new Date();
  @ViewChild('ruleaddform') myForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFeedbackPage');
    let date = new Date();
    console.log(date)
  }
  goToBack(){
    this.navCtrl.push(HomePage);
  }
  savefeedback(value){
    var getDate = new Date()
    var getData = JSON.parse(localStorage.getItem("userdetails"));
    let data  = {
      'userId':getData.user._id,
      'date':getDate,
      'repName':value.nameRep,
      'customerName':value.customerName,
      'issuseType':value.issuseType,
      'issuseDes':value.issuseDes,
      'status':value.status,
      'readStatus':0
    }
    this.dataservice.addFeedbackService(data).subscribe(res=>{
      this.feedBack=res;
      swal("Oh noes!",res.message);
      this.myForm.resetForm()
    })
  }
}
