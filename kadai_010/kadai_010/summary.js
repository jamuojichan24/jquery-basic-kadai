$(function() {
//「文字色変化ボタンを」押した際に、文字色を任意の色に更新する
$('#change-color').on('click',function(){
  $('#target').css('color','pink');
});

//文字内容変化ボタンを押した際に、任意の文字内容に更新する
$('#change-text').on('click',function(){
  $('#target').text('Hello!');
});

//「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
$('#fade-out').on('click',function(){
  $('#target').fadeOut();
});
//「フェードイン」ボタンを押した際に、フェードインで文字が現れる
$('#fade-in').on('click',function(){
  $('#target').fadeIn();
});
});