Slides = new Mongo.Collection('Slides');

Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', {path: '~/uploads'})]
});