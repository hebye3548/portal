var config = require('../portal/config');
var gulp = require('gulp');
var path = require('path');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
//清理编译文件
gulp.task('clean',function(){
  gulp.src(config.clean.src)
    .pipe(clean());
});
//文件监控
gulp.task('watch', function () {
  gulp.watch(config.style.watch, function (e) {
    gulp.run('style');
  });
  gulp.watch(config.view.watch, function (e) {
    gulp.run('view');
  });
  gulp.watch(config.script.watch, function (e) {
    gulp.run('script');
  });
  gulp.watch(config.appResource.script.src,function(e){
    gulp.run('appScriptResource');
  });
 
});
/*build & move module scss*/
gulp.task('style', function () {
  for(var i = 0;i<config.moduleInfo.length;i++){
    var moduleInfo = config.moduleInfo[i];
    gulp.src(moduleInfo.src+config.style.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(moduleInfo.dist+config.style.suffix))
        .pipe(gulp.dest(config.style.dest));
  }
});
/**copy index view**/
gulp.task('copyIndexView',function(){
  gulp.src(config.view.index.src)
      .pipe(gulp.dest(config.view.index.dest));
});
/**copy module view**/
gulp.task('copyModuleView',function(){
  for(var i = 0;i<config.moduleInfo.length;i++){
    var moduleInfo = config.moduleInfo[i];
    gulp.src(moduleInfo.src+config.view.module.src)
        .pipe(gulp.dest(config.view.module.dest));
  }
});
gulp.task('view',['copyIndexView','copyModuleView']);
/*copy fonts*/
gulp.task('font',function(){
  gulp.src(config.font.src)
      .pipe(gulp.dest(config.font.dest));
});
/*copy module script*/
gulp.task('script',function(){
  for(var i = 0;i<config.moduleInfo.length;i++){
    var moduleInfo = config.moduleInfo[i];
    gulp.src(moduleInfo.src+config.script.src)
        .pipe(concat(moduleInfo.dist+config.script.suffix))
        .pipe(gulp.dest(config.script.dest));
  }
});
//合并并移动libScript
gulp.task('libScript',function(){
  return gulp.src(config.lib.script.src)
         .pipe(concat(config.lib.script.dist))
         .pipe(gulp.dest(config.lib.script.dest));
});
//合并并移动libStyle
gulp.task('libStyle',function(){
  return gulp.src(config.lib.style.src)
        .pipe(concat(config.lib.style.dist))
        .pipe(gulp.dest(config.lib.style.dest));
});
//合并并移动libImage
gulp.task('libImage',function(){
  return gulp.src(config.lib.image.src)
        .pipe(gulp.dest(config.lib.image.dest));
});
//合并并移动公共JS资源
gulp.task('appScriptResource',function(){
  return gulp.src(config.appResource.script.src)
          .pipe(concat(config.appResource.script.dist))
          .pipe(gulp.dest(config.appResource.script.dest));
});
//合并并移动公共资源
gulp.task('mergeApp',['appScriptResource']);
//合并并移动lib
gulp.task('lib',['libScript','libStyle','libImage']);
//

gulp.task('connect',function(){
	connect.server({
    root:'webapp',
		livereload:true,
        /*middleware: function(connect) {
              return [connect().use('/bower_components', connect.static('bower_components'))]; 
          }*/
	});
});
gulp.task('default',['clean','style','script','view','font','mergeApp','lib','connect','watch']);