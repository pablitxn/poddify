import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        welcome: string;
        greeting: string;
        buttons: {
          save: string;
          cancel: string;
          continue: string;
          back: string;
          login: string;
          register: string;
          startFree: string;
        };
        auth: {
          login: {
            title: string;
            subtitle: string;
            email: string;
            password: string;
            forgotPassword: string;
            noAccount: string;
            signUp: string;
          };
          register: {
            title: string;
            subtitle: string;
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            hasAccount: string;
            signIn: string;
          };
        };
        home: {
          hero: {
            title: string;
            subtitle: string;
          };
          features: {
            transcription: {
              title: string;
              description: string;
            };
            translation: {
              title: string;
              description: string;
            };
            tts: {
              title: string;
              description: string;
            };
            editing: {
              title: string;
              description: string;
            };
          };
        };
      };
    };
  }
} 