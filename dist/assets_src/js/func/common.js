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

    }

    //------------------------------------------------
    //  指定要素内の指定タグをspanで分割する
    //------------------------------------------------
    splitTarget_span( i_target, i_tag, i_reverse ){
        let divs = i_target;
        let spanText = null;
        //  タグが指定されていない場合
        if( (i_tag == "" || i_tag== null) ){
            divs = i_target;
        //  指定されている場合は取得
            spanText = divs.innerHTML;
        }else{
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