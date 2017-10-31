import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Comment } from '../../models/comment.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the CommentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-comment-detail',
	templateUrl: 'comment-detail.html',
})
export class CommentDetailPage {

	id: number;
	item: Observable<Comment>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad CommentDetailPage');
		this.id = this.navParams.get('id');
		this.system.getCommentById(this.id).subscribe(item => this.item = item);
	}

}
