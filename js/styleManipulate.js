$(document).ready(function() {

    let country = navigator.language||navigator.browserLanguage;

    if (country === 'th') {

        //class
        $('html').addClass('font-th');

        //text
        $('title').text('สร้าง passive income');
        $('h1.caption').text('ใครบอกว่ามันเป็นไปไม่ได้ที่จะสร้างรายได้แบบ passive income 7วันต่อสัปดาห์ โดยที่ไม่มีส่วนร่วมของคุณ');
        $('h2.form-caption').text('สมัครสมาชิกก่อนที่จะสายเกินไป ความลับทั้งหมดของการสร้างรายได้แบบ passive income อยู่ที่นี่');
        $('span.asterisk-text').text('กรอกข้อมูลที่จำเป็น');
        $('span.email-text').text('ที่อยู่อีเมล');

        //attribute
        $('input.email').attr({"placeholder":"กรอกอีเมล์ของคุณ"});
        $('input.button').attr({"value":"สมัครสมาชิก"});

    } else {

        //class
        $('html').addClass('font-en');

        //text
        $('title').text('Create passive income');
        $('h1.caption').text('Who said that it is impossible to generate passive income 7 days a week without your participation?');
        $('h2.form-caption').text('Subscribe before it\'s too late. All the secrets of generating passive income are here.');
        $('span.asterisk-text').text('indicates required');
        $('span.email-text').text('Email Address');

        //attribute
        $('input.email').attr({"placeholder":"Enter your email"});
        $('input.button').attr({"value":"Subscribe"});

    }
});