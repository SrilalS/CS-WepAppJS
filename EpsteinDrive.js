var Payload;
var Json;
var IDList = [];
var i = 0;

function totalLoop() {
    setTimeout(function() {
        i++;
        console.log(i);
        IDList.push(i);
        $('#div1').show();
        $('#div1').addClass('animX');
        $('#div2').removeClass('animX');
    }, 1 * 1000);

    setTimeout(function() {
        i++;
        console.log(i);
        IDList.push(i);
        $('#div1').hide();
        $('#div2').addClass('animX');
    }, 11 * 1000);

    setTimeout(function() {
        i++;
        console.log(i);
        IDList.push(i);
        $('#div1').show();
        $('#div1').addClass('animX');
        $('#div2').removeClass('animX');
    }, 21 * 1000);

    setTimeout(function() {
        console.log(IDList);
        if (IDList.includes(12) == true) {
            console.log('ID is Here!');
        }
        totalLoop();
    }, 25 * 1000)
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function fetcher() {
    fetch("https://api.splashthat.com/events/457584143/guestlist?page=1&limit=1&status%5B%5D=checkin_yes&sort=checked_in+ASC&viewGroups%5B%5D=contactTags&viewGroups%5B%5D=contactLists&viewGroups%5B%5D=bounceInfo&viewGroups%5B%5D=groupContactAnswer&viewGroups%5B%5D=groupContactEventList&viewGroups%5B%5D=contactList&access_token=M2YxYTFkODc2MGRiNmU2ZWNhNDIyMjFkMTk5ODc5M2RjZDNmNzliYjg4ZDc2NjVkYjhlMzczN2JlNzBmZDdhYw", requestOptions)
        .then(response => response.text())
        .then(result => Payload = result)
        .then(result => Json = JSON.parse(Json))
        .catch(error => console.log('Error: ', error));
}

var name = document.querySelector("#name");
var cslvl = document.querySelector("#cslvl");
var img = document.querySelector("#img");


function DataOps() {
    for (let index = 0; index < 5; index++) {
        var idcheck = Json.data.guests[0].answers[index].question_id;
        if (idcheck == '1039306') {
            lvl = Json.data.guests[0].answers[index].answer;
            console.log(lvl);
            cslvl.innerHTML = 'Crowdsource Level : ' + lvl;
            break;
        };
    };
    id = Json.data.guests[0].id
    Fname = Json.data.guests[0].contact.first_name;
    Lname = Json.data.guests[0].contact.last_name;
    img.src = './assets/img/' + id + '.png';
    name.innerHTML = Fname + ' ' + Lname;
    console.log(Fname);
    console.log(Lname);
    console.log(id);
}

totalLoop();

/* 
var json;
var JO;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.splashthat.com/events/457584143/guestlist?page=1&limit=1&status%5B%5D=checkin_yes&sort=checked_in+ASC&viewGroups%5B%5D=contactTags&viewGroups%5B%5D=contactLists&viewGroups%5B%5D=bounceInfo&viewGroups%5B%5D=groupContactAnswer&viewGroups%5B%5D=groupContactEventList&viewGroups%5B%5D=contactList&access_token=M2YxYTFkODc2MGRiNmU2ZWNhNDIyMjFkMTk5ODc5M2RjZDNmNzliYjg4ZDc2NjVkYjhlMzczN2JlNzBmZDdhYw", requestOptions)
    .then(response => response.text())
    .then(result => json = result)
    .then(result => JO = JSON.parse(json))
    .catch(error => console.log('error', error));

var txt = document.querySelector("#name");
var cslvl = document.querySelector("#cslvl");
var btn = document.querySelector("#btn");
var img = document.querySelector("#img");
var block = document.querySelector("#block");
var id;
var Fname;
var Lname;
var lvl = 0;

use include() to see if the array has it.



$('input').click(function(ev) {
    $('div').toggleClass('animX');
    setTimeout(function() {

        setTimeout(function() {
            $('div').toggleClass('animX');
            $('#div1').slideToggle(0);
            $('div').addClass('animX');
        }, 1000);
        setTimeout(function() {
            $('#div2').toggleClass('animX');
        }, 1000);
    }, 2000);
});

function timer() {

    setTimeout(function() {
        $('div').toggleClass('animX');
        setTimeout(function() {
            setTimeout(function() {
                $('div').toggleClass('animX');
                $('#div1').slideToggle(0);
                $('div').addClass('animX');
            }, 2 * 1000);
            setTimeout(function() {
                $('#div2').toggleClass('animX');
            }, 1000);
        }, 2000);
    }, 5 * 1000);

    setTimeout(function() {
        timer();
    }, 30 * 1000);

}

timer();
/*

$(function timeloop() {
    setTimeout(function() {
        $('div').toggleClass('animX');
        setTimeout(function() {
            setTimeout(function() {
                $('div').toggleClass('animX');
                $('#div1').slideToggle(0);
                $('div').addClass('animX');
            }, 1000);
            setTimeout(function() {
                $('#div2').toggleClass('animX');
            }, 1000);
        }, 2000);
    }, 4000);
});

/*

$('div').toggleClass('animX');
setTimeout(function() {
    $('div').toggleClass('animX');
}, 2000);



btn.addEventListener('click', function() {


    for (let index = 0; index < 5; index++) {
        var idcheck = JO.data.guests[0].answers[index].question_id;
        if (idcheck == '1039306') {
            lvl = JO.data.guests[0].answers[index].answer;
            console.log(lvl);
            cslvl.innerHTML = 'Crowdsource Level : ' + lvl;
            break;
        };
    };
    id = JO.data.guests[0].id
    Fname = JO.data.guests[0].contact.first_name;
    Lname = JO.data.guests[0].contact.last_name;
    img.src = './assets/img/' + id + '.png';
    txt.innerHTML = Fname + ' ' + Lname;
    console.log(Fname);
    console.log(Lname);
    console.log(id);
});
/*
setInterval(function() {
    for (let index = 0; index < 5; index++) {
        var idcheck = JO.data.guests[0].answers[index].question_id;
        if (idcheck == '1039306') {
            lvl = JO.data.guests[0].answers[index].answer;
            console.log(lvl);
            break;
        };
    };
    id = JO.data.guests[0].id
    Fname = JO.data.guests[0].contact.first_name;
    Lname = JO.data.guests[0].contact.last_name;
    txt.innerHTML = lvl;
    console.log(Fname);
    console.log(Lname);
    console.log(id);
}, 1000);

*/