import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authConfig = {
  providers: [
    KeycloakProvider({
      clientId: 'bffchatgpt',
      clientSecret: 'xYWBZ0Q31z6Ei1STcJyI4zAsAaRK4NgM',
      issuer: 'http://host.docker.internal:8080/realms/master',
    })
  ]
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST };
