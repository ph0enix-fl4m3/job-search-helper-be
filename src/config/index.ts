interface FirebaseConfig {
  type?: string;
  projectId?: string;
  privateKeyId?: string;
  privateKey?: string;
  clientEmail?: string;
  clientId?: string;
  authUri?: string;
  tokenUri?: string;
  authProviderX509CertUrl?: string;
  clientX509CertUrl?: string;
  universeDomain?: string;
}

interface AppConfig {
  firebase: FirebaseConfig;
}

const config: AppConfig = {
  firebase: {
    type: process.env.TYPE,
    projectId: process.env.PROJECT_ID,
    privateKeyId: process.env.PRIVATE_KEY_ID,
    privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.CLIENT_EMAIL,
    clientId: process.env.CLIENT_ID,
    authUri: process.env.AUTH_URI,
    tokenUri: process.env.TOKEN_URI,
    authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.CLIENT_X509_CERT_URL,
    universeDomain: process.env.UNIVERSE_DOMAIN,
  },
};

export default config;
