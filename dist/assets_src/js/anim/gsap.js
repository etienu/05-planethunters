//----------------------------------------
//
//  GSAP アニメーション
//
//----------------------------------------
export default class anim_gsap {
    constructor() {
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration( i_common ) {
        //  共有変数クラスの確保
        this.common = i_common;
        //this.registanim__intro__txtmarker();
        //this.registanim__heading_eff();

        this.set_fadein();
        this.set_fadein_up();
        this.set_scrolldisp();
        this.set_txtmarker();
    }

    //----------------------------------------
    //  ポートフォリオ : intro : SVG
    //----------------------------------------
    registanim__intro__svg() {
        let eff_classs = document.querySelectorAll('[data-eff="gsapintro_svg"]');
        if( eff_classs.length <= 0 ) return;
        //  svg機能をセットした大枠グループ
        eff_classs.forEach((tar) => {
            let objs =tar.querySelectorAll('.l-intro__idealp');
            //  大枠内のグループアイテム1個
            objs.forEach((tar) => {
                //  グループ内spanの文字列を全て分割
                this.common.splitTarget_span( tar, "", false  );
                let objctrl =tar;
                let objp1span = tar.querySelectorAll('span');
                let path_txt = "";
                let tl_delay = 0.1;
                gsap.set(objp1span, { opacity: 0 });
                const tl = gsap.timeline();
                //  指定data-indexによってパスを作成
                switch( objctrl.dataset["index"] )
                {
                case "1" : path_txt = [{ x: 0, y: 0 },{ x: -100, y: 0 },{ x: -200, y:0 },{ x: -300, y: -100 }];  tl_delay = 0; break; //  上から
                case "2" : path_txt = [{ x: 0, y: 0 },{ x: -100, y: 0 },{ x: -200, y:0 },{ x: -300, y:  100 }];  tl_delay = 0.5;  break; //  下から
                default: break;
                }
                tl.
                to( objp1span,
                    {
                    scrollTrigger: {
                        trigger: tar,
                        start: 'top bottom', //スクロールイベントの開始地点
                        end: 'bottom top', //スクロールイベントの終了地点
                        // 以下、onイベント
                        onEnter: () => {  tl.play()  },
                        onEnterBack: () => { tl.play()  },
                        onLeaveBack: () => { tl.pause() },
                        onLeave: () => { tl.pause() }
                        }
                    }
                ).
                to(
                    objp1span, {
                        duration: 2,
                        opacity: 1,
                        delay: tl_delay,
                        stagger: {
                            each : 0.1,
                            from : "end",
                        },
                        motionPath:{
                            path: path_txt,
                            autoRotate: true,
                            curviness:1,
                            start: 1,
                            end: 0
                        },
                        ease: "power1.easeOut"
                    }
                );
                //  範囲に入るまでタイムライン全体を停止
                tl.pause();
            });// objs.forEach((tar)
        });// eff_classs.forEach((tar)
    }


    //----------------------------------------
    //  ポートフォリオ : intro : マーカー
    //----------------------------------------
    registanim__intro__txtmarker() {
        let eff_classs = document.querySelectorAll('[data-eff="gsapintro_txtmarker"]');
        if( eff_classs.length <= 0 ) return;
        //  svg機能をセットした大枠グループ
        eff_classs.forEach((target) => {
            let tar = target;
            gsap.set(tar, { opacity: 1 });
            const tl = gsap.timeline();
            tl.
            to( tar,
                {
                    scrollTrigger: {
                        trigger: tar,
                        start: 'top bottom-=35%', //スクロールイベントの開始地点
                        end: 'bottom top', //スクロールイベントの終了地点
                        once : true,
                        // 以下、onイベント
                        onEnter: () => {  tl.play();
                            tar.dataset["disp"] = "true";
                        },
                        onEnterBack: () => { tl.play()
                            tar.dataset["disp"] = "true";
                        },
                    }
                }
            );
            //  範囲に入るまでタイムライン全体を停止
            tl.pause();
        });// eff_classs.forEach((tar)
    }// registanim__intro__txtmarker()


    //----------------------------------------
    //  フェードイン
    //----------------------------------------
    set_fadein() {
        let elms = document.querySelectorAll('[data-eff="fadein"]');
        if( elms.length <= 0 ) return;
        elms.forEach((elm) => {
            //let tarid = "#"+elm.dataset.targetid;
            //let tar = document.querySelector(tarid);
            gsap.fromTo(
                elm, // アニメーションさせる要素
                { autoAlpha: 0 },
                {   delay : 0.4,
                    duration : 1,
                    autoAlpha: 1 // アニメーション後は出現(透過率0)
                }
            );            
        });
    }


    //----------------------------------------
    //  フェードイン - popup　下から上へ
    //----------------------------------------
    set_fadein_up() {
        let elms = document.querySelectorAll('[data-eff="fadein-up"]');
        if( elms.length <= 0 ) return;
        elms.forEach((elm) => {
            gsap.set(elm,{ opacity : 0, y: 40});
            const tl = gsap.timeline();
            tl
            .to(elm,{
                autoAlpha: 0,
                y:40,
                duration :0.5,
                scrollTrigger: {
                    trigger: elm,   // アニメーションが始まるトリガーとなる要素
                    start: "top 90%", // アニメーションの開始位置
                    onEnter: () => {  tl.play()  },
                  },
               })
            .to(elm,{
                duration : 0.5,
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
            });
            tl.pause();

            //  要素にセットしておく
            elm.gsaptl_fadeinUp = tl;

        /*
            gsap.fromTo(
                elm, // アニメーションさせる要素
                { autoAlpha: 0, y:60 },
                {
                    duration : 0.5,
                    y: 0, // アニメーション後の縦位置(上に100px)
                    autoAlpha: 1, // アニメーション後に出現(透過率0)
                    scrollTrigger: {
                      trigger: elm, // アニメーションが始まるトリガーとなる要素
                      //toggleActions: "play none none reverse", // 上スクロールで戻る
                      start: "top 90%", // アニメーションの開始位置
                      //markers: true, // マーカー表示
                    },
                }
            );  
        */       
        });
    }


    //----------------------------------------
    //  スクロールしたら表示
    //----------------------------------------
    set_scrolldisp() {
        let elms = document.querySelectorAll('[data-eff="scrolldisp"]');
        if( elms.length <= 0 ) return;
        elms.forEach((elm) => {
            let tarid = "#"+elm.dataset.targetid;
            let tar = document.querySelector(tarid);
            gsap.fromTo(
                elm, // アニメーションさせる要素
                { autoAlpha: 0 },
                {   autoAlpha: 1, // アニメーション後は出現(透過率0)
                    scrollTrigger: {
                    trigger: tar, // アニメーションが始まるトリガーとなる要素
                    toggleActions : "play none none reverse",   //  上スクロールで戻る
                    start: "bottom top", // アニメーションの開始位置
                    },
                }
            );            
        });
    }

    //----------------------------------------
    //  テキストマーカー 出現演出
    //----------------------------------------
    set_txtmarker() {
        let elms = document.querySelectorAll('[data-eff="txtmarker"]');
        if( elms.length <= 0 ) return;
        elms.forEach((elm) => {
            //let elmafter = getComputedStyle(elm, "::after");
            //console.log( elmafter);
            //gsap.set(elmafter, { opacity: 0 });
            //gsap.set(elm, { opacity: 0 });
            const tl = gsap.timeline();
            tl.
            //to( elm,
            //    { autoAlpha:1, y:0, duration:.5, stagger:.1 })
            to( elm,
                { autoAlpha:1, y:0, duration:0.5,
                    scrollTrigger:{
                        trigger: elm,
                        start: 'bottom bottom', //スクロールイベントの開始地点
                        onEnter: () => {  tl.play()  },
                    },
                 })
            .to( elm,
                { '--translateX':'0%', duration:0.5 })
            //.to( elm,
            //    { '--translateX':'50%', duration:0.2 })
            .to( elm,
                {'--translateX':'101%',
                '--beforeOpacity':'0',
                backgroundColor:'#FFFFFF',
                color : 'black',
                duration:0.5 })
            .to( elm,
                {
                    duration : 1,
                    opacity : 1
                }
            );
            //  範囲に入るまでタイムライン全体を停止
            tl.pause();
        });// eff_classs.forEach((tar)
    }// registanim__intro__txtmarker()



}//class anim_gsap
