"use strict";
var core_1 = require("@angular/core");
var CounterComponent = (function () {
    function CounterComponent() {
        this.counter = 0;
        this.buttonEnabled = true;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.counter++;
        if (this.counter === 10) {
            this.buttonEnabled = false;
        }
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    core_1.Component({
        selector: "ns-counter",
        moduleId: module.id,
        templateUrl: "./counter.component.html",
    }),
    __metadata("design:paramtypes", [])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBT2xELElBQWEsZ0JBQWdCO0lBSTNCO1FBSEEsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBRUwsQ0FBQztJQUVqQiwyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUN4QyxDQUFDOztHQUNXLGdCQUFnQixDQVk1QjtBQVpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1jb3VudGVyXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY291bnRlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcbiAgY291bnRlciA9IDA7XG4gIGJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICB0aGlzLmNvdW50ZXIrKztcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSAxMCkge1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=