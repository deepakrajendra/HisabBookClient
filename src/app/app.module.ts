import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule} from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ProductsFeatureComponent } from './products-feature/products-feature.component';
import { MetalsComponent } from './products-feature/metals/metals.component';
import { PurityComponent } from './products-feature/purity/purity.component';
import { AddMetalFormComponent } from './products-feature/metals/add-metal-form/add-metal-form.component';

const appRoutes: Routes = [
  { path: 'products-feature', component: ProductsFeatureComponent,
    children: [
      { path: '', redirectTo: '/metals', pathMatch: 'full' },
      { path: 'metals', component: MetalsComponent },
      { path: 'purity', component: PurityComponent }
      ]
   },
 
  { path: '',
    redirectTo: '/products-feature',
    pathMatch: 'full'
  },
  { path: '**', component: ProductsFeatureComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, TabsModule.forRoot(),
    ModalModule.forRoot(),
    AgGridModule.withComponents([]),
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, SideNavComponent, TopNavComponent, ProductsFeatureComponent, MetalsComponent, PurityComponent, AddMetalFormComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [AddMetalFormComponent]
})

export class AppModule { 


}
