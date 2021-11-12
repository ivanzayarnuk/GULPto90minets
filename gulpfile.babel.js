import gulp from "gulp"; // Імпортуємо gulp функцію
import gpug from "gulp-pug"; // Імпортуємо gulp-pug - функцію

const routes = {    // Створюємо обєкти  адресов
    pug: {
        src: 'src/*.pug',
        dest: 'build'
    }
};
// Експортуємо задачу 
export const pug = () => gulp.src(routes.pug.src).pipe(gpug()).pipe(gulp.dest(routes.pug.dest)) 
/*export function pug() {

}
*/
export const dev =  gulp.series([pug]);
