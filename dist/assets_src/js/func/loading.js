//========================================================
//
//  Nowloading... 読み込み画面
//
//========================================================
export default class loadingScreen {
    constructor() {
        this.screen = null;
    }
    //--------------------------------
    //  イベント登録
    //--------------------------------
    eventRegistration() {
        let scr = document.querySelector('[data-js="loadingscreen"]');
        //  ローディング画面の指定がある要素があれば設定
        if( scr ){
            this.screen = scr;
            //  一定時間後に非表示
            window.addEventListener('load', () => {
                setTimeout(function(){
                    scr.classList.add("hide");
                    //console.log( "endLoading :" );
                }, 200);
            });    
        }
    }
}