'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');

test('enrich-resource', (t) => {
  const resourceList = [
    { kind: 'Service' },
    { kind: 'Route' },
    { kind: 'Deployment' },
    { kind: 'Secret' },
    { kind: 'other' }
  ];

  const mockedFunc = () => {};

  const enrichResource = proxyquire('../lib/enrich-resources', {
    './resource-enrichers/service-enricher': mockedFunc,
    './resource-enrichers/route-enricher': mockedFunc,
    './resource-enrichers/deployment-config-enricher': mockedFunc,
    './resource-enrichers/secret-enricher': mockedFunc
  });

  enrichResource({}, resourceList);

  t.pass('success');
  t.end();
});
