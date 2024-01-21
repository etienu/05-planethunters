//----------------------------------------
//
//  タブグループ
//
//----------------------------------------
export default class tabGroup {
    constructor() {
        this.tabgroup = [];
        this.common = null;
        //  スライドの情報アニメ制御用
        this.tl_slideinfo_rect = [];

    }

    getTarget( i_tab ) {
        let tar = i_tab.dataset['target'];
        let elm = document.querySelector( tar );
        return elm;
    }

    //----------------------------------------
    //  タブ全体閉じる
    //----------------------------------------
    tabdisableall( i_group ) {
        //  タブの取得
        let tabs = i_group.querySelectorAll('[data-js="tabitem"]');
        //  全タブのstate削除
        tabs.forEach((tab) => {
            delete tab.dataset.state;
        });
    }

    //  全てactive解除 + ターゲットを隠す
    tab_hideAll( i_group ) {
        //  タブの取得
        let tabs = i_group.querySelectorAll('[data-js="tabitem"]');
        //  全タブのstate削除
        tabs.forEach((tab) => {
            delete tab.dataset.state;
            //  ターゲットを隠す
            this.getTarget( tab ).style.display = "None";
        });
    }

    //----------------------------------------
    //  タブをアクティブに
    //----------------------------------------
    tabactive( i_tab ){
        i_tab.dataset['state'] = "open";
    }

    activeTab( i_tab ) {
        //  親(グループ)を取得する
        let parent = i_tab.parentNode;
        //  グループの全てを非アクティブにする
        this.tabdisableall( parent );
        //  グループの自分のタブをアクティブにする
        this.tabactive( i_tab );
        return parent;
    }

    //  指定タブのターゲットのdisplayを設定
    tab_setDisplay( i_tab, i_flag ) {
        //this.activeTab( i_tab );

        let elm = this.getTarget( i_tab );
        if( elm ) elm.style.display = i_flag;
        //  gsapがセットされている
        //console.log(elm.gsaptl_fadeinUp );
        if( elm.gsaptl_fadeinUp ){
            elm.gsaptl_fadeinUp.restart();
        }
        return parent;
    }

    //----------------------------------------
    //  タブの設定 : trainer
    //----------------------------------------
    registTab_trainer( i_tab ) {
        //  このタブが指定しているID要素を隠す
        this.tab_setDisplay( i_tab, "none" );

        //  タブのクリック設定
        i_tab.addEventListener("click", () => {
            //  他を隠す
            this.tab_hideAll( i_tab.parentNode );
            //  タブをアクティブ設定
            this.activeTab( i_tab );
            //  タブのターゲットを表示
            this.tab_setDisplay( i_tab, "flex" );
            //  GSAP設定
            
        });
    }

    //----------------------------------------
    //  タブの設定 : SKILL
    //----------------------------------------
    registTab_skill( i_tab ) {
        //  タブのクリック設定
        i_tab.addEventListener("click", () => {
            let parent = i_tab.parentNode;
            parent.dataset['tabindex'];
            this.activeTab( i_tab );
            //--------------------------------
            //  タブごとの固有処理( data-key指定 )
            let key = i_tab.dataset['key'];
            //  swiperの取得
            let swi = null;
            swi = this.common.swipers['skill'];
            switch( key ){
            case 'skillswiper1' : swi.slideTo(0); break;
            case 'skillswiper2' : swi.slideTo(1); break;
            default : break;
            }
        });
    }

    //----------------------------------------
    //  タブグループの設定
    //  グループ内のタブしか検索しないのでグループ名は不要
    //----------------------------------------
    registGroup( i_group ) {
        //  開いているタブ番号を設定
        i_group.dataset['tabindex'] = 0;

        //  タブの取得
        let tabs = i_group.querySelectorAll('[data-js="tabitem"]');
        //  data-keyからグループ名を取得
        let groupkey = i_group.dataset['key'];
        switch( groupkey ){
        //  トレーナー
        case "trainer" : 
            //  タブ設定 + 非表示
            tabs.forEach((tab) => {
                this.registTab_trainer( tab );
            });
            //  アクティブのタブを表示
            let ti = i_group.dataset['tabindex'];
            let elm = this.tab_setDisplay( tabs[ti], "flex" );
            break;

        case "skill" : 
            tabs.forEach((tab) => {
                this.registTab_skill( tab );
            });
            break;
        }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration( i_common ) {
        //  共有変数クラスの確保
        this.common = i_common;
        //  data-js : タブグループの取得
        let tabgroup = document.querySelectorAll('[data-js="tabgroup"]');
        //  タブグループの数だけループ
        tabgroup.forEach((tgroup) => {
            this.registGroup( tgroup );
        });
    }
}