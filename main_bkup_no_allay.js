//jsを記述する際はここに記載していく

//変数の定義　https://magazine.techacademy.jp/magazine/14872
let input_1 =0;
let input_2=0;
let input_3=0;
let input_1_num=0;
let input_2_num=0;
let input_3_num=0;
let ratio_1=100;
let ratio_2=0;
let ratio_3=0;
let person1_payment=0;
let person2_payment=0;
let person3_payment=0;



// console.log('初期input_1：'+input_1);
// console.log('初期input_2：'+input_2);
// console.log('初期input_3：'+input_3);

//inputでとった数値は文字列なので、数値に変換する
$('#GM').on('change', function () {
input_1 = $('#GM').val();
console.log('change event後のinput1の値：'+input_1);
input_1_num = Number(input_1);
console.log('change event後のinput1の数値：'+input_1_num);
});



$('#SM').on('change', function () {
input_2 = $('#SM').val();
console.log('change event後のinput2の値：'+input_2);
input_2_num = Number(input_2);
});

$('#Staff').on('change', function () {
input_3 = $('#Staff').val();
console.log('change event後のinput3の値：'+input_3);
input_3_num = Number(input_3);
});

$('#value').on('change', function () {
// console.log('valueを変えた時のinput_1:'+input_1);
let total_value = $('#value').val();
// console.log('change event後のtotal_valueの値：'+total_value);
//数値に変換
total_value_num = Number(total_value);
console.log('total_value_Numの数値：'+ total_value_num);

let sum = input_1_num+input_2_num+input_3_num;
console.log('sumの数値：'+ sum);

ratio_1=input_1_num/sum;
console.log('ratio1の値：'+ ratio_1);

ratio_2=input_2_num/sum;
console.log('ratio2の値：'+ ratio_2);

ratio_3=input_3_num/sum;
console.log('ratio3の値：'+ ratio_3);

});

$('.start_btn').on('click', function(){
//計算を開始する
person1_payment = ratio_1*total_value_num;
console.log("Person1 Payment :"+person1_payment)
$('.people1_cal_val').html(person1_payment);

person2_payment = ratio_2*total_value_num;
$('.people2_cal_val').html(person2_payment);

person3_payment = ratio_3*total_value_num;
$('.people3_cal_val').html(person3_payment);

})


