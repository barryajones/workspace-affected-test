module.exports = {
  name: 'web-app1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-app1',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
