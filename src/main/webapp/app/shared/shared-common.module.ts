import { NgModule } from '@angular/core';

import { BallNerdSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BallNerdSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BallNerdSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BallNerdSharedCommonModule {}
