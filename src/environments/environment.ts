import { Environment } from '@abp/ng.core';

const baseUrl = 'https://lively-eclair-73baf5.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://bainorsida-001-site1.etempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://bainorsida-001-site1.etempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
