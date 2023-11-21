$(function (){
  //id属性がbtnの要素がクリックされたら
  $('.btn').on('click',function () {
    //テキストボックス内に「クリックしました！」と表示する
   $('.text-box').val('クリックしました！');
  });
});