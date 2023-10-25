import * as config from '../../config';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

(async () => {
  await config.initiate();
})();
const PROTO_PATH = `${__dirname}/../proto/question.proto`;
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const mypackage = grpc.loadPackageDefinition(packageDefinition).YourPackage;
const client = new mypackage.YourService(`${process.env.USER_GRPC_IP}`, grpc.credentials.createInsecure());
export default client