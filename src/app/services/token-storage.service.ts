import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private accessToken: string | null = null;

  setToken(token: string | null): void {
    this.accessToken = token;
  }

  getToken(): string | null {
    return this.accessToken;
  }

  clear(): void {
    this.accessToken = null;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}
