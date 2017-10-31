import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { PostsPage } from '../pages/posts/posts';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { CommentsPage } from '../pages/comments/comments';
import { CommentDetailPage } from '../pages/comment-detail/comment-detail';
import { AlbumsPage } from '../pages/albums/albums';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';
import { PhotosPage } from '../pages/photos/photos';
import { PhotoDetailPage } from '../pages/photo-detail/photo-detail';
import { TodosPage } from '../pages/todos/todos';
import { TodoDetailPage } from '../pages/todo-detail/todo-detail';
import { UsersPage } from '../pages/users/users';
import { UserDetailPage } from '../pages/user-detail/user-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SystemProvider } from '../providers/system/system';

@NgModule({
	declarations: [
		MyApp,

		TabsPage,

		PostsPage,
		PostDetailPage,
		CommentsPage,
		CommentDetailPage,
		AlbumsPage,
		AlbumDetailPage,
		PhotosPage,
		PhotoDetailPage,
		TodosPage,
		TodoDetailPage,
		UsersPage,
		UserDetailPage,
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,

		TabsPage,

		PostsPage,
		PostDetailPage,
		CommentsPage,
		CommentDetailPage,
		AlbumsPage,
		AlbumDetailPage,
		PhotosPage,
		PhotoDetailPage,
		TodosPage,
		TodoDetailPage,
		UsersPage,
		UserDetailPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},

		SystemProvider
	]
})
export class AppModule {}
