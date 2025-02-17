import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2"

// Добавим функцию для проверки и создания директории
const createDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ["ttf"]
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    createDir(`${app.path.buildFolder}/fonts`);
    
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(fonter({
            formats: ["woff"]
        }))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
}

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts/fonts.scss`;
    
    // Создаем директорию для fonts.scss, если её нет
    createDir(`${app.path.srcFolder}/scss/fonts`);
    
    // Важно! Используем правильный путь для чтения шрифтов
    fs.readdir(`${app.path.buildFolder}/fonts/`, function (err, fontsFiles) {
        if (err) {
            console.log('Ошибка при чтении директории шрифтов:', err);
            return;
        }
        
        if (!fontsFiles) return;
        
        if (!fs.existsSync(fontsFile)) {
            fs.writeFile(fontsFile, '', cb);
            let newFileOnly;
            for (var i = 0; i < fontsFiles.length; i++) {
                let fontFileName = fontsFiles[i].split('.')[0];
                if (newFileOnly !== fontFileName) {
                    let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                    let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                    const weightMap = {
                        'thin': 100,
                        'extralight': 200,
                        'light': 300,
                        'medium': 500,
                        'semibold': 600,
                        'bold': 700,
                        'extrabold': 800,
                        'heavy': 800,
                        'black': 900
                    };
                    
                    fontWeight = weightMap[fontWeight.toLowerCase()] || 400;
                    
                    // Используем правильный путь в CSS
                    fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                    newFileOnly = fontFileName;
                }
            }
        } else {
            console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!");
        }
    });
    
    return app.gulp.src(`${app.path.srcFolder}`);
    
    function cb() {}
}