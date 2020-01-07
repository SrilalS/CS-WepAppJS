var Payload;
var Jsn;
var IDList = [];
var i = 0;
var id = 0;



//txtTOspch
var synth = window.speechSynthesis;


if (window.speechSynthesis.getVoices().length == 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function() {
        available_voices = window.speechSynthesis.getVoices();
    });
} else {
    available_voices = window.speechSynthesis.getVoices();
}

function textToSpeech(texttobespoken) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();

    // this will hold an english voice
    var english_voice = '';

    // find voice by language locale "en-US"
    // if not then select the first voice
    for (var i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i + 1];
            break;
        }
    }
    if (english_voice === '')
        english_voice = available_voices[1];

    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = texttobespoken;
    utter.voice = english_voice;

    // event after text has been spoken
    utter.onend = function() {
        console.log('Speech has finished');
    }

    // speak
    window.speechSynthesis.speak(utter);
}
//

var Pname = document.querySelector("#pname");
var cslvl = document.querySelector("#cslvl");
var img = document.querySelector("#img");

var requestOptions = { //set request oprions for fetcher
    method: 'GET',
    redirect: 'follow'
};

function fetcher() { //this one will get the JSON data
    fetch("https://api.splashthat.com/events/457584143/guestlist?page=1&limit=1&status%5B%5D=checkin_yes&sort=modified+DESC&viewGroups%5B%5D=contactTags&viewGroups%5B%5D=contactLists&viewGroups%5B%5D=bounceInfo&viewGroups%5B%5D=groupContactAnswer&viewGroups%5B%5D=groupContactEventList&viewGroups%5B%5D=contactList&access_token=ZDRmM2ZlMTc4NWM0ZDg3NDE0ZTlhYmVlNTM1NDQ3MTkxYzIwN2I0MzU0OTFmMWY4OWU3MDg1OTNhMzFmOGMwNw", requestOptions)
        .then(response => response.text())
        .then(result => Payload = result)
        .then(result => Jsn = JSON.parse(Payload))
        .catch(error => console.log('Error: ', error));

}




function DataOps() { //this is the one who fills data.
    console.log(Jsn.data.guests[0].contact.id);
    for (let index = 0; index < 5; index++) {
        var idcheck = Jsn.data.guests[0].answers[index].question_id;
        if (idcheck == '1039306') {
            lvl = Jsn.data.guests[0].answers[index].answer;
            console.log(lvl);
            cslvl.innerHTML = 'Crowdsource Level : ' + lvl;
        } else {
            cslvl.innerHTML = ' ';
        };
    };
    id = Jsn.data.guests[0].id;
    Fname = Jsn.data.guests[0].contact.first_name;
    Lname = Jsn.data.guests[0].contact.last_name;
    img.src = './assets/propics/' + id + '.jpg';
    Pname.innerHTML = Fname + ' ' + Lname;
    console.log(Fname);
    console.log(Lname);
    console.log('Splashthat ID: ' + id);
}

function totalLoopALT() { //main loop functions recursive
    //
    //NOTE : DO NOT BREAK THE TIME SYNC OR THIS WILL GO NUTS
    //

    //T-0
    console.log(IDList);
    fetcher();
    i++;


    //Runs At T+0 Sec


    console.log(i + ' : Splash');

    $('#div1').slideUp(0);
    $('#div1').removeClass('animX');
    $('#div2').addClass('animX');


    setTimeout(function() { //Runs At T+2 Sec
        DataOps();
    }, 2 * 1000);

    setTimeout(function() { //Runs At T+10 Sec
        if (IDList.includes(id)) {
            console.log('ID is Here!');
        } else {
            $('#div1').slideDown(1);
            $('#div1').addClass('animX');
            $('#div2').removeClass('animX');
            textToSpeech(Fname + ' ' + Lname);
        }
        console.log(i + ' : Profile');
    }, 10 * 1000);



    setTimeout(function() { //Runs At T+20 Sec

        console.log(i + ' : Splash');

        $('#div1').slideUp(0);
        $('#div2').removeClass('animX');
        $('#div2').addClass('animX');

        if (!IDList.includes(id)) {
            IDList.push(id);
        };

    }, 20 * 1000);

    setTimeout(function() { //Runs At T+25 Sec
        console.log(IDList);
        console.log('End of Loop :' + i);
        totalLoopALT();
    }, 25 * 1000)

    //T+25 Sec
}

totalLoopALT();


//ALT

function totalLoop() { //main loop functions recursive
    //
    //NOTE : DO NOT BREAK THE TIME SYNC OR THIS WILL GO NUTS
    //

    //T-0
    console.log(IDList);
    fetcher();
    i++;


    setTimeout(function() { //Runs At T+1 Sec


        console.log(i + ' : Profile');

        $('#div1').slideDown(0);
        $('#div1').addClass('animX');
        $('#div2').removeClass('animX');
    }, 1 * 250);

    setTimeout(function() { //Runs At T+11 Sec

        console.log(i + ' : Splash');
        $('#div1').slideUp(1);
        $('#div2').addClass('animX');
    }, 11 * 1000);

    setTimeout(function() { //Runs At T+12 Sec
        DataOps();
    }, 12 * 1000);

    setTimeout(function() { //Runs At T+21 Sec

        console.log(i + ' : Profile');

        $('#div1').slideDown(0);
        $('#div1').addClass('animX');

        if (!IDList.includes(id)) {
            IDList.push(id);
        };
        $('#div2').removeClass('animX');
    }, 21 * 1000);

    setTimeout(function() { //Runs At T+25 Sec
        console.log(IDList);
        if (IDList.includes(id)) {
            console.log('ID is Here!');
        }
        totalLoop();
    }, 25 * 1000)

    //T+25 Sec
}



//totalLoop();