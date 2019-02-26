// import * as Koa from 'koa';
import { createKoaServer } from 'routing-controllers';
import * as globby from 'globby';
import * as path from 'path';

let paths: Array<string> = undefined;

paths = globby.sync(path.resolve(__dirname, '../dist/controller/**'));
console.log(1, paths);
paths = paths.filter(item => item.endsWith('.js'));
console.log(2, paths);
const modules = paths.map((item: string) => require(item).default);
console.log(3, modules);
const app = createKoaServer({
  controllers: modules
});

module.exports = app;