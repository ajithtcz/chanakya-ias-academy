export class Session {

    getAccessToken() {
        return localStorage.getItem('cia_token');
      }
    
      getUserDetails() {
        const token = this.getAccessToken();
        let payload;
        if (token) {
          payload = token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        } else {
          return null;
        }
      }
    
}