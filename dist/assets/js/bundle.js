/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/assets_src/js/anim/gsap.js":
/*!*****************************************!*\
  !*** ./dist/assets_src/js/anim/gsap.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ anim_gsap; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  GSAP アニメーション
//
//----------------------------------------
var anim_gsap = /*#__PURE__*/function () {
  function anim_gsap() {
    _classCallCheck(this, anim_gsap);
  }

  //----------------------------------------
  //  各種イベントの登録
  //----------------------------------------
  _createClass(anim_gsap, [{
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
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
  }, {
    key: "registanim__intro__svg",
    value: function registanim__intro__svg() {
      var _this = this;
      var eff_classs = document.querySelectorAll('[data-eff="gsapintro_svg"]');
      if (eff_classs.length <= 0) return;
      //  svg機能をセットした大枠グループ
      eff_classs.forEach(function (tar) {
        var objs = tar.querySelectorAll('.l-intro__idealp');
        //  大枠内のグループアイテム1個
        objs.forEach(function (tar) {
          //  グループ内spanの文字列を全て分割
          _this.common.splitTarget_span(tar, "", false);
          var objctrl = tar;
          var objp1span = tar.querySelectorAll('span');
          var path_txt = "";
          var tl_delay = 0.1;
          gsap.set(objp1span, {
            opacity: 0
          });
          var tl = gsap.timeline();
          //  指定data-indexによってパスを作成
          switch (objctrl.dataset["index"]) {
            case "1":
              path_txt = [{
                x: 0,
                y: 0
              }, {
                x: -100,
                y: 0
              }, {
                x: -200,
                y: 0
              }, {
                x: -300,
                y: -100
              }];
              tl_delay = 0;
              break;
            //  上から
            case "2":
              path_txt = [{
                x: 0,
                y: 0
              }, {
                x: -100,
                y: 0
              }, {
                x: -200,
                y: 0
              }, {
                x: -300,
                y: 100
              }];
              tl_delay = 0.5;
              break;
            //  下から
            default:
              break;
          }
          tl.to(objp1span, {
            scrollTrigger: {
              trigger: tar,
              start: 'top bottom',
              //スクロールイベントの開始地点
              end: 'bottom top',
              //スクロールイベントの終了地点
              // 以下、onイベント
              onEnter: function onEnter() {
                tl.play();
              },
              onEnterBack: function onEnterBack() {
                tl.play();
              },
              onLeaveBack: function onLeaveBack() {
                tl.pause();
              },
              onLeave: function onLeave() {
                tl.pause();
              }
            }
          }).to(objp1span, {
            duration: 2,
            opacity: 1,
            delay: tl_delay,
            stagger: {
              each: 0.1,
              from: "end"
            },
            motionPath: {
              path: path_txt,
              autoRotate: true,
              curviness: 1,
              start: 1,
              end: 0
            },
            ease: "power1.easeOut"
          });
          //  範囲に入るまでタイムライン全体を停止
          tl.pause();
        }); // objs.forEach((tar)
      }); // eff_classs.forEach((tar)
    }

    //----------------------------------------
    //  ポートフォリオ : intro : マーカー
    //----------------------------------------
  }, {
    key: "registanim__intro__txtmarker",
    value: function registanim__intro__txtmarker() {
      var eff_classs = document.querySelectorAll('[data-eff="gsapintro_txtmarker"]');
      if (eff_classs.length <= 0) return;
      //  svg機能をセットした大枠グループ
      eff_classs.forEach(function (target) {
        var tar = target;
        gsap.set(tar, {
          opacity: 1
        });
        var tl = gsap.timeline();
        tl.to(tar, {
          scrollTrigger: {
            trigger: tar,
            start: 'top bottom-=35%',
            //スクロールイベントの開始地点
            end: 'bottom top',
            //スクロールイベントの終了地点
            once: true,
            // 以下、onイベント
            onEnter: function onEnter() {
              tl.play();
              tar.dataset["disp"] = "true";
            },
            onEnterBack: function onEnterBack() {
              tl.play();
              tar.dataset["disp"] = "true";
            }
          }
        });
        //  範囲に入るまでタイムライン全体を停止
        tl.pause();
      }); // eff_classs.forEach((tar)
    } // registanim__intro__txtmarker()

    //----------------------------------------
    //  フェードイン
    //----------------------------------------
  }, {
    key: "set_fadein",
    value: function set_fadein() {
      var elms = document.querySelectorAll('[data-eff="fadein"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        //let tarid = "#"+elm.dataset.targetid;
        //let tar = document.querySelector(tarid);
        gsap.fromTo(elm,
        // アニメーションさせる要素
        {
          autoAlpha: 0
        }, {
          delay: 0.4,
          duration: 1,
          autoAlpha: 1 // アニメーション後は出現(透過率0)
        });
      });
    }

    //----------------------------------------
    //  フェードイン - popup　下から上へ
    //----------------------------------------
  }, {
    key: "set_fadein_up",
    value: function set_fadein_up() {
      var elms = document.querySelectorAll('[data-eff="fadein-up"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        gsap.set(elm, {
          opacity: 0,
          y: 40
        });
        var tl = gsap.timeline();
        tl.to(elm, {
          autoAlpha: 0,
          y: 40,
          duration: 0.5,
          scrollTrigger: {
            trigger: elm,
            // アニメーションが始まるトリガーとなる要素
            start: "top 90%",
            // アニメーションの開始位置
            onEnter: function onEnter() {
              tl.play();
            }
          }
        }).to(elm, {
          duration: 0.5,
          y: 0,
          // アニメーション後の縦位置(上に100px)
          autoAlpha: 1 // アニメーション後に出現(透過率0)
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
  }, {
    key: "set_scrolldisp",
    value: function set_scrolldisp() {
      var elms = document.querySelectorAll('[data-eff="scrolldisp"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        var tarid = "#" + elm.dataset.targetid;
        var tar = document.querySelector(tarid);
        gsap.fromTo(elm,
        // アニメーションさせる要素
        {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          // アニメーション後は出現(透過率0)
          scrollTrigger: {
            trigger: tar,
            // アニメーションが始まるトリガーとなる要素
            toggleActions: "play none none reverse",
            //  上スクロールで戻る
            start: "bottom top" // アニメーションの開始位置
          }
        });
      });
    }

    //----------------------------------------
    //  テキストマーカー 出現演出
    //----------------------------------------
  }, {
    key: "set_txtmarker",
    value: function set_txtmarker() {
      var elms = document.querySelectorAll('[data-eff="txtmarker"]');
      if (elms.length <= 0) return;
      elms.forEach(function (elm) {
        //let elmafter = getComputedStyle(elm, "::after");
        //console.log( elmafter);
        //gsap.set(elmafter, { opacity: 0 });
        //gsap.set(elm, { opacity: 0 });
        var tl = gsap.timeline();
        tl.
        //to( elm,
        //    { autoAlpha:1, y:0, duration:.5, stagger:.1 })
        to(elm, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: elm,
            start: 'bottom bottom',
            //スクロールイベントの開始地点
            onEnter: function onEnter() {
              tl.play();
            }
          }
        }).to(elm, {
          '--translateX': '0%',
          duration: 0.5
        })
        //.to( elm,
        //    { '--translateX':'50%', duration:0.2 })
        .to(elm, {
          '--translateX': '101%',
          '--beforeOpacity': '0',
          backgroundColor: '#FFFFFF',
          color: 'black',
          duration: 0.5
        }).to(elm, {
          duration: 1,
          opacity: 1
        });
        //  範囲に入るまでタイムライン全体を停止
        tl.pause();
      }); // eff_classs.forEach((tar)
    } // registanim__intro__txtmarker()
  }]);
  return anim_gsap;
}(); //class anim_gsap


