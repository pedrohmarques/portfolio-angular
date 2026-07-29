import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './core/transloco-loader';
import { provideHttpClient } from '@angular/common/http';
import { SvgIconService } from './services/svg-icon.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['pt-BR', 'en-US'],
        defaultLang: 'pt-BR',
        reRenderOnLangChange: true
      },
      loader: TranslocoHttpLoader
    }),
    provideAppInitializer(async () => {
      const svgService = inject(SvgIconService);
      svgService.registerIcons();
    })
  ]
};
