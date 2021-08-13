1. Crea un package con un npm init
2. Instala gulp con "npm install --save-dev gulp"

//JAVASCRIPT
3. Instala babel con 2 comandos, trabaja babel con la sintaxis nueva
    npm install --save-dev @babel/register
    npm install --save-dev gulp-babel @babel/core @babel/preset-env
4. npm install --save-dev gulp-terser  sirve para unir el codigo minificando
5. npm install --save-dev gulp-concat sirve para unir varios archivos js

//PUG
npm install --save-dev gulp-pug

//SASS
npm install --save-dev gulp-sass

//Purgar SCSS
npm install --save-dev gulp-purgecss

con control + c se detiene la tareas gulp 'default

sass --watch dev/scss/styles.scss public/css/styles.css