/***/ }),

/***/ "./dist/assets_src/js/func/accordion.js":
/*!**********************************************!*\
  !*** ./dist/assets_src/js/func/accordion.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordion; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// GSAP使用
//------------------------------------------------------------
//  
//  アコーディオンを閉じる時のアニメーション
//
//------------------------------------------------------------
var closingAnim = function closingAnim(content, element) {
  return gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    //ease: "power3.out",Z
    overwrite: true,
    onComplete: function onComplete() {
      // アニメーションの完了後にopen属性を取り除く( <details>用 )
      element.removeAttribute("open");
    }
  });
};

//------------------------------------------------------------
//
//  アコーディオンを開く時のアニメーション
//
//------------------------------------------------------------
var openingAnim = function openingAnim(content) {
  return gsap.fromTo(content, {
    height: 0,
    opacity: 0
  }, {
    height: "auto",
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true
  });
};

//----------------------------------------
//  アコーディオン処理
//  
//----------------------------------------
var accordion = /*#__PURE__*/function () {
  function accordion() {
    _classCallCheck(this, accordion);
  }

  //----------------------------------------
  //
  //  GSAPを使ってアコーディオンのアニメーションを制御
  //
  //----------------------------------------
  _createClass(accordion, [{
    key: "set_accordions__details",
    value: function set_accordions__details() {
      //  全てのdata属性"accordion-details"を取得
      //  直接<datails>タグを取得してもよい。しかし万が一他の処理と被る場合を考慮し指定している
      var details = document.querySelectorAll('[data-js="accordion-details"]');
      //  全detailsに対して処理
      details.forEach(function (element) {
        //  <summary> Q 質問部分
        var summary = element.querySelector('[data-js="accordion-summary"]');
        //  <div> A 出現する返答部分
        var content = element.querySelector('[data-js="accordion-content"]');

        //  <summary>部分にクリックイベント追加
        summary.addEventListener("click", function (event) {
          // デフォルトの挙動を無効化
          event.preventDefault();
          //  "data-open"と"open"の二種類の属性の違い
          //  "open" : <details>の開閉機能に関わるフラグ
          //  "data-open" : アイコンや開閉のアニメーション切り替えフラグ
          //  タイミングが違う

          //  クリック時data-openがtrueならアコーディオン閉じる処理
          if (element.dataset["open"] == "true") {
            // アイコン操作用フラグを倒す
            element.dataset["open"] = "false";
            content.dataset["open"] = "false";
            // アニメーション実行
            closingAnim(content, element).restart();

            //  クリック時data-openがfalseならアコーディオン開く処理
          } else {
            //  必要とあらば他の全detailsを閉じる処理

            // アイコン操作用フラグを立てる
            element.dataset["open"] = "true";
            content.dataset["open"] = "true";
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
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      //  全アコーディオンを取得して設定
      this.set_accordions__details();
    }
  }]);
  return accordion;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/btn_gototop.js":
/*!************************************************!*\
  !*** ./dist/assets_src/js/func/btn_gototop.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonGotoTop; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var buttonGotoTop = /*#__PURE__*/function () {
  function buttonGotoTop(i_overPosition) {
    _classCallCheck(this, buttonGotoTop);
    //  スクロール
    //  一般的にはヘッダー超えた位置
    this.overPosition = i_overPosition;
    this.items = [];
  }

  //  指定Y位置超えてるか確認
  _createClass(buttonGotoTop, [{
    key: "checkOver",
    value: function checkOver() {
      return document.documentElement.scrollTop > this.overPosition;
    }

    //  data-disp=openを設定して表示
  }, {
    key: "disp",
    value: function disp(i_item) {
      i_item.dataset.disp = "open";
    }
    //  data-disp=hideを設定して非表示
  }, {
    key: "hide",
    value: function hide(i_item) {
      i_item.dataset.disp = "hide";
    }
    //  スクロールイベント内で処理
  }, {
    key: "task",
    value: function task(i_item) {
      this.checkOver() ? this.disp(i_item) : this.hide(i_item);
      //  アイテム名で分岐する要素があればここに書く等する
    }
  }, {
    key: "taskAll",
    value: function taskAll() {
      var _this = this;
      this.items.forEach(function (item) {
        _this.task(item);
      });
    }

    //----------------------------------------
    //  gotoTop処理設定
    //----------------------------------------
  }, {
    key: "regist_gotoTop",
    value: function regist_gotoTop(i_item, i_name) {
      var itm = i_item;
      //  要素要素取得
      //let elm = this.get_hamburgerElements( i_item );
      //  クリックイベントセット
      itm.addEventListener("click", function () {
        //  y0に戻る
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      //  登録時にY位置確認して表示/非表示処理
      this.task(itm);
    }

    //----------------------------------------
    //  名称で処理の分岐
    //----------------------------------------
  }, {
    key: "registItem",
    value: function registItem(i_item, i_name) {
      //  名称で分岐
      switch (i_name) {
        case null:
          this.regist_gotoTop(i_item, i_name);
          break;
      }
    }

    //----------------------------------------
    //  イベント登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this2 = this;
      //  data-js="btngototop" : 全て取得
      var itmgroup = document.querySelectorAll('[data-js="gotoTopButton"]');
      //  ボタンの数だけループ
      itmgroup.forEach(function (item) {
        _this2.items.push(item); //配列に追加
        //  名前があれば取得、なければnull
        var name = item.dataset.name ? tem.dataset.name : null;
        _this2.registItem(item, name);
      });
    }
  }]);
  return buttonGotoTop;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/buttons.js":
/*!********************************************!*\
  !*** ./dist/assets_src/js/func/buttons.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttons; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ボタン( ハンバーガー含む )
//----------------------------------------
var buttons = /*#__PURE__*/function () {
  function buttons() {
    _classCallCheck(this, buttons);
    this.buttons = [];
  }

  //----------------------------------------
  // スクロールを禁止にする関数
  //----------------------------------------
  _createClass(buttons, [{
    key: "disableScroll",
    value: function disableScroll(event) {
      event.preventDefault();
    }
  }, {
    key: "addScrollStop",
    value: function addScrollStop() {
      document.addEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.addEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
      //console.log("addScrollStop()");
    }
  }, {
    key: "removeScrollStop",
    value: function removeScrollStop() {
      document.removeEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.removeEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
      //console.log("removeScrollStop()");
    }

    //----------------------------------------
    //  ウインドウリサイズ時の処理
    //----------------------------------------
  }, {
    key: "resize",
    value: function resize() {
      var _this = this;
      this.buttons.forEach(function (btn) {
        var name = btn.dataset.name;
        //  ハンバーガー
        if (name == "hamburger") {
          var elms = _this.get_hamburgerElements(btn);
          _this.hamburgerClose_isPC(btn, elms);
        }
      });
    }

    //----------------------------------------
    //  PC時リサイズでSP以下の幅になったら強制的に閉じる
    //----------------------------------------
  }, {
    key: "hamburgerClose_isPC",
    value: function hamburgerClose_isPC(i_btn, i_elms) {
      //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
      var ww = window.outerWidth;
      //  commonを使ってサイトの分岐幅を設定しておくこと
      //  タブレット以上なら強制的に閉じる処理
      if (768 <= ww) {
        this.hamburgerClose(i_btn, i_elms);
      }
    }

    //========================================================
    //  ハンバーガー
    //----------------------------------------
    //  このハンバーガー要素に付属するdataから関連要素を全て取得
    //----------------------------------------
  }, {
    key: "get_hamburgerElements",
    value: function get_hamburgerElements(i_item) {
      var itm = i_item;
      var elm = [];
      elm['btn'] = i_item;
      elm['header'] = document.querySelector("#" + itm.dataset.headerid);
      //  メニュー要素
      elm['menu'] = document.querySelector("#" + itm.dataset.menuid);
      elm['menubg'] = document.querySelector("#" + itm.dataset.menubgid);
      //  メニュー要素のul ID
      elm['ul'] = elm['menu'].querySelector("ul");
      elm['lia'] = elm['ul'].querySelectorAll("li a");
      return elm;
    }
    //----------------------------------------
    //  ハンバーガーの処理設定
    //----------------------------------------
  }, {
    key: "regist_hamburger",
    value: function regist_hamburger(i_item, i_name) {
      var _this2 = this;
      var ham = i_item;
      //console.log("[item]"+i_item);
      //console.log("[name]"+i_name);
      //  要素要素取得
      var elm = this.get_hamburgerElements(i_item);
      //  ボタンにクリックイベントセット
      ham.addEventListener("click", function () {
        _this2.hamburgerToggle(i_item, elm);
      });
      //  ul liのメニューがクリックされたら閉じる
      elm['lia'].forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this2.hamburgerClose(i_item, elm);
        });
      });
    }

    //----------------------------------------
    //  ハンバーガー開く
    //----------------------------------------
  }, {
    key: "hamburgerToggle",
    value: function hamburgerToggle(i_item, i_elements) {
      var elms = i_elements;
      //  data-open="open"ではないので開く
      if (i_item.dataset.open != "open") {
        i_item.dataset.open = "open";
        elms['menu'].dataset.open = "open";
        elms['header'].dataset.open = "open";
        //  開いた スクロール停止
        //gsap.fromTo('.p-spmenu__background .stripe',{x:"100%"},{x:"0%",stagger:{each:0.1,from:"end"}});
        //gsap.fromTo('.p-spmenu__inner',{opacity:0},{opacity:1, duration :1.5} );
        this.addScrollStop();
      }
      //  "open"しているなら閉じる
      else {
        this.hamburgerClose(i_item, i_elements);
      }
    }

    //----------------------------------------
    //  ハンバーガー閉じる( 主にメニュークリック時 )
    //----------------------------------------
  }, {
    key: "hamburgerClose",
    value: function hamburgerClose(i_item, i_elements) {
      var elms = i_elements;
      //console.log( i_item );
      //console.log( elms );
      //  data-open="open"で開いている場合
      if (i_item.hasAttribute('data-open') && i_item.dataset.open == "open") {
        //console.log("SP→タブなので強制的に閉じます");
        i_item.dataset.open = "close";
        elms['menu'].dataset.open = "close";
        elms['header'].dataset.open = "close";
        // スクロール解除
        this.removeScrollStop();
      }
    }

    //----------------------------------------
    //  名称で処理の分岐
    //----------------------------------------
  }, {
    key: "registItem",
    value: function registItem(i_item, i_name) {
      //  名称で分岐
      switch (i_name) {
        case "hamburger":
          this.regist_hamburger(i_item, i_name);
          break;
      }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this3 = this;
      //  data-js="hamburger" : 全て取得
      var btngroup = document.querySelectorAll('[data-js="button"]');
      //  ボタンの数だけループ
      btngroup.forEach(function (btn) {
        _this3.buttons.push(btn); //配列に追加
        var name = btn.dataset.name;
        //  ボタンの識別名称があれば登録
        if (name) _this3.registItem(btn, name);
      });
    }
  }]);
  return buttons;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/common.js":
/*!*******************************************!*\
  !*** ./dist/assets_src/js/func/common.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Common; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  共有変数グループ
//----------------------------------------
var Common = /*#__PURE__*/function () {
  function Common() {
    _classCallCheck(this, Common);
    //  ワードプレス : function.phpで請け渡しているワードプレスの配列
    //this.wp_imagePath = wp_var.imgpath;     //  画像パス
    //this.wp_rootpath = wp_var.rootpath;    //  ルートパス
    //this.wp_template = wp_var.templatepath;

    //  静的サイト : header.phpで受け渡しているワードプレス画像のパス
    //this.wp_imagePath = wp_imgpath;     //  画像パス
    //this.wp_rootpath = wp_rootpath;    //  ルートパス
    //this.wp_csspath = this.wp_rootpath + "/assets/css/";
    //this.wp_fontpath = this.wp_rootpath + "/assets/webfonts/";

    //  header.phpで受け渡しているワードプレスのテンプレートファイル名
    //this.wp_template = wp_template;
    //  recaptchaのキー
    this.reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
  }

  //------------------------------------------------
  //  指定要素内の指定タグをspanで分割する
  //------------------------------------------------
  _createClass(Common, [{
    key: "splitTarget_span",
    value: function splitTarget_span(i_target, i_tag, i_reverse) {
      var divs = i_target;
      var spanText = null;
      //  タグが指定されていない場合
      if (i_tag == "" || i_tag == null) {
        //console.log("タグ指定なし : " );
        //console.log(i_target );
        divs = i_target;
        //  指定されている場合は取得
        spanText = divs.innerHTML;
      } else {
        //console.log("タグ指定あり : " + i_tag );
        divs = i_target.querySelector(i_tag);
        console.log(i_target);
        spanText = divs.innerHTML;
      }
      //  要素内文字をspanで分割
      var newText = "";
      spanText.split('').forEach(function (char) {
        //  反転 :全て頭に入れ込む
        if (i_reverse) {
          newText = '<span>' + char + '</span>' + newText;
        } else {
          newText += '<span>' + char + '</span>';
        }
      });
      divs.innerHTML = newText;
      return divs;
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {}
  }]);
  return Common;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/header.js":
/*!*******************************************!*\
  !*** ./dist/assets_src/js/func/header.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ partsHeader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ヘッダー処理
//  
//  指定位置超えたらヘッダー浮かす
//----------------------------------------
var partsHeader = /*#__PURE__*/function () {
  function partsHeader(i_header) {
    _classCallCheck(this, partsHeader);
    //this.lheader = document.querySelector(i_header);
    //this.body = document.querySelector("body");

    //this.set = 200; //  ウインドウ上部からどれぐら
    this.dispPosition = 0; // 120;    //  ヘッダーの位置による

    this.boxTop = new Array();
    this.current = -1;
    //this.taskFloat();
  }
  _createClass(partsHeader, [{
    key: "scrollTask",
    value: function scrollTask() {
      //  ヘッダーのfloat表示
      this.taskFloat();
    }

    //--------------------------------------------------
    //      ヘッダー浮かし処理
    //--------------------------------------------------
  }, {
    key: "taskFloat",
    value: function taskFloat() {
      var scroll = document.documentElement.scrollTop;
      if (!this.pheader) return;
      //  位置を超えていたらヘッダーを浮かす
      if (scroll > this.dispPosition) {
        this.lheader.dataset.float = "true";
        this.pheader.dataset.float = "true";
        this.body.dataset.float = "true";
        //this.header.classList.add("l-header__float");
        //this.body.classList.add("l-header__float");
      } else {
        this.lheader.dataset.float = "false";
        this.pheader.dataset.float = "false";
        this.body.dataset.float = "false";
        //this.header.classList.remove("l-header__float");
        //this.body.classList.remove("l-header__float");
      }
    }

    //--------------------------------------------------
    //  メニューアイテムにマークを付ける
    //  今使ってないけど、Yスクロールに合わせて現在セクションの
    //  メニューに印付けたい場合
    //--------------------------------------------------
  }, {
    key: "taskMenuItemMark",
    value: function taskMenuItemMark(secNum) {
      this.lia = document.querySelector(".header__nav li a");
      //  配列処理にすべき
      this.nav_card = document.querySelector("#hnav_card");
      this.nav_news = document.querySelector("#hnav_news");
      this.nav_price = document.querySelector("#hnav_price");
      this.nav_access = document.querySelector("#hnav_access");
      this.nav_contact = document.querySelector("#hnav_contact");
      if (secNum != current) {
        current = secNum;
        secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
        this.lia.classList.add('hdis-active');

        //位置によって個別に処理をしたい場合　
        if (current == 0) {
          this.nav_card.classList.add('hdis-active');
        } else if (current == 1) {
          this.nav_news.classList.add('hdis-active');
        } else if (current == 2) {
          this.nav_price.classList.add('hdis-active');
        } else if (current == 3) {
          this.nav_access.classList.add('hdis-active');
        } else if (current == 4) {
          this.nav_contact.classList.add('hdis-active');
        }
      }
    }

    //----------------------------------------
    //  設定
    //----------------------------------------
  }, {
    key: "registItem",
    value: function registItem(i_item) {
      //  名称で分岐
      //this.regist_gotoTop( i_item, i_name );
    }

    //----------------------------------------
    //  イベント登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      this.body = document.querySelector("body");
      var itm = document.querySelector('[data-js="header"]');
      if (!itm) return;
      var cr = itm.getBoundingClientRect();
      this.dispPosition = cr.bottom; //  ヘッダーの下超えたら浮かす
      this.lheader = itm;
      this.pheader = this.lheader.querySelector('.p-headerbar');
      if (!this.pheader) return;
      this.registItem(itm);
    }
  }]);
  return partsHeader;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/smoothscroll.js":
/*!*************************************************!*\
  !*** ./dist/assets_src/js/func/smoothscroll.js ***!
  \*************************************************/
/***/ (function() {

var pHeader = document.querySelector('header');
var headerHeight = pHeader ? pHeader.offsetHeight : 0;
var adjustHeader = 0;
var smoothScrollSpeed = 500;

//  全てのa href="#"を取得
var alinks = document.querySelectorAll('a[href^="#"]');
//  全てのaにクリックイベント設定
alinks.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();
    var href = anchor.getAttribute("href");

    // href属性の#を取り除いた部分と一致するIDを取得
    var target = document.getElementById(href.replace('#', ''));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./dist/assets_src/js/func/swiper-setting.js":
/*!***************************************************!*\
  !*** ./dist/assets_src/js/func/swiper-setting.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ swiperGroup; }
/* harmony export */ });


//----------------------------------------
//  swiperグループ
//----------------------------------------
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var swiperGroup = /*#__PURE__*/function () {
  function swiperGroup() {
    _classCallCheck(this, swiperGroup);
    this.swiperObjs = []; //  HTML上の.swiper
    this.swipers = []; //  js上のswiper
  }

  //----------------------------------------
  //  個別 : trainer
  //----------------------------------------
  _createClass(swiperGroup, [{
    key: "make_trainer",
    value: function make_trainer(i_swiper, i_name) {
      var sname = i_swiper + ' .swiper';
      var nextname = i_swiper + ' .swiper-button-next';
      var prevname = i_swiper + ' .swiper-button-prev';
      //console.log( "sname"+sname );
      //this.swiperObjs[i_name] = i_swiper; //  HTMLの要素        
      this.swipers[i_name] = new Swiper(sname, {
        loop: false,
        //initialSlide: 2,
        allowTouchMove: false,
        //  ドラッグ無効
        simulateTouch: true,
        //  タッチイベント
        navigation: {
          nextEl: nextname,
          prevEl: prevname
        },
        //  ページネーション
        centeredSlides: false,
        //   アクティブなスライドを中央に表示
        speed: 500,
        effect: "fade",
        spaceBetween: 15,
        //スライド間の距離
        slidesPerView: 1,
        //スライダーのコンテナ上に同時表示する枚数
        breakpoints: {
          //小さい順に設定する
          1024: {
            slidesPerView: 1
          }
        },
        updateOnWindowResize: true,
        //  ウインドウサイズ変更時自動再計算
        autoplay: false
      });
      //this.swipers[i_name].element = i_swiper;
      this.swipers[i_name].element = document.querySelector(sname);
      //console.log("とれてる？" + this.swipers[i_name].element);

      //console.log("swiper設定 : trainer");
    }

    //----------------------------------------
    //  個別 : studio
    //----------------------------------------
  }, {
    key: "make_studio",
    value: function make_studio(i_swiper, i_name) {
      var sname = i_swiper + ' .swiper';
      //console.log( "sname"+sname );
      // swiperslider
      this.swipers[i_name] = new Swiper(sname, {
        loop: true,
        allowTouchMove: true,
        //  ドラッグ友好
        //  ページネーション
        pagination: {
          el: i_swiper + ' .swiper-pagination',
          type: "bullets",
          clickable: "clickable"
        },
        // Navigation arrows
        navigation: {
          nextEl: i_swiper + ' .swiper-button-next',
          prevEl: i_swiper + ' .swiper-button-prev'
        },
        centeredSlides: true,
        //アクティブなスライドを中央に表示
        spaceBetween: 16,
        //スライド間の距離を16pxに
        slidesPerView: 1,
        //スライダーのコンテナ上に1枚同時に表示
        autoplay: false
      });
      this.swipers[i_name].element = document.querySelector(sname);
    }

    //----------------------------------------
    //  swiperの作成
    //----------------------------------------
  }, {
    key: "registSwiper",
    value: function registSwiper(i_swiper, i_name) {
      this.swiperObjs[i_name] = i_swiper; //  HTML swiperタグ
      switch (i_name) {
        //case "trainer": this.make_trainer( ".p-trainer__swiper", i_name );  break;
        case "studio":
          this.make_studio(".p-studio__swiper", i_name);
          break;
        //case "price": this.make_works( i_swiper, i_name );  break;
      }
      //this.swipers[i_name].element = i_swiper;    //  js swiperデータ

      //console.log("swiper設定 :" + i_name );
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      //  swiperを全て取得
      var swipergroup = document.querySelectorAll('.swiper');
      swipergroup.forEach(function (swiper) {
        //  swiperに指定してある"data-name"を取得
        var name = swiper.dataset.name;
        //  swiperの識別名称がある場合は設定
        if (name) _this.registSwiper(swiper, name);
      });
    }
  }]);
  return swiperGroup;
}();


/***/ }),

/***/ "./dist/assets_src/js/func/tabgroup.js":
/*!*********************************************!*\
  !*** ./dist/assets_src/js/func/tabgroup.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabGroup; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  タブグループ
//
//----------------------------------------
var tabGroup = /*#__PURE__*/function () {
  function tabGroup() {
    _classCallCheck(this, tabGroup);
    this.tabgroup = [];
    this.common = null;
    //  スライドの情報アニメ制御用
    this.tl_slideinfo_rect = [];
  }
  _createClass(tabGroup, [{
    key: "getTarget",
    value: function getTarget(i_tab) {
      var tar = i_tab.dataset['target'];
      var elm = document.querySelector(tar);
      return elm;
    }

    //----------------------------------------
    //  タブ全体閉じる
    //----------------------------------------
  }, {
    key: "tabdisableall",
    value: function tabdisableall(i_group) {
      //  タブの取得
      var tabs = i_group.querySelectorAll('[data-js="tabitem"]');
      //  全タブのstate削除
      tabs.forEach(function (tab) {
        delete tab.dataset.state;
      });
    }

    //  全てactive解除 + ターゲットを隠す
  }, {
    key: "tab_hideAll",
    value: function tab_hideAll(i_group) {
      var _this = this;
      //  タブの取得
      var tabs = i_group.querySelectorAll('[data-js="tabitem"]');
      //  全タブのstate削除
      tabs.forEach(function (tab) {
        delete tab.dataset.state;
        //  ターゲットを隠す
        _this.getTarget(tab).style.display = "None";
      });
    }

    //----------------------------------------
    //  タブをアクティブに
    //----------------------------------------
  }, {
    key: "tabactive",
    value: function tabactive(i_tab) {
      i_tab.dataset['state'] = "open";
    }
  }, {
    key: "activeTab",
    value: function activeTab(i_tab) {
      //  親(グループ)を取得する
      var parent = i_tab.parentNode;
      //  グループの全てを非アクティブにする
      this.tabdisableall(parent);
      //  グループの自分のタブをアクティブにする
      this.tabactive(i_tab);
      return parent;
    }

    //  指定タブのターゲットのdisplayを設定
  }, {
    key: "tab_setDisplay",
    value: function tab_setDisplay(i_tab, i_flag) {
      //this.activeTab( i_tab );

      var elm = this.getTarget(i_tab);
      if (elm) elm.style.display = i_flag;
      //  gsapがセットされている
      //console.log(elm.gsaptl_fadeinUp );
      if (elm.gsaptl_fadeinUp) {
        elm.gsaptl_fadeinUp.restart();
      }
      return parent;
    }

    //----------------------------------------
    //  タブの設定 : trainer
    //----------------------------------------
  }, {
    key: "registTab_trainer",
    value: function registTab_trainer(i_tab) {
      var _this2 = this;
      //  このタブが指定しているID要素を隠す
      this.tab_setDisplay(i_tab, "none");

      //  タブのクリック設定
      i_tab.addEventListener("click", function () {
        //  他を隠す
        _this2.tab_hideAll(i_tab.parentNode);
        //  タブをアクティブ設定
        _this2.activeTab(i_tab);
        //  タブのターゲットを表示
        _this2.tab_setDisplay(i_tab, "flex");
        //  GSAP設定
      });
    }

    //----------------------------------------
    //  タブの設定 : SKILL
    //----------------------------------------
  }, {
    key: "registTab_skill",
    value: function registTab_skill(i_tab) {
      var _this3 = this;
      //  タブのクリック設定
      i_tab.addEventListener("click", function () {
        var parent = i_tab.parentNode;
        parent.dataset['tabindex'];
        _this3.activeTab(i_tab);
        //--------------------------------
        //  タブごとの固有処理( data-key指定 )
        var key = i_tab.dataset['key'];
        //  swiperの取得
        var swi = null;
        swi = _this3.common.swipers['skill'];
        switch (key) {
          case 'skillswiper1':
            swi.slideTo(0);
            break;
          case 'skillswiper2':
            swi.slideTo(1);
            break;
          default:
            break;
        }
      });
    }

    //----------------------------------------
    //  タブグループの設定
    //  グループ内のタブしか検索しないのでグループ名は不要
    //----------------------------------------
  }, {
    key: "registGroup",
    value: function registGroup(i_group) {
      var _this4 = this;
      //  開いているタブ番号を設定
      i_group.dataset['tabindex'] = 0;

      //  タブの取得
      var tabs = i_group.querySelectorAll('[data-js="tabitem"]');
      //  data-keyからグループ名を取得
      var groupkey = i_group.dataset['key'];
      switch (groupkey) {
        //  トレーナー
        case "trainer":
          //  タブ設定 + 非表示
          tabs.forEach(function (tab) {
            _this4.registTab_trainer(tab);
          });
          //  アクティブのタブを表示
          var ti = i_group.dataset['tabindex'];
          var elm = this.tab_setDisplay(tabs[ti], "flex");
          break;
        case "skill":
          tabs.forEach(function (tab) {
            _this4.registTab_skill(tab);
          });
          break;
      }
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_common) {
      var _this5 = this;
      //  共有変数クラスの確保
      this.common = i_common;
      //  data-js : タブグループの取得
      var tabgroup = document.querySelectorAll('[data-js="tabgroup"]');
      //  タブグループの数だけループ
      tabgroup.forEach(function (tgroup) {
        _this5.registGroup(tgroup);
      });
    }
  }]);
  return tabGroup;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!****************************************!*\
  !*** ./dist/assets_src/js/_myindex.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _func_smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func/smoothscroll */ "./dist/assets_src/js/func/smoothscroll.js");
/* harmony import */ var _func_smoothscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_func_smoothscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _func_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./func/common */ "./dist/assets_src/js/func/common.js");
/* harmony import */ var _func_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./func/header */ "./dist/assets_src/js/func/header.js");
/* harmony import */ var _func_btn_gototop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func/btn_gototop */ "./dist/assets_src/js/func/btn_gototop.js");
/* harmony import */ var _func_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./func/buttons */ "./dist/assets_src/js/func/buttons.js");
/* harmony import */ var _func_tabgroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/tabgroup */ "./dist/assets_src/js/func/tabgroup.js");
/* harmony import */ var _func_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./func/accordion */ "./dist/assets_src/js/func/accordion.js");
/* harmony import */ var _func_swiper_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./func/swiper-setting */ "./dist/assets_src/js/func/swiper-setting.js");
/* harmony import */ var _anim_gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anim/gsap */ "./dist/assets_src/js/anim/gsap.js");


