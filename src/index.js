import debug from 'debug';
import app from './app';

const dbg = debug('jwtdemo:main');

const port = process.env.PORT || 80;

(async () => {
  await app.listen(port);
  dbg(`Server is listening on port ${port}`);
})();
