//----------------------------------------------------------------------
//  モード
//----------------------------------------------------------------------
"use strict";
// gulp停止はターミナルでCtrl+C

//----------------------------------------------------------------------
//  モジュール読み込み
//----------------------------------------------------------------------
const gulp = require("gulp");
const webp = require('gulp-webp');
const rename = require('gulp-rename');
const { src, dest, series, parallel, watch } = require("gulp");
//  画像圧縮
const imageMin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");
//  パス
const path = require('path');

//  sassコンパイル
const sass = require("gulp-sass")(require("sass"));

// 出力元と出力先のディレクトリを定義
const dir = {
    src: path.join(__dirname, 'dist/assets_src'),
    dist: path.join(__dirname, 'dist/assets'), //  'public','dist'など
};


//  使用方法
//  ■VSCode■
//  Ctrl + Shift + @でターミナル開く
//  またはログウインドウの右に「ターミナル」がある
//  ターミナルからコマンドライン実行
//  > npx gulp imagemin
//  ■windows cmd ■
//  > npx gulp imagemin
//----------------------------------------------------------------------
//  関数定義
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//  画像圧縮処理
//  > npx gulp imagemin
//----------------------------------------------------------------------
function imagemin(done) {

    //    src("./src/assets/images/**")
    src(path.resolve(dir.src, "images/**"))
        //    .pipe(changed("./assets/images/")) // 圧縮前後の比較
        .pipe(changed(path.resolve(dir.dist, "images/"))) // 圧縮前後の比較
        .pipe(
            imageMin([
                pngquant({ // 追加
                    quality: [0.6, 0.7],
                    speed: 1,
                }),
                mozjpeg({ quality: 65 }), // 追加
                imageMin.svgo(),
                imageMin.optipng(),
                imageMin.gifsicle({ optimizationLevel: 3 }),
            ])
        )
        .pipe(dest(path.resolve(dir.dist, "images/")));
    //        .pipe(dest("./assets/images/"));

    done();
}
//----------------------------------------------------------------------
//  webp変換
//  dist側のimagesフォルダ内で変換
//  元ファイル名に.webpを付与したものを作成する
//  image.jpg -> image.jpg.webp
//  > npx gulp imagewebp
//----------------------------------------------------------------------
function imagewebp(done) {
    src(path.resolve(dir.dist, "images/**"))
        // rename処理を追加
        .pipe(rename(function(path) {
            path.basename += path.extname;
        }))
        .pipe(webp({
            // オプションを追加
            quality: 70, //default : 75
            method: 6, //  default : 4
        }))
        .pipe(dest(path.resolve(dir.dist, "images/")));
    done();
}


//----------------------------------------------------------------------
//  タスク定義
//----------------------------------------------------------------------
exports.imagemin = imagemin;
exports.imagewebp = imagewebp;
/************************************************************************/
/*  END OF FILE                                                         */
/************************************************************************/