//  スムーススクロール( IDジャンプした際にURLにIDが付与されるのを回避 )

 //  共有変数の入れ物

 //  ヘッダ処理
 //  トップに戻る
 //  ボタン( ハンバーガー含む )
 //  タブグループ
 //  アコーディオン
 //  swiper設定
 //  GSAPアニメーション

var varcommon = new _func_common__WEBPACK_IMPORTED_MODULE_1__["default"]();
var header = new _func_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
var btnGotoTop = new _func_btn_gototop__WEBPACK_IMPORTED_MODULE_3__["default"](90); //  ヘッダーの高さ
var buttons = new _func_buttons__WEBPACK_IMPORTED_MODULE_4__["default"]();
var tabgroup = new _func_tabgroup__WEBPACK_IMPORTED_MODULE_5__["default"]();
var accordions = new _func_accordion__WEBPACK_IMPORTED_MODULE_6__["default"]();
var swipergroup = new _func_swiper_setting__WEBPACK_IMPORTED_MODULE_7__["default"]();
var anim_gsap = new _anim_gsap__WEBPACK_IMPORTED_MODULE_8__["default"]();

//----------------------------------------------------
//  初期化関数
//----------------------------------------------------
var init = function init() {
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
  tabgroup.eventRegistration(varcommon);
  //  アコーディオン設定
  accordions.eventRegistration();

  //  GSAPアニメ登録
  anim_gsap.eventRegistration(varcommon);
};

//----------------------------------------------------
//  イベント : ロード
//----------------------------------------------------
window.addEventListener('DOMContentLoaded', function () {
  init();
});

//----------------------------------------------------
//  イベント : スクロール
//----------------------------------------------------
window.addEventListener('scroll', function () {
  header.taskFloat(); //  ヘッダー浮かす/戻す処理
  btnGotoTop.taskAll(); //  「トップに戻る」の表示/非表示
});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", function () {
  //  SP→TAB・PCに切り替わった際SPメニュー閉じる処理
  buttons.resize();
});

//----------------------------------------------------
//  イベント : キー
//----------------------------------------------------
window.addEventListener("keydown", function (event) {});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map