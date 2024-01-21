//----------------------------------------
//  ボタン( ハンバーガー含む )
//----------------------------------------
export default class buttons {
    constructor() {
        this.buttons = [];
    }

    //----------------------------------------
    // スクロールを禁止にする関数
    //----------------------------------------
    disableScroll(event) {
        event.preventDefault();
    }
    addScrollStop() {
        document.addEventListener('touchmove', this.disableScroll, { passive: false });
        document.addEventListener('mousewheel', this.disableScroll, { passive: false });
        //console.log("addScrollStop()");
    }
    removeScrollStop() {
        document.removeEventListener('touchmove', this.disableScroll, { passive: false });
        document.removeEventListener('mousewheel', this.disableScroll, { passive: false });
        //console.log("removeScrollStop()");
    }

    //----------------------------------------
    //  ウインドウリサイズ時の処理
    //----------------------------------------
    resize(){
        this.buttons.forEach((btn) => {
            let name = btn.dataset.name;
            //  ハンバーガー
            if( name =="hamburger" ){
                let elms = this.get_hamburgerElements( btn );
                this.hamburgerClose_isPC( btn, elms );
            }
        });
    }

    //----------------------------------------
    //  PC時リサイズでSP以下の幅になったら強制的に閉じる
    //----------------------------------------
    hamburgerClose_isPC( i_btn, i_elms ) {
        //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
        const ww = window.outerWidth;
        //  commonを使ってサイトの分岐幅を設定しておくこと
        //  タブレット以上なら強制的に閉じる処理
        if( 768 <= ww ){
            this.hamburgerClose( i_btn, i_elms );
        }
    }

    //========================================================
    //  ハンバーガー
    //----------------------------------------
    //  このハンバーガー要素に付属するdataから関連要素を全て取得
    //----------------------------------------
    get_hamburgerElements( i_item ) {
        let itm = i_item;
        let elm = [];
        elm['btn'] = i_item;
        elm['header'] = document.querySelector("#"+itm.dataset.headerid );
        //  メニュー要素
        elm['menu'] = document.querySelector("#"+itm.dataset.menuid );
        elm['menubg'] = document.querySelector("#"+itm.dataset.menubgid );
        //  メニュー要素のul ID
        elm['ul'] = elm['menu'].querySelector( "ul" );
        elm['lia'] = elm['ul'].querySelectorAll( "li a" );
        return elm;
    }
    //----------------------------------------
    //  ハンバーガーの処理設定
    //----------------------------------------
    regist_hamburger( i_item, i_name ) {
        let ham = i_item;
        //console.log("[item]"+i_item);
        //console.log("[name]"+i_name);
        //  要素要素取得
        let elm = this.get_hamburgerElements( i_item );
        //  ボタンにクリックイベントセット
        ham.addEventListener("click", () => { this.hamburgerToggle( i_item,elm ); });
        //  ul liのメニューがクリックされたら閉じる
        elm['lia'].forEach((lia) => {
            lia.addEventListener("click", () => { this.hamburgerClose( i_item, elm ); });
        });
    }

    //----------------------------------------
    //  ハンバーガー開く
    //----------------------------------------
    hamburgerToggle( i_item, i_elements ) {
        let elms = i_elements;
        //  data-open="open"ではないので開く
        if( i_item.dataset.open !="open" ){
            i_item.dataset.open ="open";
            elms['menu'].dataset.open ="open";
            elms['header'].dataset.open ="open";
            //  開いた スクロール停止
            //gsap.fromTo('.p-spmenu__background .stripe',{x:"100%"},{x:"0%",stagger:{each:0.1,from:"end"}});
            //gsap.fromTo('.p-spmenu__inner',{opacity:0},{opacity:1, duration :1.5} );
            this.addScrollStop();
        }
        //  "open"しているなら閉じる
        else{
            this.hamburgerClose( i_item, i_elements );
        }
    }

    //----------------------------------------
    //  ハンバーガー閉じる( 主にメニュークリック時 )
    //----------------------------------------
    hamburgerClose( i_item, i_elements ) {
        let elms = i_elements;
        //console.log( i_item );
        //console.log( elms );
        //  data-open="open"で開いている場合
        if( i_item.hasAttribute('data-open') &&
            i_item.dataset.open == "open" ){
            //console.log("SP→タブなので強制的に閉じます");
            i_item.dataset.open ="close";
            elms['menu'].dataset.open ="close";
            elms['header'].dataset.open ="close";
            // スクロール解除
            this.removeScrollStop();
        }
    }

    //----------------------------------------
    //  名称で処理の分岐
    //----------------------------------------
    registItem( i_item, i_name ) {
        //  名称で分岐
        switch( i_name ){
        case "hamburger" : 
            this.regist_hamburger( i_item, i_name );
            break;
        }
    }    

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {
        //  data-js="hamburger" : 全て取得
        let btngroup = document.querySelectorAll('[data-js="button"]');
        //  ボタンの数だけループ
        btngroup.forEach((btn) => {
            this.buttons.push( btn );   //配列に追加
            let name = btn.dataset.name;
            //  ボタンの識別名称があれば登録
            if( name ) this.registItem( btn, name );
        });
    }
}