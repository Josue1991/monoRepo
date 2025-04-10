import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Asegúrate de importar el módulo de la librería
import { SharedUiModule } from '@org/libs/shared-components';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedUiModule  // Importa el módulo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
