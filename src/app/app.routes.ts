import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landingPage/landingPage.component";

import { TestSassComponent } from "./test-sass/test-sass.component";
// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'landing',
    component: LandingPageComponent,
    
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '/testsass',
    component: TestSassComponent,
    
  },
  
];

export const appRouterModule = { 
  routes : RouterModule.forRoot(routes),
  components: [ LandingPageComponent,TestSassComponent]
};