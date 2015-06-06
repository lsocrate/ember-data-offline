import Queue from 'ember-data-offline/queue';

export function initialize(container, application) {
  container.register('queue:main', Queue);
};

export default {
  name: 'data-offline-queue',
  after: 'store',
  initialize: initialize
};
