Slides = new Mongo.Collection('Slides');

ImageStore = new FS.Store.S3('images', {
  //region: 'my-s3-region', //optional in most cases
  accessKeyId: 'AKIAJL576KK3KR6LKOTA', //required if environment variables are not set
  secretAccessKey: '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', //required if environment variables are not set
  bucket: 'slide-bucket', //required
  //ACL: 'myValue', //optional, default is 'private', but you can allow public or secure access routed through your app URL
  //folder: 'folder/in/bucket', //optional, which folder (key prefix) in the bucket to use 
  // The rest are generic store options supported by all storage adapters
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  maxTries: 4 //optional, default 5
});

Images = new FS.Collection('images', {
  stores: [ImageStore]
});