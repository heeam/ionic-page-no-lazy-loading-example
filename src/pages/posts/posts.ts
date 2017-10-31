import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Post } from '../../models/post.interface';

import { SystemProvider } from '../../providers/system/system';

import { PostDetailPage } from '../../pages/post-detail/post-detail';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-posts',
	templateUrl: 'posts.html',
})
export class PostsPage {

	items: Observable<Array<Post>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PostsPage');
	}

	getItems() {
		this.items = this.system.getPosts();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push(PostDetailPage, { id: id });
	}

}
