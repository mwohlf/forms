import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { ProcessViewComponent } from "./process-view/process-view.component";
import { QrcodeCreationComponent } from "./qrcode-creation/qrcode-creation.component";


export function routerErrorHandler(error: Error): void {
  console.error('router error: ', JSON.stringify(error));
}


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'qrcode-creation', component: QrcodeCreationComponent
  },
  {
    path: 'process-view', component: ProcessViewComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'enabled', // one of 'disabled', 'enabled', 'top'
      enableTracing: false, // log to console for debugging
      errorHandler: routerErrorHandler,
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected', // one of 'legacy', 'corrected'
    })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
