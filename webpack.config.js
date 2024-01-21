const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StyleLintPlugin = require('stylelint-webpack-plugin');


// 出力元と出力先のディレクトリを定義
//const srcRootPath = "dist/";
const dir = {
    src: path.join(__dirname, 'dist/assets_src'),
    public: path.join(__dirname, 'dist/assets'),
};

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

//--------------------------------------------------------
//  jsまとめる、jsの圧縮(production時)
//--------------------------------------------------------
const JsConfig = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'development',
    //mode: 'production',

    // エントリーポイントの設定
    entry: {
        //  配列にすれば複数のファイルを起点設定可能
        main: path.resolve(dir.src, 'js/_myindex.js'),
    },
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        path: path.resolve(dir.public, 'js/'),
    },

    //source-map タイプのソースマップを出力
    devtool: 'source-map',
    //devtool: 'hidden-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }

};

//--------------------------------------------------------
//  SCSS　→　css、css圧縮(production時)
//  SASSのsaccではなくscss
//--------------------------------------------------------
const ScssConfig = {
    mode: 'development',
    //mode: 'production',

    // エントリーポイントの設定
    entry: {
        'style.css': path.resolve(dir.src, 'sass/style.scss'),
    },

    output: {
        path: path.resolve(dir.public, 'css/'),
    },

    //source-map タイプのソースマップを出力
    devtool: 'source-map',
    //devtool: 'hidden-source-map',
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: true,
                        importLoaders: 2,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sassOptions: {
                            charset: false //  UTF-8 移動回避
                        }
                    },
                },
                {
                    loader: 'postcss-loader',
                },
            ],
        }, ], // rule
    }, // module
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]', //  name = entryで書かれている配列要素名(style.css)
            //filename: path.resolve(dir.public, 'css/[name]'), //  name = entryで書かれている配列要素名(style.css)
        }),
        new FixStyleOnlyEntriesPlugin(),
        //new StyleLintPlugin(),  // lint //    一部エラー( #{} 等 )が直しきれない
    ],
};



module.exports = [
    //watch:true,   //  監視モード有効
    JsConfig,
    ScssConfig
];