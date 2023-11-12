import {Routes} from '@angular/router';
import {SearchComponent} from "./test/search.component";

export const routes: Routes = [
	{
		component: SearchComponent,
		path: "search"
	},
	{
		path: "",
		redirectTo: "search",
		pathMatch: 'full'
	}
];
