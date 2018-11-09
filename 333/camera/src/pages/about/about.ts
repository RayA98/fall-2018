import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public picUrl = 'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1e/Shen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203546';

  constructor(private camera: Camera, public navCtrl: NavController) {

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     alert('ERROR');
     console.log(err);
    });
  }




}
