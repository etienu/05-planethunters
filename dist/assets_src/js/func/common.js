//----------------------------------------
//  共有変数グループ
//----------------------------------------
export default class Common {
    constructor() {
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
    splitTarget_span( i_target, i_tag, i_reverse ){
        let divs = i_target;
        let spanText = null;
        //  タグが指定されていない場合
        if( (i_tag == "" || i_tag== null) ){
            //console.log("タグ指定なし : " );
            //console.log(i_target );
            divs = i_target;
        //  指定されている場合は取得
            spanText = divs.innerHTML;
        }else{
            //console.log("タグ指定あり : " + i_tag );
            divs = i_target.querySelector(i_tag);
            console.log(i_target );
            spanText = divs.innerHTML;
        }
        //  要素内文字をspanで分割
        let newText = "";
        spanText.split('').forEach((char)=>{
            //  反転 :全て頭に入れ込む
            if( i_reverse ){
                newText = '<span>' + char + '</span>' + newText;
            }else{
                newText += '<span>' + char + '</span>';
            }
        });
        divs.innerHTML = newText;
        return divs;
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
    eventRegistration() {

    }
}