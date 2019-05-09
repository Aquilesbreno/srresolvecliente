import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitaOrcamentoPage } from './solicita-orcamento';


@NgModule({
  declarations: [
    SolicitaOrcamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitaOrcamentoPage),
  ],
})
export class SolicitaOrcamentoPageModule {}
