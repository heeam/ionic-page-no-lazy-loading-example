import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Album } from '../../models/album.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the AlbumDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-album-detail',
	templateUrl: 'album-detail.html',
})
export class AlbumDetailPage {

	id: number;
	item: Observable<Album>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad AlbumDetailPage');
		this.id = this.navParams.get('id');
		this.system.getAlbumById(this.id).subscribe(item => this.item = item);
	}

}

