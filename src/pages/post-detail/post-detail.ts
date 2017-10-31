import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Post } from '../../models/post.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-post-detail',
	templateUrl: 'post-detail.html',
})
export class PostDetailPage {

	id: number;
	item: Observable<Post>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad PostDetailPage');
		this.id = this.navParams.get('id');
		this.system.getPostById(this.id).subscribe(item => this.item = item);
	}

}
