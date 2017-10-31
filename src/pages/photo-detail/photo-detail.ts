import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Photo } from '../../models/photo.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the PhotoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-photo-detail',
	templateUrl: 'photo-detail.html',
})
export class PhotoDetailPage {

	id: number;
	item: Observable<Photo>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad PhotoDetailPage');
		this.id = this.navParams.get('id');
		this.system.getPhotoById(this.id).subscribe(item => this.item = item);
	}

}
