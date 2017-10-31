import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Comment } from '../../models/comment.interface';

import { SystemProvider } from '../../providers/system/system';

import { CommentDetailPage } from '../../pages/comment-detail/comment-detail';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-comments',
	templateUrl: 'comments.html',
})
export class CommentsPage {

	items: Observable<Array<Comment>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CommentsPage');
	}

	getItems() {
		this.items = this.system.getComments();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push(CommentDetailPage, { id: id });
	}

}
