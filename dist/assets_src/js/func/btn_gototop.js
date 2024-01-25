//========================================================
//
//  トップに戻るボタン
//
//  読み込み
//  import buttonGotoTop from './content/btn_gototop';
//
//  初期化
//  const btnGotoTop = new buttonGotoTop(切替スクロールY位置);
//  const btnGotoTop = new buttonGotoTop( 80 );
//
//  使い方
//  window.addEventListener('scroll', () => {
//    btnGotoTop.task();
//  });
//
//========================================================
export default class buttonGotoTop {
    constructor( i_overPosition ) {
        //  スクロール
        //  一般的にはヘッダー超えた位置
        this.overPosition = i_overPosition;
        this.items = [];
    }

    //  指定Y位置超えてるか確認
    checkOver() {
        return (document.documentElement.scrollTop > this.overPosition);
    }

    //  data-disp=openを設定して表示
    disp( i_item ) { i_item.dataset.disp = "open"; }
    //  data-disp=hideを設定して非表示
    hide( i_item ){ i_item.dataset.disp = "hide"; }
    //  スクロールイベント内で処理
    task( i_item ){
        this.checkOver() ? this.disp( i_item ) : this.hide( i_item );
        //  アイテム名で分岐する要素があればここに書く等する
    }
    taskAll(){
        this.items.forEach((item) => {
            this.task( item );
        });
    }

    //----------------------------------------
    //  gotoTop処理設定
    //----------------------------------------
    regist_gotoTop( i_item, i_name ) {
        let itm = i_item;
        //  クリックイベントセット
        itm.addEventListener("click", () => {
            //  y0に戻る
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        //  登録時にY位置確認して表示/非表示処理
        this.task( itm );
    }

    //----------------------------------------
    //  名称で処理の分岐
    //----------------------------------------
    registItem( i_item, i_name ) {
        //  名称で分岐
        switch( i_name ){
        case null :
            this.regist_gotoTop( i_item, i_name );
            break;
        }
    }    

    //----------------------------------------
    //  イベント登録
    //----------------------------------------
    eventRegistration() {
        //  data-js="btngototop" : 全て取得
        let itmgroup = document.querySelectorAll('[data-js="gotoTopButton"]');
        //  ボタンの数だけループ
        itmgroup.forEach((item) => {
            this.items.push( item );   //配列に追加
            //  名前があれば取得、なければnull
            let name = item.dataset.name?tem.dataset.name:null;
            this.registItem( item, name );
        });
    }

}