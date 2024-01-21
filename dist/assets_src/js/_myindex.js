'use strict';

//  スムーススクロール( IDジャンプした際にURLにIDが付与されるのを回避 )
import './func/smoothscroll';

import varCommon from './func/common'; //  共有変数の入れ物

import Header from './func/header';             //  ヘッダ処理
import buttonGotoTop from './func/btn_gototop'; //  トップに戻る
import Buttons from './func/buttons';           //  ボタン( ハンバーガー含む )
import tabGroup from './func/tabgroup';         //  タブグループ
import Accordions from './func/accordion';      //  アコーディオン
import swiperGroup from './func/swiper-setting';//  swiper設定
import anim_GSAP from './anim/gsap';            //  GSAPアニメーション

const varcommon = new varCommon();
const header = new Header();
const btnGotoTop = new buttonGotoTop( 90 ); //  ヘッダーの高さ
const buttons = new Buttons();
const tabgroup = new tabGroup();
const accordions = new Accordions();
const swipergroup = new swiperGroup();
const anim_gsap = new anim_GSAP();

//----------------------------------------------------
//  初期化関数
//----------------------------------------------------
const init = function() {
    //  スワイパー
    swipergroup.eventRegistration();
    varcommon.swipers = swipergroup.swipers;

    //  ヘッダー設定
    header.eventRegistration();
    //  ヘッダーハンバーガーの設定
    buttons.eventRegistration();
    //  トップに戻る
    btnGotoTop.eventRegistration();
    //  タブグループ
    tabgroup.eventRegistration( varcommon );
    //  アコーディオン設定
    accordions.eventRegistration();
    
    //  GSAPアニメ登録
    anim_gsap.eventRegistration( varcommon );    
};

//----------------------------------------------------
//  イベント : ロード
//----------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    init();
});

//----------------------------------------------------
//  イベント : スクロール
//----------------------------------------------------
window.addEventListener('scroll', () => {
    header.taskFloat(); //  ヘッダー浮かす/戻す処理
    btnGotoTop.taskAll();   //  「トップに戻る」の表示/非表示
});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", () => {
    //  SP→TAB・PCに切り替わった際SPメニュー閉じる処理
    buttons.resize();
});

//----------------------------------------------------
//  イベント : キー
//----------------------------------------------------
window.addEventListener("keydown", (event) =>{
});
