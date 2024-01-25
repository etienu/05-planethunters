//==================================================
//    実行方法
//==================================================
## 開発時
以下コマンド実行中、`src`以下のファイル保存時に自動でコンパイルされる
> npm run watch

保存時ブラウザ自動更新の監視
> npm run server

ソース画像全てをassetsに圧縮出力
> npx gulp imagemin

ソース画像全てをassetsにwebp出力
> npx gulp imagewebp

■watchとserverを同時に実行する ※基本これを使用
> npm run w

## 公開時
以下コマンド実行後、cssとjsが圧縮してコンパイルされる
> npm run build



//==================================================
//    フォルダ構成
//==================================================

projectルート
│
├直下にgulpfile.jsやnode_moduleなど、提出時に不要なファイル
│
└dist : distribution[ 提出用コード・素材 ]
  ├assets : [出力先コード] srcからコンパイルされたコード
  │ ├images   : 圧縮された画像
  │ ├webfonts : 使用する圧縮削減フォント( URLからダウンロードするより無駄なく高速化 )
  │ ├css   : srcのscssから出力されたcss
  │ ├js    : srcのjsから結合されたjs
  │ └lib   : css,jsで使用するライブラリ( swiper等 )
  │
  ├assets_src : [編集元コード] 素材など不要の場合提出時は切り離す
  │ ├images   : 圧縮前の画像
  │ ├webfonts : 使用する予定の圧縮削減フォントデータを事前に準備
  │ ├sass   : scss
  │ │ ├foundation : リセットCSS、body、フォントの定義
  │ │ ├global : 全体共通の変数、関数、mixinの定義
  │ │ ├layout : l-レイアウト枠の定義( ヘッダー、フッター、メイン、サイド等の大枠 )
  │ │ └object : 
  │ │   ├component : c-汎用パーツクラスの定義
  │ │   ├project   : p-ページ単位での定義
  │ │   └utility   : u-汎用ユーティリティ( marginの指定等 )
  │ └js     : 
  │   ├func : 機能
  │   ├anim : 演出
  │   └_myindex.js  : 読み込むjs本体
  │
  └index.html : html本体

