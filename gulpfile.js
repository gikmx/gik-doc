'use strict';

let Gulp = require('gulp');
let Gik  = require('gik');

for(let task of Gik) Gulp.task.apply(Gulp, task);

