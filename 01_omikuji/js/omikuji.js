"use strict"

let n = "";
let nBefore = "";

window.addEventListener("DOMContentLoaded",
    function(){
        //ページ本体が読み込まれたタイミングで実行するコード
        // ヘッダーのテキストエフェクト
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
                effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
                delayScale: 1.5, // 遅延時間の指数
                delay: 50, // 文字ごとの遅延時間
                sync: false, // trueはアニメーションをすべての文字に同時に適用
                shuffle: true // trueは文字を順番にではなく、ランダムに
            }
        });

        // おみくじボタン(id="btn1") ボヤァと表示させる
        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });


    setTimeout(
        function (){
        //ホップアップメッセージ
            let popmsg = "いらっしゃい!おみくじ引いてって!";
            window.alert(popmsg);
        },
        "5000"
    );
        
    }, false
);

// おみくじボタン 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener('click',
    function() {
    //    let n = Math.floor(Math.random() * 3);

    //    switch (n) {
    //        case 0:
    //          btn1.textContent = "Very Happy!!";
    //          btn1.style.color = "#ff0000";
    //          btn1.style.fontSize = "40px";
    //          break;
    //      case 1:
    //          btn1.textContent = "Happy!";
    //          btn1.style.color = "#fff001";
    //          btn1.style.fontSize = "30px";
    //          break;
    //      case 2:
    //          btn1.textContent = "Unhappy...";
    //          btn1.style.color = "#261e1c";
    //          btn1.style.fontSize = "20px";
    //          break;
    //  }

    let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
    let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","ff8c00","#1e90ff"];
    let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
    //let n = Math.floor(Math.random() * resultText.length);
    
    while(n == nBefore){
        n = Math.floor(Math.random() * resultText.length);
    }

    nBefore = n;

    btn1.textContent = resultText[n];
    btn1.style.color = resultColor[n];
    btn1.style.fontSize = resultFontSize[n];

    let resultMaxSpeed  = [0,10,8,5,5,5];
    let resultMaxSize   = [30,30,20,15,20,20];
    let resultImage     = ["img/star.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/leaf.png","img/snowflakes.png"];

        // snowfall stop
        $(document).snowfall("clear");

        // jQueryのsnowfall
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : resultMaxSpeed[n], // 最大速度
                minSpeed : 1, // 最小速度
                maxSize : resultMaxSize[n], // 最大サイズ
                minSize : 1, // 最小サイズ
                image : resultImage[n]
            });
        });
    }, false
);
