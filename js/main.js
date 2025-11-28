//jsを記述する際はここに記載していく

//変数の定義　https://magazine.techacademy.jp/magazine/14872


let num_of_people = 3;

let real_name = Array(num_of_people);
let input = Array(num_of_people);
let input_num = Array(num_of_people);
let ratio = Array(num_of_people);
let person_payment = Array(num_of_people);
let total_value = 0;

//inputでとった数値は文字列なので、数値に変換する

/////以下なんで動かないかは別途
// for (i=0; i<input_num.length; i++){
// $(`#people${i+1}_exp`).on('change', function () {
// input[i] = $(`#people${i+1}_exp`).val();
// console.log('change event後のinput1の値：'+input[i]);
// input_num[i] = Number(input[i]);
// console.log('change event後のinput1の数値：'+input_num[i]);
// });

// }

//アカウント情報をvalで撮ってきて、それをLocal Storageに保存する
$('.save_account_btn').on('click', function () {
    let account_info_val = $('#account_info').val();
    localStorage.setItem("account_information", account_info_val);
});

if (localStorage.getItem('account_information')) {
    const saved_account_info = localStorage.getItem("account_information");
    $('#account_info').val(saved_account_info);
}

$('.rm_account_btn').on('click', function () {
    localStorage.removeItem('account_information')
    $('#account_info').val("")
});

//テンプレメッセージ情報をvalで撮ってきて、それをLocal Storageに保存する
$('.save_btn').on('click', function () {
    let thx_message_val = $('#thank_you_message').val();
    localStorage.setItem("message_template", thx_message_val);
});

if (localStorage.getItem('message_template')) {
    const saved_thx_info = localStorage.getItem("message_template");
    $('#thank_you_message').val(saved_thx_info);
}

$('.rm_template_message').on('click', function () {
    localStorage.removeItem('message_template')
    $('#thank_you_message').val("")
});


// //参加者の名前を取ってくる

///なんでこれ動かないのかな
// for(i=0; i<3; i++){
// $(`.people${i+1}_name`).on('change', function(){
// const name_1 = $(`.people${i+1}_name`).val();
// console.log(name_1);
// });
// }


$(`.people1_name`).on('change', function () {
    real_name[0] = $(`.people1_name`).val();
    // console.log(name_1);
});

$(`.people2_name`).on('change', function () {
    real_name[1] = $(`.people2_name`).val();
});

$(`.people3_name`).on('change', function () {
    real_name[2] = $(`.people3_name`).val();
});



//みんながどれくらいの負担をするかを記載
$(`#people1_exp`).on('change', function () {
    input[0] = $(`#people1_exp`).val();
    console.log('change event後のinput1の値：' + input[0]);
    input_num[0] = Number(input[0]);
    console.log('change event後のinput1の数値：' + input_num[0]);
});


$(`#people2_exp`).on('change', function () {
    input[1] = $(`#people2_exp`).val();
    console.log('change event後のinput2の値：' + input[1]);
    input_num[1] = Number(input[1]);

});

$(`#people3_exp`).on('change', function () {
    input[2] = $(`#people3_exp`).val();
    console.log('change event後のinput3の値：' + input[2]);
    input_num[2] = Number(input[2]);
});

$('#value').on('change', function () {
    // console.log('valueを変えた時のinput_1:'+input_1);
    total_value = $('#value').val();
    // console.log('change event後のtotal_valueの値：'+total_value);
    //数値に変換
    total_value_num = Number(total_value);

    localStorage.setItem('Total_Pay', total_value_num)
    console.log('total_value_Numの数値：' + total_value_num);

    if (localStorage.getItem('Total_Pay')) {
    const total_amount = localStorage.getItem('Total_Pay');
    console.log('~~~'+total_amount);
    $('.people1_name').val('aaaa');
}

    let sum = 0;

    for (i = 0; i < input_num.length; i++) {
        sum = sum + input_num[i];
    }
    console.log('sumの数値：' + sum);

    for (i = 0; i < input_num.length; i++) {
        ratio[i] = input_num[i] / sum
        console.log('ratio：' + i + "の値：" + ratio[i]);
    }


});

$('.start_btn').on('click', function () {

    //計算を開始する

    for (i = 0; i < input_num.length; i++) {
        person_payment[i] = ratio[i] * total_value_num
        console.log('Person' + i + "の支払額：" + person_payment[i]);
        $(`.people${i + 1}_cal_val`).html(person_payment[i]);

        let obj = {
            name: real_name[i],
            jpy: person_payment[i]
        }
        console.log(obj);
        let json_fmt=JSON.stringify(obj);
        let x=i+1
        let key='person'+x;
        localStorage.setItem(key,json_fmt);
    }

    //名前と金額を保存んする
    // let obj={
    //     name : real_name[0],
    //     jpy : person_payment[0]
    // }
    // console.log(obj);

})

// let message = localStorage.message_template +"======" +\n+ localStorage.account_information;
// console.log('message中身:'+ message)

$('.create_msg_btn').on('click', function () {

let jsonObj = Array(3)
let js_pars_obj=Array(3)

for(i=0;i<3; i++){
jsonObj[i] = localStorage.getItem(`person${i+1}`);
js_pars_obj[i] = JSON.parse(jsonObj[i]);
console.log('Parseご'+i);
console.log(js_pars_obj);
console.log(js_pars_obj[i].name);
}
// let jsonObj = localStorage.getItem('person1');
// let js_pars_obj = JSON.parse(jsonObj);
// console.log('Parseご');
// console.log(js_pars_obj.name);


$('#draft_message').html(`
${localStorage.message_template}

支払い総額:${localStorage.Total_Pay}JPY

負担額:
${js_pars_obj[0].name}さん:${js_pars_obj[0].jpy}JPY
${js_pars_obj[1].name}さん:${js_pars_obj[1].jpy}JPY
${js_pars_obj[2].name}さん:${js_pars_obj[2].jpy}JPY
===========お支払い情報============
${localStorage.account_information}
`
    )
});

