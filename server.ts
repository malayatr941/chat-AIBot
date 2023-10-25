import * as config from './config';
import {connect} from './src/connection';
import DatasetController from './src/controllers/dataset.controller';

(async () => {
   await config.initiate();
})();
import App from './src/app';

const app = new App([new DatasetController]);

connect();

app.listen();
