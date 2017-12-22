var zun = "ズン\n";
var doko = "ドコ\n";
var count = 0; //カウント
var kara = "";

while (true) { //trueは無限ループ
  if (Math.random() < 0.5) { //ランダム確率のお話
    kara += zun //zunを追加
    count++ // 1カウントアップ
  } else { //karaが1以上になったら
    kara += doko //ためたズンとドコと合体するよ karaの中は正解がはいる
    if (count === 4) break //最終審査でずんが4つだったら合格
    else count = 0 //不合格(3以下)だったらカウント0に戻る
  }
}
console.log(kara + "き・よ・し！！"); //brakeはここにくる

// \n 改行の意味
// Math.random() ランダムで表示させる
// += 変数の値に式で指定された値を加算し、その結果を変数に代入