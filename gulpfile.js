const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  return gulp.src(['./src/server.js', './src/ServerApp.js']) // 只需打包 server.js
    .pipe(babel()) // 使用 Babel 进行转译
    .pipe(gulp.dest('dist')); // 输出到 dist 目录
});
