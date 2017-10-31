import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-user-detail',
	templateUrl: 'user-detail.html',
})
export class UserDetailPage {

	id: number;
	item: Observable<User>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserDetailPage');
		this.id = this.navParams.get('id');
		this.system.getUserById(this.id).subscribe(item => this.item = item);
	}

}
