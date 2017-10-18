var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffDirective } from './diff.directive';
import { LineDiffDirective } from './lineDiff.directive';
import { ProcessingDiffDirective } from './processingDiff.directive';
import { SemanticDiffDirective } from './semanticDiff.directive';
import { LineCompareComponent } from './lineCompare.component';
import { DiffMatchPatch } from './diffMatchPatch';
import { DiffMatchPatchService } from './diffMatchPatch.service';
var DiffMatchPatchModule = (function () {
    function DiffMatchPatchModule() {
    }
    DiffMatchPatchModule = __decorate([
        NgModule({
            declarations: [
                DiffDirective,
                LineDiffDirective,
                ProcessingDiffDirective,
                SemanticDiffDirective,
                LineCompareComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [
                DiffDirective,
                LineDiffDirective,
                ProcessingDiffDirective,
                SemanticDiffDirective,
                LineCompareComponent
            ],
            providers: [
                DiffMatchPatch,
                DiffMatchPatchService
            ]
        })
    ], DiffMatchPatchModule);
    return DiffMatchPatchModule;
}());
export { DiffMatchPatchModule };
//# sourceMappingURL=diffMatchPatch.module.js.map