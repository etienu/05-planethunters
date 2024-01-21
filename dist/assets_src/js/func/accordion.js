// GSAP使用
//------------------------------------------------------------
//  
//  アコーディオンを閉じる時のアニメーション
//
//------------------------------------------------------------
const closingAnim = (content, element) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    //ease: "power3.out",Z
    overwrite: true,
    onComplete: () => {
      // アニメーションの完了後にopen属性を取り除く( <details>用 )
        element.removeAttribute("open");
    },
});


//------------------------------------------------------------
//
//  アコーディオンを開く時のアニメーション
//
//------------------------------------------------------------
const openingAnim = (content) => gsap.fromTo(
    content,
    {
        height: 0,
        opacity: 0,
    },
    {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
    });




//----------------------------------------
//  アコーディオン処理
//  
//----------------------------------------
export default class accordion {
    constructor() {
    }


    //----------------------------------------
    //
    //  GSAPを使ってアコーディオンのアニメーションを制御
    //
    //----------------------------------------
    set_accordions__details(){
        //  全てのdata属性"accordion-details"を取得
        //  直接<datails>タグを取得してもよい。しかし万が一他の処理と被る場合を考慮し指定している
        const details = document.querySelectorAll('[data-js="accordion-details"]');
        //  全detailsに対して処理
        details.forEach((element) => {
            //  <summary> Q 質問部分
            const summary = element.querySelector('[data-js="accordion-summary"]');
            //  <div> A 出現する返答部分
            const content = element.querySelector('[data-js="accordion-content"]');

            //  <summary>部分にクリックイベント追加
            summary.addEventListener("click", (event) => {
                // デフォルトの挙動を無効化
                event.preventDefault();
                //  "data-open"と"open"の二種類の属性の違い
                //  "open" : <details>の開閉機能に関わるフラグ
                //  "data-open" : アイコンや開閉のアニメーション切り替えフラグ
                //  タイミングが違う

                //  クリック時data-openがtrueならアコーディオン閉じる処理
                if( element.dataset["open"]=="true"){
                    // アイコン操作用フラグを倒す
                    element.dataset["open"]="false";
                    content.dataset["open"]="false";
                    // アニメーション実行
                    closingAnim(content, element).restart();

                //  クリック時data-openがfalseならアコーディオン開く処理
                } else {
                    //  必要とあらば他の全detailsを閉じる処理

                    // アイコン操作用フラグを立てる
                    element.dataset["open"]="true";
                    content.dataset["open"]="true";
                    // 属性"open"を付与
                    element.setAttribute("open", "true");

                    // アニメーション実行
                    openingAnim(content).restart();
                }
            });
        });        
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {
        //  全アコーディオンを取得して設定
        this.set_accordions__details();
    }
}