import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CounterComponent } from "./counter/counter.component";

const routes: Routes = [
    { path: "", redirectTo: "/counter", pathMatch: "full" },
    { path: "counter", component: CounterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
