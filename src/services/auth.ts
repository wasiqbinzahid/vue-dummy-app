interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials extends SignInCredentials {
  name: string;
}

export const authService = {
  async signIn(credentials: SignInCredentials): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1500);
    });
  },

  async signUp(credentials: SignUpCredentials): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email && credentials.password && credentials.name) {
          resolve();
        } else {
          reject(new Error('Invalid information'));
        }
      }, 1500);
    });
  },
}; 