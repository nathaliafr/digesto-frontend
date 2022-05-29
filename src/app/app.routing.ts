import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes , RouterModule} from "@angular/router";  
import { ProcessoComponent } from "./processo/processo.component";

const APP_ROUTER: Routes = [
    {path :'',component: ProcessoComponent },
 
];


export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);

