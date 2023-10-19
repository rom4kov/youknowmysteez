declare global {
  namespace NODE_ENV {
    interface ProcessEnv {
      REACT_APP_STRIPE_PUBLISHABLE_KEY: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};
