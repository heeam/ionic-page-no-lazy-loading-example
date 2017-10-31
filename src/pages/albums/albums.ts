import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Album } from '../../models/album.interface';

import { SystemProvider } from '../../providers/system/system';

import { AlbumDetailPage } from '../../pages/album-detail/album-detail';

/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-albums',
	templateUrl: 'albums.html',
})
export class AlbumsPage {

	items: Observable<Array<Album>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AlbumsPage');
	}

	getItems() {
		this.items = this.system.getAlbums();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push(AlbumDetailPage, { id: id });
	}

}
