//==================================================<br>
//    フォルダ構成<br>
//==================================================<br>
<br>
projectルート<br>
│<br>
├直下にgulpfile.jsやnode_moduleなど、提出時に不要なファイル<br>
│<br>
└dist : distribution[ 提出用コード・素材 ]<br>
  ├assets : [出力先コード] srcからコンパイルされたコード<br>
  │ ├images   : 圧縮された画像<br>
  │ ├webfonts : 使用する圧縮削減フォント( URLからダウンロードするより無駄なく高速化 )<br>
  │ ├css   : srcのscssから出力されたcss<br>
  │ ├js    : srcのjsから結合されたjs<br>
  │ └lib   : css,jsで使用するライブラリ( swiper等 )<br>
  │<br>
  ├assets_src : [編集元コード] 素材など不要の場合提出時は切り離す<br>
  │ ├images   : 圧縮前の画像<br>
  │ ├webfonts : 使用する予定の圧縮削減フォントデータを事前に準備<br>
  │ ├sass   : scss<br>
  │ │ ├foundation : リセットCSS、body、フォントの定義<br>
  │ │ ├global : 全体共通の変数、関数、mixinの定義<br>
  │ │ ├layout : l-レイアウト枠の定義( ヘッダー、フッター、メイン、サイド等の大枠 )<br>
  │ │ └object : <br>
  │ │   ├component : c-汎用パーツクラスの定義<br>
  │ │   ├project   : p-ページ単位での定義<br>
  │ │   └utility   : u-汎用ユーティリティ( marginの指定等 )<br>
  │ └js     : <br>
  │   ├func : 機能<br>
  │   ├anim : 演出<br>
  │   └_myindex.js  : 読み込むjs本体<br>
  │<br>
  └index.html : html本体<br>
<br>
