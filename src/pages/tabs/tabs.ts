import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsPage } from '../../pages/posts/posts';
import { CommentsPage } from '../../pages/comments/comments';
import { AlbumsPage } from '../../pages/albums/albums';
import { PhotosPage } from '../../pages/photos/photos';
import { TodosPage } from '../../pages/todos/todos';
import { UsersPage } from '../../pages/users/users';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1Root: any = PostsPage;
	tab2Root: any = CommentsPage;
	tab3Root: any = AlbumsPage;
	tab4Root: any = PhotosPage;
	tab5Root: any = TodosPage;
	tab6Root: any = UsersPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}
