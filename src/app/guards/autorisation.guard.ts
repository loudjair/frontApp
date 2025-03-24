import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const autorisationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.getUser2() == undefined){
    authService.initUser();
  }
  else{
    if(authService.getUser2().role == 'superAdmin' || 'administrateur'){
      return true;
    }
  }
  return router.parseUrl('/compte');
};
