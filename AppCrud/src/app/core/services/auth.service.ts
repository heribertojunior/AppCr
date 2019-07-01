import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AuthOptions, AuthProvider, User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null));
  }

  authenticate({ isSingIn, provider, user }: AuthOptions): Promise<auth.UserCredential> {
    let operation: Promise<auth.UserCredential>;

    if (provider !== AuthProvider.Email) {
      operation = this.singInPopup(provider);
    } else {
      operation = isSingIn ? this.signInEmailAndPass(user) : this.signUpEmailAndPass(user);
    }

    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
  private signInEmailAndPass({ email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  private signUpEmailAndPass({ name, email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credentials =>
        credentials.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credentials)
      );
  }
  private singInPopup(provider: AuthProvider): Promise<auth.UserCredential> {
    let singInProvider = null;
    switch (provider) {
      case AuthProvider.Facebook:
        singInProvider = new auth.FacebookAuthProvider();
        break;
    }
    return this.afAuth.auth.signInWithPopup(singInProvider);
  }
}
