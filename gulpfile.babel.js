/*
* JAVASCRIPT
*/
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'
import concat from 'gulp-concat'

/*
*PUG
*/
import pug from 'gulp-pug'

/*
*IMAGE 
*/
//const image = require('gulp-image');

// ---------------------------------- //

// gulp.task('image', (done) => {
//     gulp.src('./public/assets/img/**/*')
//       .pipe(image({
//         pngquant: true,
//         optipng: false,
//         zopflipng: true,
//         jpegRecompress: false,
//         mozjpeg: true,
//         gifsicle: true,
//         svgo: true,
//         concurrent: 10
//       }))
//       .pipe(gulp.dest('./public/images'));
//       done();
//   });

//PUG
const production = false
gulp.task('views',()=>{
    return gulp.src('./dev/views/pages/*.pug')
        .pipe(pug({
            pretty: production ? false : true 
        }))
        .pipe(gulp.dest('./public')) //se crea el archivo html
})

//JAVASCRIPT
gulp.task('babel',()=>{
    return gulp
        .src('./dev/js/*.js')//busca los archivos a convertir a version antigua
        .pipe(babel({
            presets:['@babel/env'] //el preset para convertir el codigo viejo a nuevo
        }))
        .pipe(terser()) //minifica el codigo, elimina espacios
        .pipe(concat('scripts-min.js')) //une los scripts en uno solo, se crea por defecto el archivo
        .pipe(gulp.dest('./public/js')) //se crea la carpeta de destino es decir se crea public
})

//se hace en la ultima vez que se use el codigo
// gulp.task('clean',()=>{
//     return gulp.src('./public/css/styles.css')
//         .pipe(clean({
//             content:['./public/*.html']//mira todos que los html tengan la clase
//         }))
//         .pipe(gulp.dest('./public/css'))
// })


gulp.task('default',()=>{
    gulp.watch('./dev/views/**/*.pug', gulp.series('views'))
    gulp.watch('./dev/js/*.js', gulp.series('babel')) //vigile el cambio de alguno de los scripts y en caso de haber cambio llamar a la tarea gulp babel con gulp.series('nombre de la tarea')
   // gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
})