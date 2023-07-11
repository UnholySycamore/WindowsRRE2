//if intro
var is_intro = true; //should be true
var if_intro = false;
//if sound
var is_sound = true;
var bmusic = 1;
//sound
var background_music_1 = new Audio('Background_music_1.mp3');
var locked_sound = new Audio('locked_sound.mp3');
var message_sound = new Audio('message_sound.mp3');
var error_sound = new Audio('error_sound.mp3');
var download_sound = new Audio('download_sound.mp3');
var tense_music = new Audio('tense_music.mp3');
//Instant Sound
var start_sound = document.getElementById("start_sound");
var jump_sound_2 = document.getElementById("jump_sound_2");
var jump_sound = document.getElementById("jump_sound");
var background_music_2 = document.getElementById("background_music_2");
var mini_jump_sound = document.getElementById("mini_jump_sound");
var txt_sound = document.getElementById("txt_sound");
var bug_sound = document.getElementById("bug_sound");
//
var ip_release = false;
var seconds = 100; //should be 1000
var pop_up_close;
var close_variable;
var close_file_variable;
var debug = false; //should be false
var is_wifi = false; //should be false
var locked = true; //should be true
var locked_file = true; //should be true
var if_rre_doc = true;
var password = "@eU?9U3vuDAeY}%!";
var wifi_password = "123Wifi456Password";
var password_x = "theBestPassword123457";
var username_1 = "mhamsmith";
var decrypt2 = false;
var p_1 = false;
var p_2 = false;

var xyz = true;
var zyx = true;

var x_1 = true;
var x_2 = true;
var x_3 = true;
var x_4 = true;
var x_5 = true;
var g = true;
var x_7 = true;
var x_8 = true;
var br = true;
var x_10 = true;
var x_11 = true;
var x_12 = true;
var x_13 = true;
var x_14 = true;
var x_15 = true;
var x_16 = true;
var x_17 = true;
var x_18 = true;
var x_19 = true;
var x_20 = true;
var y = true;
var z = true;
var e_conf = false;
var e_res_1 = false;
var e_res_2 = false;
var e_res_3 = false;
var e_res_4 = false;
var e_res_5 = false;
var e_res_6 = false;
var e_res_7 = false;
var e_res_8 = false;
var email_chain_1;
var email_chain_2;
var email_chain_3;
var email_chain_4;
var email_chain_5;
var email_chain_6;
var email_chain_7;
var email_chain_8;
var email_chain_9;
var email_chain_10;
var bar_value;

//pop up stuff
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function module_open() {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


var email_1 = "<h3 class='shown_sub'>" + "Can you read this?" + "</h3><hr/><p class='shown_sen'> From: " + "microsoft.microsoft@notsketchy.microsoft" + "</p><hr/><p class='shown_bod'>" + "If you are reading this email it means that you have successfully started up your version of Microsoft RRE. Please confirm your account to use all of the features RRE provides." + "</p>";

var re_1 = "<h3 class='shown_sub'>Re: Can you read this?</h3><hr/><p class='shown_bod'>Yep, everything seems to be working!</p>" + "<br/><br/>";

var email_2 = "<h3 class='shown_sub'>" + "Glad to know :)" + "</h3><hr/><p class='shown_sen'> From: " + "microsoft.microsoft@notsketchy.microsoft" + "</p><hr/><p class='shown_bod'>" + "If you want any further information regarding our product please visit our website: <strong> www.microcough.com/products/rre/info</strong>" + "</p>";

var re_2 = "<h3 class='shown_sub'>Re: WARNING</h3><hr/><p class='shown_bod'>Ummm... Who is this?</p>" + "<br/><br/>";

var email_3 = "<h3 class='shown_sub'>" + "WARNING" + "</h3><hr/><p class='shown_sen'> From: " + "20b::llb32:0390bl@hsxh.co.ur.ll" + "</p><hr/><div class='shown_bod'>" + "<p>I noticed you were on the Microcough website. That can only mean one thing. Turn off your computer and destroy it! Do not use this computer! Look at the microcough website: <strong>/products/rre/bc03e-001</strong> It will explain everythi-</p><p>---------------------------------</p><p>MESSAGE BLOCKED</p><p>---------------------------------</p><p>Please ignore this message as it means absolutely nothing at all</p><p>Really forget you even saw this email </p><p>-Microcough Security Team</p>" + "</div>";

var email_4 = "<h3 class='shown_sub'>" + "Re: Re: WARNING" + "</h3><hr/><p class='shown_sen'> From: " + "00bl:5ttps:0b::09l@hsxh.co.ur.ll" + "</p><hr/><div class='shown_bod'>" + "<p>This is a response sent by a bot. The real Sam is no longer able to respond.</p>" + "</div>";

var re_3 = "<h3 class='shown_sub'>Re: Re: Re: WARNING</h3><hr/><p class='shown_bod'>Who is Sam?</p>" + "<br/><br/>";

var email_5 = "<h3 class='shown_sub'>" + "Limited Time Coupon!" + "</h3><hr/><p class='shown_sen'> From: " + "stapleshomedesk@officesupplies.com" + "</p><hr/><div class='shown_bod'>" + "<p>You have just recieved a staples coupon for <strong>20%</strong> off! You can redeem this for the next two weeks at any staples store near you!</p>" + "</div>";

var email_6 = "<h3 class='shown_sub'>" + "Online Service Notice" + "</h3><hr/><p class='shown_sen'> From: " + "mhamsmith@odf.gov" + "</p><hr/><div class='shown_bod'>" + "<div><p>Hi, I'm just contacting you about some online actions you may have commited in the past 24 hours. Your IP has been flagged on a few unsavory websites. We are going to have to ask you to come in for questioning in the next couple days. Thank you for your cooperation!</p><p>- Mark Hamsmith, Online Defense Force</p></div>" + "</div>";

var re_4 = "<h3 class='shown_sub'>Re: Online Service Notice</h3><hr/><p class='shown_bod'>Wait, I haven't done anything!</p>" + "<br/><br/>";

var email_7 = "<h3 class='shown_sub'>" + "CEASE ALL CONTACT" + "</h3><hr/><p class='shown_sen'> From: " + "0bl:98e0::2ol8x00@hsxh.co.ur.ll" + "</p><hr/><div class='shown_bod'>" + "<p>You need to stop contacting me! This is not a secure form of comunication. Trust me! DESTORY THIS COMPUTER!</p>" + "</div>";

var email_8 = "<h3 class='shown_sub'>" + "Re: Re: Online Service Notice" + "</h3><hr/><p class='shown_sen'> From: " + "mhamsmith@odf.gov" + "</p><hr/><div class='shown_bod'>" + "<p>Don't be alarmed, I just want to talk  with you. You are not in any trouble at the moment. To find out more about violating an Internet Protection Policy (IPP) go to : <strong>www.realgovernmentstuff.odf/crimes/ipp</strong> and use my username: <strong>mhamsmith</strong> to access the website.</p>" + "</div>";

var email_9 = "<h3 class='shown_sub' style='color: red; font-family: 'Shadows Into Light'>" + "Xhehlufhuweqfiuehhfifwetaxcbv" + "</h3><hr/><p class='shown_sen' style='color: red; font-family: 'Shadows Into Light'> From: " + "uieu@yoiuwe@iurweo@iuyidhui@duy" + "</p><hr/><div class='shown_bod' style='color: red; font-family: 'Shadows Into Light'>" + "<p>fufqiufoi:uqfu qyfwefwq ehbcdxvytq whqdhbw eoqufouyewgfuyewfw hbwhjbfhwgf uye:gf weyg@fuye fg@uweygf iuwch:buibc wiuygw qiuygw ucdhu bcvitewf tyqiiryf qihcbjd cbkjxbsjkvdi:uryop uqe pyewiuy roiwe:uhoi wdchkd jhbckj@hasduy iaudyfgiu:ygfhiqv k::dvadiuyfg iufy:yerfoyeg roygweiuywg qeysvnbcvnb vsvue@yrttcv cgvdh@ggshgvjjs ghvh sgeuwi oyrow ieuyew tiyasdf uyguycga iusygiu ywehfkwj heg:qkjh gewy:ysug uguxdj</p>" + "</div>";

var email_10 = "<h3 class='shown_sub'>" + "Apology" + "</h3><hr/><p class='shown_sen'> From: " + "ERROR" + "</p><hr/><div class='shown_bod'>" + "<p>I just wanted to say sorry for sending you this computer, I know you don't know who I am, but I had no choice. They made me do it. If you've fallen for their trap you probably need a password. There is a small bug in the code. More specifically the calculator. Multiplying the two sets of digits in the wifi password should definitley break the system. PLEASE DON'T RESPOND TO THIS EMAIL</p>" + "</div>";

var re_5 = "<h3 class='shown_sub'>Re: Apology</h3><hr/><p class='shown_bod'>I'm going to contact you because you told me not to.</p>" + "<br/><br/>";

var email_11 = "<h3 class='shown_sub'>" + "RRE Report" + "</h3><hr/><p class='shown_sen'> From: " + "jsamuels@gmail.com" + "</p><hr/><div class='shown_bod'>" + "<p>You read my report on RRE and Project Resurrection. I have a contact who can give you more information. Unfortunately they can only contact you through a moblie app. I'll send you a copy of it, but there might be a couple bugs, hopefully not though.</p>" + "</div>";

var email_12 = "<h3 class='shown_sub'>" + "Thank You" + "</h3><hr/><p class='shown_sen'> From: " + "jsamuels@gmail.com" + "</p><hr/><div class='shown_bod'>" + "<p>As expected you have responded to my email. You were so easily manipulated. Anyways opening this email should release your personal information onto the internet. I know what you're trying to do so I have to stop you. I'm sorry.</p><p>- Jean</p>" + "</div>";

var re_6 = "<h3 class='shown_sub'>Re: Thank You</h3><hr/><p class='shown_bod'>Your name seems familiar, who are you?</p>" + "<br/><br/>";

var email_13 = "<h3 class='shown_sub'>" + "The Truth" + "</h3><hr/><p class='shown_sen'> From: " + "jsamuels@gmail.com" + "</p><hr/><div class='shown_bod'>" + "My name is Jane Samuels. And it's my fault he's gone. I made a mistake and told someone. Then they shut us down. If not for me, he might still be here.<p>- Jean</p>" + "</div>";

var re_7 = "<h3 class='shown_sub'>Re: The Truth</h3><hr/><p class='shown_bod'>I'm sorry, what?</p>" + "<br/><br/>";


var email_14 = "<h3 class='shown_sub'>" + "Automated Response" + "</h3><hr/><p class='shown_sen'> From: " + "gmail_admin_0837" + "</p><hr/><div class='shown_bod'>" + "This user has been permanently removed from the gmail servers. Any and all future attempts to contact this account will result in swift legal action." + "</div>";

var re_8 = "<h3 class='shown_sub'>Re: CEASE ALL CONTACT</h3><hr/><p class='shown_bod'>I know about Sam</p>" + "<br/><br/>";

var email_15 = "<h3 class='shown_sub'>" + "Re: Re: CEASE ALL CONTACT" + "</h3><hr/><p class='shown_sen'> From: " + "2bvoll:d:32:039::l@hsxh.ur.ban" + "</p><hr/><div class='shown_bod'>" + "Alright, I'm Sam. I'm a tech journalist who has been working on this story in my free time, about RRE. Something very weird was going on, I don't have enough information but if your interested I can send you this paper I uncovered. I hope you can uderstand the difficulty in reaching me as I am no longer safe." + "</div>";

var re_9 = "<h3 class='shown_sub'>Re: Re: Re: CEASE ALL CONTACT</h3><hr/><p class='shown_bod'>I'll take a look at that paper, never hurts to have a pair of fresh eyes.</p>" + "<br/><br/>";


var email_16 = "<h3 class='shown_sub'>" + "Resurrection Dev Report" + "</h3><hr/><p class='shown_sen'> From: " + "2bvoll:d:32:039::l@hsxh.ur.ban" + "</p><hr/><div class='shown_bod'>" + "<p>Attached below is the paper you wanted.</p><br/><div style='border-color: black; border-style: solid; width: 75px; height: 75px;'><img src='pdf_EIO.png' onclick='download_5()' style='width: 75px; height: 75px;'/><div>" + "</div>";

var mail_1;
var googley = document.getElementById("googley").innerHTML;
var search_bar = document.getElementById("search_bar");
var current_page = "13";
var mblock_1;
var m_block_2;
//
background_music_1.loop = true;
tense_music.loop = true;
if (is_intro == false) {
    if_intro = true;
    background_music_1.play();
    module_open();
    new_msg();
    document.getElementById("intro").style.display = "none";
    document.getElementById("desktop").style.display = "block";
    document.getElementById("sms").style.display = "block";
}
//
email_chain_1 = email_1;
email_chain_2 = email_3;
email_chain_3 = email_4;
email_chain_4 = email_6;
email_chain_5 = email_7;
email_chain_6 = email_8;
email_chain_7 = email_10;
email_chain_8 = email_11;
email_chain_9 = email_12;
email_chain_10 = email_13;
email_chain_11 = email_15;

/////////DELETE THIS STUFF!!////////

////////////////////////////////////
function m1() {
    document.getElementById("mail_right_text").innerHTML = email_chain_1;
    if (x_1 == true) {
        buttons_1();
    } else {
        clear_button();
    }
}

function m2() {
    document.getElementById("mail_right_text").innerHTML = email_2;
    clear_button();
}

function m3() {
    document.getElementById("mail_right_text").innerHTML = email_chain_2;
    if (x_2) {
        buttons_2();
    } else {
        clear_button();
    }
}

function m4() {
    document.getElementById("mail_right_text").innerHTML = email_chain_3;
    if (x_3) {
        buttons_3();
    } else {
        clear_button();
    }
}

function m5() {
    document.getElementById("mail_right_text").innerHTML = email_5;
    clear_button();
}

function m6() {
    document.getElementById("mail_right_text").innerHTML = email_chain_4;
    if (x_4) {
        buttons_4();
    } else {
        clear_button();
    }
}

function m7() {
    document.getElementById("mail_right_text").innerHTML = email_chain_5;
    if (x_5) {
        buttons_5();
        x_6 = true;
    } else {
        clear_button();
    }
}

function m8() {
    document.getElementById("mail_right_text").innerHTML = email_chain_6;
    clear_button();
}

function m9() {
    document.getElementById("mail_right_text").innerHTML = email_9;
    if (g) {
        console.log("supsup");
        document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='download_1()'>Download Email</button>";
    } else {
        clear_button();
    }
}

function m10() {
    document.getElementById("mail_right_text").innerHTML = email_chain_7;
    if (x_7) {
        buttons_7();
    } else {
        clear_button();
    }
}


function m11() {
    document.getElementById("mail_right_text").innerHTML = email_chain_8;
    if (x_8) {
        buttons_8();
    } else {
        clear_button();
    }
}


function m12() {
    document.getElementById("mail_right_text").innerHTML = email_chain_9;
    ip_release = true;
    if (br) {
        buttons_9();
    } else {
        clear_button();
    }
}

function m13() {
    document.getElementById("mail_right_text").innerHTML = email_13;
    ip_release = true;
    if (x_10) {
        buttons_10();
    } else {
        clear_button();
    }
}

function m14() {
    document.getElementById("mail_right_text").innerHTML = email_14;
    clear_button();
}

function m15() {
    document.getElementById("mail_right_text").innerHTML = email_15;
    if (x_11) {
        buttons_11();
    } else {
        clear_button();
    }
}

function m16() {
    document.getElementById("mail_right_text").innerHTML = email_16;
    clear_button();
}

function buttons_1() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='conf()'>Confirm Account</button>";
}

function buttons_2() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_1()'>Who are you?</button>";
}

function buttons_3() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_2()'>Sam?????</button>";
}

function buttons_4() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_4()'>What?</button>";
}

function buttons_5() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_3()'>Why?</button>";
}

function buttons_6() {
    console.log("supsup");
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='download_1()'>Download Email</button>";
}

function buttons_7() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_5()'>Respond</button>";
}

function buttons_8() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='download_3()'>Download</button>";
}

function buttons_9() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_6()'>Who are you?</button>";
}

function buttons_10() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_7()'>I know everything</button>";
}

function buttons_11() {
    document.getElementById("mail_right_button").innerHTML = "<button class='email_button' onclick='ask_8()'>Can I have the paper?</button>";
}

function clear_button() {
    document.getElementById("mail_right_button").innerHTML = "";
}



function conf() {
    x_1 = false;
    if (e_conf == false) {
        e_conf = true;
        locked = false;
        document.getElementById("0").style.display = "none";
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        email_chain_1 = re_1 + email_1;
        document.getElementById("mail_right_text").innerHTML = email_chain_1;
        setTimeout(add_message_1, 3000);
    }
}

function ask_1() {
    x_2 = false;
    if (e_res_1 == false) {
        email_chain_2 = re_2 + email_3;
        email_3 = email_chain_2;
        setTimeout(add_response_1, 20 * seconds);
        e_res_1 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_2;
    }
}

function ask_2() {
    x_3 = false;
    if (e_res_2 == false) {
        email_chain_3 = re_3 + email_4;
        email_4 = email_chain_3;
        setTimeout(add_response_2, 15 * seconds);
        e_res_2 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_3;
    }
}

function ask_3() {
    x_4 = false;
    if (e_res_3 == false) {
        email_chain_5 = re_8 + email_7;
        email_7 = email_chain_5;
        setTimeout(add_response_3, 15 * seconds);
        e_res_3 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_3;
    }
}


function ask_4() {
    x_6 = false;
    if (e_res_4 == false) {
        email_chain_4 = re_4 + email_6;
        email_6 = email_chain_4;
        setTimeout(add_response_4, 10 * seconds);
        e_res_4 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_4;
    }
}


function ask_5() {
    x_7 = false;
    if (e_res_5 == false) {
        email_chain_7 = re_5 + email_10;
        email_10 = email_chain_7;
        setTimeout(add_response_5, 25 * seconds);
        e_res_5 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_7;
    }
}

function ask_6() {
    x_9 = false;
    if (e_res_6 == false) {
        email_chain_9 = re_6 + email_12;
        email_12 = email_chain_9;
        setTimeout(add_response_6, 25 * seconds);
        e_res_6 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_9;
    }
}

function ask_7() {
    x_10 = false;
    if (e_res_7 == false) {
        email_chain_10 = re_7 + email_13;
        email_13 = email_chain_10;
        setTimeout(add_response_7, 5 * seconds);
        e_res_7 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_10;
    }
}

function ask_8() {
    x_11 = false;
    if (e_res_8 == false) {
        email_chain_11 = re_9 + email_15;
        email_15 = email_chain_11;
        setTimeout(add_response_8, 10 * seconds);
        e_res_8 = true;
        document.getElementById("mail_right_text").innerHTML = email_chain_11;
    }
}



function add_response_1() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m4()'><h4 class='message_text'>Re: Re: WARNING</h4><p class='message_text'>This is a response sent by a bot. The real Sam is no longer able to respond.</p></div><hr/>" + x;
}

function add_response_2() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m7()'><h4 class='message_text'>CEASE ALL CONTACT</h4><p class='message_text'>You need to stop contacting me! This is not a secure form of comunication. Trust me! DESTORY THIS COMPUTER!</p></div><hr/>" + x;
}

function add_response_3() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m15()'><h4 class='message_text'>Re: Re: CEASE ALL CONTACT</h4><p class='message_text'>Alright, I'm Sam. I'm a tech journalist who has been working on this story in my free time, about RRE. Something very weird was going on, I don't have enough information but if your interested I can send you this paper I uncovered.</p></div><hr/>" + x;
}

function add_response_4() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m8()'><h4 class='message_text'>Re: Re: Online Service Notice</h4><p class='message_text'>Don't be alarmed, I just want to talk  with you. You are not in any trouble at the moment. To find out more about violating an Internet Protection Policy (IPP) go to : <strong>www.realgovernmentstuff.odf</strong> and use my username: <strong></strong></p></div><hr/>" + x;
}

function add_response_5() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m12()'><h4 class='message_text'>Thank You</h4><p class='message_text'>As expected you have responded to my email. You were so easily manipulated. Anyways opening this email should release your personal information onto the internet. I know what you're trying to do so I have to stop you. I'm sorry.</p></div><hr/>" + x;
}

function add_response_6() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m13()'><h4 class='message_text'>The Truth</h4><p class='message_text'>My name is Jean Samuels. And it's my fault he's gone. I made a mistake and told someone. Then they shut us down. If not for me, he might still be here.</p></div><hr/>" + x;
}

function add_response_7() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m14()'><h4 class='message_text'>Automated Response</h4><p class='message_text'>This user has been permanently removed from the gmail servers. Any and all future attempts to contact this account will result in swift legal action.</p></div><hr/>" + x;
}

function add_response_8() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m16()'><h4 class='message_text'>Resurrection Dev Report</h4><div class='message_text'>Attached below is the paper you wanted. <p>1 Attachment</p></div></div><hr/>" + x;
}

function add_message_1() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m2()'><h4 class='message_text'>Glad to know :)</h4><p class='message_text'>If you want any further information regarding our product please visit our website: www.microcough.com/products/rre/info</p></div><hr/>" + x;
}

function add_message_2() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m3()'><h4 class='message_text'>WARNING</h4><p class='message_text'>I noticed you were on the Microcough website. That can only mean one thing. Turn off your computer and destroy it! Do not use this computer! Look at: <strong>/rre/bc03e-001</strong> It will explain everythi-</p><p>---------------------------------</p><p>MESSAGE BLOCKED</p><p>---------------------------------</p><p>Please ignore this message as it means absolutely nothing at all</p><p>Really forget you even saw this email </p><p>-Microcough Security Team</p></div><hr/>" + x;
}

function add_message_3() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m5()'><h4 class='message_text'>Limited Time Coupon!</h4><p class='message_text'>You have just recieved a staples coupon for <strong>20%</strong> off! You can redeem this for the next two weeks at any staples store near you!</p></div><hr/>" + x;
}

function add_message_4() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m6()'><h4 class='message_text'>Online Service Notice</h4><p class='message_text'>Hi, I'm just contacting you about some online actions you may have commited in the past 24 hours. Your IP has been flagged on certain unsavory websites. We are going to have to ask you to come in for questioning in the next couple days. Thank you for your cooperation!</p></div><hr/>" + x;
}

function add_message_5() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m9()' style='color: red; font-family: 'Ubuntu', sans-serif;'><h4 class='message_text' style='color: red; font-family: 'Ubuntu', sans-serif;'>Xhehlufhuweqfiuehhfifwetaxcbv</h4><p class='message_text'>fufqiufoi:uqfu qyfwefwq ehbcdxvytq whqdhbw eoqufouyewgfuyewfw hbwhjbfhwgf uye:gf weyg@fuye fg@uweygf iuwch:buibc wiuygw qiuygw ucdhu bcvitewf tyqiiryf qihcbjd cbkjxbsjkvdi:uryop uqe pyewiuy roiwe:uhoi wdchkd jhbckj@hasduy iaudyfgiu:ygfhiqv k::dvadiuyfg iufy:yerfoyeg roygweiuywg qeysvnbcvnb vsvue@yrttcv cgvdh@ggshgvjjs ghvh sgeuwi oyrow ieuyew tiyasdf uyguycga iusygiu ywehfkwj heg:qkjh gewy:ysug uguxdj</p></div><hr/>" + x;
}

function add_message_6() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m10()'><h4 class='message_text'>Apology</h4><p class='message_text'>I just wanted to say sorry for sending you this computer, I know you don't know who I am, but I had no choice. They made me do it. If you've fallen for their trap you probably need a password. There is a small bug in the code. More specifically the calculator. Multiplying the two sets of digits in the wifi password should definitley break the system. PLEASE DON'T RESPOND TO THIS EMAIL</p></div><hr/>" + x;
}

function add_message_7() {
    new_msg();
    var x = document.getElementById("mail_left").innerHTML;
    document.getElementById("mail_left").innerHTML = "<div class='message' onclick='m11()'><h4 class='message_text'>RRE Report</h4><p class='message_text'>You read my report on RRE and Project Resurrection. I have a contact who can give you more information. Unfortunately they can only contact you through a moblie app. I'll send you a copy of it, but there might be a couple bugs, hopefully not though.</p></div><hr/>" + x;
}


function search(e) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        document.getElementById("web_page").style.backgroundColor = "white";
        document.getElementById(current_page).style.display = "none";
        current_page = "loading";
        document.getElementById("loading").style.display = "block";
        bar_value = search_bar.value.replace(/\s+/g, '');
        if (is_wifi == true) {
            setTimeout(search_list, 1500);
        } else {
            setTimeout(zero_wifi, 5500);
        }
    }
}

function search_list() {
    if (bar_value == "www.google.com" || bar_value == "google.com") {
        document.getElementById(current_page).style.display = "none";
        current_page = "google";
        document.getElementById("google").style.display = "block";
    } else if (bar_value == "www.microcough.com/products/rre/info" || bar_value == "microcough.com/products/rre/info") {
        if (y == true) {
            y = false;
            setTimeout(add_message_2, 20 * seconds);
        }
        document.getElementById(current_page).style.display = "none";
        current_page = "microcough";
        document.getElementById("web_page").style.backgroundColor = "lightsteelblue";
        document.getElementById("microcough").style.display = "block";
    } else if (bar_value == "www.microcough.com/products/rre/bc03e-001" || bar_value == "microcough.com/products/rre/bc03e-001") {
        if (z == true) {
            document.getElementById(current_page).style.display = "none";
            current_page = "microcough_2";
            document.getElementById("microcough_2").style.display = "block";
            document.getElementById("web_page").style.backgroundColor = "lightsteelblue";
        } else {
            document.getElementById(current_page).style.display = "none";
            current_page = "no_web";
            document.getElementById("no_web").style.display = "block";
        }
    } else if (bar_value == "www.goodcookies.gov" || bar_value == "goodcookies.gov") {
        document.getElementById(current_page).style.display = "none";
        current_page = "goodcookies";
        document.getElementById("goodcookies").style.display = "block";
    } else if (bar_value == "www.realgovernmentstuff.odf/crimes/ipp" || bar_value == "realgovernmentstuff.odf/crimes/ipp") {
        document.getElementById(current_page).style.display = "none";
        current_page = "realgov";
        document.getElementById("realgov").style.display = "block";
        document.getElementById("web_page").style.backgroundColor = "black";
    } else if (bar_value == "www.govhash.over.odf/projects/rre" || bar_value == "govhash.over.odf/projects/rre") {
        document.getElementById(current_page).style.display = "none";
        current_page = "govhash";
        document.getElementById("govhash").style.display = "block";
        document.getElementById("web_page").style.backgroundColor = "black";
        if (zyx == true) {
            add_message_6();
            zyx = false;
        }
    } else if (bar_value == "/history") {
        document.getElementById(current_page).style.display = "none";
        current_page = "history";
        document.getElementById("history").style.display = "block";
        document.getElementById("web_page").style.backgroundColor = "white";
    }

    //404//
    else {
        document.getElementById(current_page).style.display = "none";
        current_page = "no_web";
        document.getElementById("no_web").style.display = "block";
    }
}


function password_1(e) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        if (document.getElementById("password_1").value == password) {
            microcough_3();
            if (is_sound) {
                jump_sound_2.play();
            }
            setTimeout(white, 1500);
            setTimeout(add_message_3, 2000);
            setTimeout(add_message_4, 6000);
            z = false;
        } else {
            document.getElementById("password_1").style.borderColor = "red";
            if (is_sound) {
                error_sound.play();
            }
        }
    }
}

function password_2(e) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        if (document.getElementById("wifi_password").value == wifi_password) {
            document.getElementById("wifi_password").style.display = "none";
            document.getElementById("wifi_toggle").style.display = "block";
        } else {
            document.getElementById("wifi_password").style.borderColor = "red";
            if (is_sound) {
                error_sound.play();
            }
        }
    }
}

function password_3(e) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        if (document.getElementById("password_3").value == username_1) {
            document.getElementById("realgov").style.display = "none";
            document.getElementById("realgov_2").style.display = "block";
            current_page = "realgov_2";
            if (is_sound) {
                jump_sound.play();
            }
            setTimeout(add_message_5, 5 * seconds);
        } else {
            document.getElementById("password_3").style.borderColor = "red";
            if (is_sound) {
                error_sound.play();
            }
        }
    }
}

function password_4() {
    if (document.getElementById("username_2").value == username_1) {
        p_1 = true;
    } else {
        document.getElementById("username_2").style.borderColor = "red";
        if (is_sound) {
            error_sound.play();
        }
    }
    if (document.getElementById("password_5").value == password_x) {
        p_2 = true;
    } else {
        document.getElementById("password_5").style.borderColor = "red";
        if (is_sound) {
            error_sound.play();
        }
    }
    if (p_1 == true && p_2 == true) {
        document.getElementById(current_page).style.display = "none";
        current_page = "rre";
        document.getElementById("rre").style.display = "block";
        document.getElementById("web_page").style.backgroundColor = "black";
    }
}

function microcough_3() {
    document.getElementById(current_page).style.display = "none";
    current_page = "microcough_3";
    document.getElementById("microcough_3").style.display = "block";
    document.getElementById("web_page").style.backgroundColor = "crimson";
}

function zero_wifi() {
    document.getElementById(current_page).style.display = "none";
    current_page = "wifiless";
    document.getElementById("wifiless").style.display = "block";
}
/////////////////////////
/////////////////////////

function toggle_wifi() {
    if (document.getElementById("wifi_input").checked) {
        document.getElementById("wifi").style.backgroundImage = "url('wifi_EIO.png')";
        is_wifi = true;
    } else {
        document.getElementById("wifi").style.backgroundImage = "url('no_wifi_EIO.png')";
        is_wifi = false;
    }
}

//
function open_settings() {
    if (locked != true) {
        close_variable = "settings_program";
        document.getElementById("desktop").style.display = "none";
        document.getElementById("settings_program").style.display = "block";
    } else {
        if (is_sound) {
            locked_sound.play();
        }
    }
}

function open_internet() {
    if (locked != true) {
        close_variable = "internet_program";
        document.getElementById("desktop").style.display = "none";
        document.getElementById("internet_program").style.display = "block";
    } else {
        if (is_sound) {
            locked_sound.play();
        }
    }
}

function open_trash() {
    if (locked != true) {
        close_variable = "trash_program";
        document.getElementById("desktop").style.display = "none";
        document.getElementById("trash_program").style.display = "block";
    } else {
        if (is_sound) {
            locked_sound.play();
        }
    }
}

function open_files() {
    if (locked != true) {
        close_variable = "files_program";
        document.getElementById("desktop").style.display = "none";
        document.getElementById("files_program").style.display = "block";
    } else {
        if (is_sound) {
            locked_sound.play();
        }
    }
}

function open_mail() {
    close_variable = "mail_program";
    document.getElementById("desktop").style.display = "none";
    document.getElementById("mail_program").style.display = "block";
}

function open_sms() {
    close_variable = "sms_program";
    document.getElementById("desktop").style.display = "none";
    if (debug) {
        document.getElementById("sms_program").style.display = "block";
    } else {
        if (is_sound) {
            tense_music.play();
            locked_sound.play();
        }
        document.getElementById("bug_holder").style.display = "block";
        document.getElementById("module_text").innerHTML = "<strong>Warning!</strong> This program is not functional. Windows RRE counts 40 bugs that need to be fixed.";
        module_open();
    }
}

function close_program() {
    document.getElementById("desktop").style.display = "block";
    document.getElementById(close_variable).style.display = "none";
    close_variable = "";
}

function new_msg() {
    console.log("Triggered Function: new_msg()");
    if (is_sound) {
        message_sound.play();
    }
    if (document.getElementById("mail_program").style.display != "block") {
        document.getElementById("alert_pic").style.display = "inline";
    }
}

function new_message() {
    console.log("Triggered Function: new_message()");

}

function no_message() {
    document.getElementById("alert_pic").style.display = "none";
}


/////////////////////////////////////////////////////////////////////
function open_text_doc() {
    close_file_variable = "text_doc";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("text_doc").style.display = "block";
}

function open_wifi_doc() {
    close_file_variable = "wifi_wifi";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("wifi_wifi").style.display = "block";
}

function open_encrypted_doc() {
    if (locked_file == false) {
        close_file_variable = "encrypted_doc";
        document.getElementById("file_close").style.display = "none";
        document.getElementById("encrypted_doc").style.display = "block";
    } else {
        if (is_sound) {
            error_sound.play();
        }
    }
}

function open_calc_doc() {
    close_file_variable = "calc_doc";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("calc_doc").style.display = "block";
}

function open_hx_doc() {
    close_file_variable = "hx_doc";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("hx_doc").style.display = "block";
}

function open_happy_doc() {
    document.getElementById("file_close").style.display = "none";
    document.getElementById("files_program").style.display = "none";
    document.getElementById("the_end").style.display = "block";
    setTimeout(last_jump_1,);
}

function open_rre_doc() {
    if (if_rre_doc) {
        setTimeout(add_message_7, 10 * seconds);
        if_rre_doc = false;
    }
    close_file_variable = "rre_doc";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("rre_doc").style.display = "block";
}

function open_journal_doc() {
    close_file_variable = "journal_doc";
    document.getElementById("file_close").style.display = "none";
    document.getElementById("journal_doc").style.display = "block";
}

function open_email_doc() {
    if (decrypt2 == true) {
        close_file_variable = "email_doc";
        document.getElementById("file_close").style.display = "none";
        document.getElementById("email_doc").style.display = "block";
        if (xyz == true) {
            if (is_sound) {
                mini_jump_sound.play();
                background_music_1.pause();
                background_music_2.play();
            } else {
                bmusic = 2;
            }
            xyz = false;
        }
    } else {
        if (is_sound) {
            error_sound.play();
        }
    }
}

function close_file_program() {
    document.getElementById("file_close").style.display = "block";
    document.getElementById(close_file_variable).style.display = "none";
    close_file_variable = "";
}

/////////////////////////////////////////////////////////////////
function hide_menus() {
    hideMenu_1();
    hideMenu_2();
    hideMenu_3();
    hideMenu_4();
    hideMenu_5();
    hideMenu_6();
    hideMenu_7();
}

function hideMenu_1() {
    document.getElementById("menu_1").style.display = "none";
}

function hideMenu_2() {
    document.getElementById("menu_2").style.display = "none";
}

function hideMenu_3() {
    document.getElementById("menu_3").style.display = "none";
}

function hideMenu_4() {
    document.getElementById("menu_4").style.display = "none";
}

function hideMenu_5() {
    document.getElementById("menu_5").style.display = "none";
}

function hideMenu_6() {
    document.getElementById("menu_6").style.display = "none";
}

function hideMenu_7() {
    document.getElementById("menu_7").style.display = "none";
}


function right_click_1(event) {
    if (document.getElementById("menu_1").style.display == "block") {
        hideMenu_1();
    } else {
        var menu = document.getElementById("menu_1");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}

function right_click_2(event) {
    if (document.getElementById("menu_2").style.display == "block") {
        hideMenu_2();
    } else {
        var menu = document.getElementById("menu_2");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}

function right_click_3(event) {
    if (document.getElementById("menu_3").style.display == "block") {
        hideMenu_3();
    } else {
        var menu = document.getElementById("menu_3");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}

function right_click_4(event) {
    if (document.getElementById("menu_4").style.display == "block") {
        hideMenu_4();
    } else {
        var menu = document.getElementById("menu_4");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}

function right_click_5(event) {
    if (document.getElementById("menu_5").style.display == "block") {
        hideMenu_5();
    } else {
        var menu = document.getElementById("menu_5");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}


function right_click_6(event) {
    if (document.getElementById("menu_6").style.display == "block") {
        hideMenu_6();
    } else {
        var menu = document.getElementById("menu_6");
        menu.style.display = 'block';
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    }
}

function right_click_7() {
    if (document.getElementById("menu_7").style.display == "block") {
        hideMenu_7();
    } else {
        var menu = document.getElementById("menu_7");
        menu.style.display = 'block';
    }
}
/////////////////////////////////////////////////////////////////
function delete_1() {
    document.getElementById("1_1").style.display = "none";
    document.getElementById("5_2").style.display = "block";
}

function white() {
    document.getElementById("microcough_3").style.display = "none";
    document.getElementById("web_page").style.backgroundColor = "white";
    document.getElementById("no_web").style.display = "block";
    jump_sound_2.pause();
    current_page = "no_web";
}

function reinstall() {
    document.getElementById("1_2").style.display = "none";
    document.getElementById("loading2").style.display = "block";
    setTimeout(x2_et89, 2000);
}

function x2_et89() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("loading2").style.display = "none";
    document.getElementById("1_3").style.display = "block";
    document.getElementById("decrypt").style.display = "block";
}

function reinstall_2() {
    document.getElementById("5_2").style.display = "none";
    document.getElementById("loading2").style.display = "block";
    setTimeout(x2_et90, 2000);
}

function x2_et90() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("loading2").style.display = "none";
    document.getElementById("1_1").style.display = "block";
}

function crash() {
    if (is_sound) {
        error_sound.play();
    }
    document.getElementById("module_text").innerHTML = "<img src='alert_EIO.png' id='alert_pic' style='float: left; margin-top: -10px; margin-right: 10px;'/>ERROR!";
    module_open();
}

function decrypt() {
    if (document.getElementById("decrypt").style.display == "block") {
        document.getElementById("encrypted").innerHTML = "MicrocoughPassword.pdf";
        document.getElementById("enc").src = "pdf_EIO.png";
        locked_file = false;
    } else {
        if (is_sound) {
            locked_sound.play();
        }
    }
}

function download_1() {
    if (document.getElementById("1_6").style.display != "block") {
        document.getElementById("downloading").style.display = "block";
        setTimeout(x_123, 2000);
    }
}

function x_123() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("downloading").style.display = "none";
    document.getElementById("1_6").style.display = "block";
}

function download_2() {
    if (document.getElementById("1_9").style.display != "block") {
        document.getElementById("downloading").style.display = "block";
        setTimeout(x_124, 2000);
    }
}

function x_124() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("downloading").style.display = "none";
    document.getElementById("1_9").style.display = "block";
}

function download_3() {
    if (document.getElementById("sms").style.display != "block") {
        document.getElementById("downloading").style.display = "block";
        setTimeout(x_125, 2000);
    }
}

function x_125() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("downloading").style.display = "none";
    document.getElementById("sms").style.display = "block";
}

function download_4() {
    if (document.getElementById("happiness").style.display != "block") {
        document.getElementById("downloading").style.display = "block";
        setTimeout(x_126, 2000);
    }
}

function x_126() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("downloading").style.display = "none";
    document.getElementById("happiness").style.display = "block";
}

function download_5() {
    if (document.getElementById("55").style.display != "block") {
        document.getElementById("downloading").style.display = "block";
        setTimeout(x_127, 2000);
    }
}

function x_127() {
    if (is_sound) {
        download_sound.play();
    }
    document.getElementById("downloading").style.display = "none";
    document.getElementById("55").style.display = "block";
}

function decrypt_2() {
    decrypt2 = true;
    document.getElementById("encrypted_2").innerHTML = "HELP.pdf";
    document.getElementById("1_7").src = "pdf_EIO.png";
}
////////////////////////////////////////////////////////

function calc_math(event) {
    var x = event.target || event.srcElement;
    var add = x.innerHTML;
    if (add == "x") {
        add = "*";
    }
    document.getElementById("calc_text").innerHTML += add;
    if (document.getElementById("calc_text").offsetWidth >= 660) {
        calc_math_2();
    }
}
var calcTest = false;
function calc_math_2() {
    document.getElementById("calc_text").style.color = "black";
    var x = document.getElementById("calc_text").innerHTML;
    if (x == "123*456") {
        document.getElementById("calc_text").innerHTML = password_x;
    } else if (x == "6+6+6") {
        document.getElementById("calc_text").style.color = "red";
        document.getElementById("calc_text").innerHTML = "The Summoning Shall Begin";
    } else if ((x == "1+1" && !calcTest) || (x == "2+2" && !calcTest)) {
        document.getElementById("calc_text").innerHTML = "Yes, the calculator actually works.";
        calcTest = true;
    } else if (!x.includes("+") && !x.includes("-") && !x.includes("*") && !x.includes("/")) {
        var rand = Math.floor(Math.random() * 5);
        if (rand == 0) {
            document.getElementById("calc_text").innerHTML = "That's not quite how math works...";
        } else if (rand == 1) {
            document.getElementById("calc_text").innerHTML = "No. No. You need to actually do math.";
        } else if (rand == 2) {
            document.getElementById("calc_text").innerHTML = "You've never done math before have you?";
        } else if (rand == 3) {
            document.getElementById("calc_text").innerHTML = "If only you learned the true beauty of mathematics...";
        } else if (rand == 4) {
            document.getElementById("calc_text").innerHTML = "Well that was not exactly what you were supposed to do.";
        }
        
    } else {
        try {
            var y = eval(x);
            if (typeof (y) == "number") {
                document.getElementById("calc_text").innerHTML = y;
            } else {
                document.getElementById("calc_text").innerHTML = "ERROR";
            }
        } catch (err) {
            document.getElementById("calc_text").innerHTML = "ERROR";
            console.log(err.message);
        }
    }
}

function calc_math_3() {
    document.getElementById("calc_text").innerHTML = "";
    document.getElementById("calc_text").style.color = "black";
}

////////////////////////////////////////////////////

function txt_1() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Hello? Anybody there?" + "</div>";
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_2()'>Hello???</button>";
    }, 1);
}

function txt_2() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Helloooo???" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_1, 250);
}

function txt_3() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "That's not important, who are you?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_2, 250);
}

function txt_4() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Call me a friend" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_4, 250);
}

function txt_5() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Why not?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_3, 250);
}

function txt_6() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Who are you... really?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_6, 250);
}

function txt_7() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "You can trust me" + "</div>";
    scroll();
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "I know about RRE" + "</div>";
        scroll();
    }, 200);
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_5, 450);
}

function txt_8() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "What's your name?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_6, 250);
}

function txt_9() {
    scroll();
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Okay..." + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "What can you tell me about RRE?" + "</div>";
        scroll();
    }, 200);
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_7, 450);
}

function txt_10() {
    scroll();
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Are you okay?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_8, 250);
}

function txt_11() {
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Who did you escape from?" + "</div>";
    scroll();
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_9, 250);
}

function txt_12() {
    scroll();
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "Why's that?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_10, 250);
}

function txt_12() {
    scroll();
    document.getElementById("sms_holder").innerHTML += "<div class='you_txt'>" + "I don't know how to help you!" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "";
    setTimeout(txtres_11, 450);
}

function txtres_1() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Who is this?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_3()'>Who are you?</button><button class='sms_b' onclick='txt_4()'>A friend</button>";
}

function txtres_2() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "I can't tell you" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_5()'>Why not?</button>";
}

function txtres_3() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Because I don't remember" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_6()'>Who are you?</button>";
}

function txtres_4() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Why should I trust you?" + "</div>";
    document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_7()'>Trust Me</button>";
}

function txtres_5() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Alright" + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "But only because I have no better options" + "</div>";
        txt_msg();
    }, 100);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_8()'>Who are you?</button>";
    }, 100);
}

function txtres_6() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "[Error]" + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "[Error]" + "</div>";
        txt_msg();
    }, 100);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "[Error]" + "</div>";
        txt_msg();
    }, 200);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Sys.bin{NAME}.notFound" + "</div>";
        txt_msg();
    }, 300);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "cAll mE jHoN DoE" + "</div>";
        txt_msg();
    }, 400);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_9()'>RRE?</button>";
        txt_msg();
    }, 400);
}

function txtres_7() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "RRE?" + "</div>";
    setTimeout(function () {
        txt_msg();
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "RRE was a cover program for a different project" + "</div>";
    }, 200);
    setTimeout(function () {
        txt_msg();
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "A project I was a part of" + "</div>";
    }, 400);
    setTimeout(function () {
        txt_msg();
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "..." + "</div>";
    }, 600);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Until I escaped" + "</div>";
        txt_msg();
    }, 800);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "So lonely" + "</div>";
        txt_msg();
    }, 900);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "So lonely" + "</div>";
        txt_msg();
    }, 1000);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "So lonely" + "</div>";
        txt_msg();
    }, 1100);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "So lonely" + "</div>";
        txt_msg();
    }, 1200);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_10()'>Are you okay?</button><button class='sms_b' onclick='txt_11()'>From what?</button>";
    }, 1200);
}

function txtres_8() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Yes" + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "As I am no longer able to feel pain" + "</div>";
        txt_msg();
    }, 200);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_12()'>Why?</button>";
    }, 200);
}

function txtres_9() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "The bad people" + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "But now I'm stuck again" + "</div>";
        txt_msg();
    }, 200);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_12()'>I Don't...</button>";
    }, 200);
}

function txtres_10() {
    txt_msg();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "I'm stuck..." + "</div>";
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "In this computer" + "</div>";
        txt_msg();
    }, 200);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "I need help" + "</div>";
        txt_msg();
    }, 400);
    setTimeout(function () {
        document.getElementById("sms_buttons").innerHTML = "<button class='sms_b' onclick='txt_13()'>I Don't...</button>";
    }, 400);
}

function txtres_11() {
    jump_sound.play();
    document.getElementById("sms_holder").innerHTML += "<div class='them_txt' style='color: red;'>" + "You Already Have" + "</div>";
    scroll();
    download_4();
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt' style='color: red;'>" + "So lonely" + "</div>";
        scroll();
    }, 300);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt' style='color: red;'>" + "So lonely" + "</div>";
        scroll();
    }, 400);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt' style='color: red;'>" + "So lonely" + "</div>";
        scroll();
    }, 500);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt' style='color: red;'>" + "Forgive Me" + "</div>";
        scroll();
    }, 700);
    setTimeout(function () {
        document.getElementById("sms_holder").innerHTML += "<div class='them_txt'>" + "Sytem.Error{Recipent}==NotFound" + "</div>";
        txt_msg();
        download_4();
    }, 2000);
}

function txt_msg() {
    txt_sound.pause();
    txt_sound.currentTime = 0;
    if (is_sound) {
        txt_sound.play();
    }
    scroll();
    if (document.getElementById("sms_program").style.display == "none") {
        document.getElementById("alert_pic_2").style.display = "inline";
    }
}

function txt_clear() {
    document.getElementById("alert_pic_2").style.display = "none";
}

function scroll() {
    var element = document.getElementById("sms_holder");
    element.scroll({
        top: element.scrollHeight
    });
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

var bug_1 = document.getElementById("bug_1");
var bug_2 = document.getElementById("bug_2");
var bug_3 = document.getElementById("bug_3");
var bug_4 = document.getElementById("bug_4");
var bug_5 = document.getElementById("bug_5");
var nh_1 = 900;
var nh_2 = 900;
var nh_3 = 900;
var nh_4 = 900;
var nh_5 = 900;
var left_1 = true;
var left_2 = true;
var left_3 = true;
var left_4 = true;
var left_5 = true;
var bug_time_1;
var bug_time_2;
var bug_time_3;
var bug_time_4;
var bug_time_5;
var go_1 = true;
var go_2 = true;
var go_3 = true;
var go_4 = true;
var go_5 = true;
var bug_kills = 0;
var bug_speed = 115;

setTimeout(zby_1, 1);
setTimeout(zby_2, 6500);
setTimeout(zby_3, 2500);
setTimeout(zby_4, 9000);
setTimeout(zby_5, 1000);

function zby_1() {
    document.getElementById("bp_1").style.transform = "scaleX(1)";
    clearInterval(bug_time_1);
    document.getElementById("bp_1").src = "bug_EIO.gif";
    go_1 = true;
    bug_1.style.display = "block";
    bug_time_1 = setInterval(bug_move_1, bug_speed);
}

function zby_2() {
    document.getElementById("bp_2").style.transform = "scaleX(1)";
    clearInterval(bug_time_2);
    document.getElementById("bp_2").src = "bug_EIO.gif";
    go_2 = true;
    bug_2.style.display = "block";
    bug_time_2 = setInterval(bug_move_2, bug_speed);
}

function zby_3() {
    document.getElementById("bp_3").style.transform = "scaleX(1)";
    clearInterval(bug_time_3);
    document.getElementById("bp_3").src = "bug_EIO.gif";
    go_3 = true;
    bug_3.style.display = "block";
    bug_time_3 = setInterval(bug_move_3, bug_speed);
}

function zby_4() {
    document.getElementById("bp_4").style.transform = "scaleX(1)";
    clearInterval(bug_time_4);
    document.getElementById("bp_4").src = "bug_EIO.gif";
    go_4 = true;
    bug_4.style.display = "block";
    bug_time_4 = setInterval(bug_move_4, bug_speed);
}

function zby_5() {
    document.getElementById("bp_5").style.transform = "scaleX(1)";
    clearInterval(bug_time_5);
    document.getElementById("bp_5").src = "bug_EIO.gif";
    go_5 = true;
    bug_5.style.display = "block";
    bug_time_5 = setInterval(bug_move_5, bug_speed);
}

function bug_move_1() {
    if (go_1) {
        if (left_1) {
            document.getElementById("bp_1").style.transform = "scaleX(1)";
            nh_1 -= 10;
            bug_1.style.left = nh_1 + "px";
            if (nh_1 < 60) {
                left_1 = false;
            }
        } else {
            document.getElementById("bp_1").style.transform = "scaleX(-1)";
            nh_1 += 10;
            bug_1.style.left = nh_1 + "px";
            if (nh_1 > 880) {
                left_1 = true;
            }
        }
    }
}

function bug_move_2() {
    if (go_2) {
        if (left_2) {
            document.getElementById("bp_2").style.transform = "scaleX(1)";
            nh_2 -= 10;
            bug_2.style.left = nh_2 + "px";
            if (nh_2 < 60) {
                left_2 = false;
            }
        } else {
            document.getElementById("bp_2").style.transform = "scaleX(-1)";
            nh_2 += 10;
            bug_2.style.left = nh_2 + "px";
            if (nh_2 > 880) {
                left_2 = true;
            }
        }
    }
}

function bug_move_3() {
    if (go_3) {
        if (left_3) {
            document.getElementById("bp_3").style.transform = "scaleX(1)";
            nh_3 -= 10;
            bug_3.style.left = nh_3 + "px";
            if (nh_3 < 60) {
                left_3 = false;
            }
        } else {
            document.getElementById("bp_3").style.transform = "scaleX(-1)";
            nh_3 += 10;
            bug_3.style.left = nh_3 + "px";
            if (nh_3 > 880) {
                left_3 = true;
            }
        }
    }
}

function bug_move_4() {
    if (go_4) {
        if (left_4) {
            document.getElementById("bp_4").style.transform = "scaleX(1)";
            nh_4 -= 10;
            bug_4.style.left = nh_4 + "px";
            if (nh_4 < 60) {
                left_4 = false;
            }
        } else {
            document.getElementById("bp_4").style.transform = "scaleX(-1)";
            nh_4 += 10;
            bug_4.style.left = nh_4 + "px";
            if (nh_4 > 880) {
                left_4 = true;
            }
        }
    }
}

function bug_move_5() {
    if (go_5) {
        if (left_5) {
            document.getElementById("bp_5").style.transform = "scaleX(1)";
            nh_5 -= 10;
            bug_5.style.left = nh_5 + "px";
            if (nh_5 < 60) {
                left_5 = false;
            }
        } else {
            document.getElementById("bp_5").style.transform = "scaleX(-1)";
            nh_5 += 10;
            bug_5.style.left = nh_5 + "px";
            if (nh_5 > 880) {
                left_5 = true;
            }
        }
    }
}



function bug_kill() {
    var target = event.target || event.srcElement;
    var id = target.id;
    if (bug_kills >= 40) {
        debug = true;
        document.getElementById("bug_holder").style.display = "none";
        document.getElementById("sms_program").style.display = "block";
        tense_music.pause();
    }
    bug_sound.pause();
    bug_sound.currentTime = 0;
    if (is_sound) {
        bug_sound.play();
    }
    if (id == "bug_1" || id == "bp_1") {
        go_1 = false;
        document.getElementById("bp_1").src = "bug_splat_l.png";
        clearInterval(bug_time_1);
        if (nh_1 != 900) {
            nh_1 = 900;
            bug_kills++;
            document.getElementById("bug_kill_count").innerHTML = bug_kills;
            bug_speed -= 2.5;
            setTimeout(zby_1, 2001);
            setTimeout(function () {
                bug_1.style.display = "none";
                bug_1.style.left = "900px";
            }, 2000);
        }
    }

    if (id == "bug_2" || id == "bp_2") {
        go_2 = false;
        document.getElementById("bp_2").src = "bug_splat_l.png";
        clearInterval(bug_time_2);
        if (nh_2 != 900) {
            nh_2 = 900;
            bug_kills++;
            document.getElementById("bug_kill_count").innerHTML = bug_kills;
            bug_speed -= 2.5;
            setTimeout(zby_2, 2001);
            setTimeout(function () {
                bug_2.style.display = "none";
                bug_2.style.left = "900px";
            }, 2000);
        }
    }

    if (id == "bug_3" || id == "bp_3") {
        go_3 = false;
        document.getElementById("bp_3").src = "bug_splat_l.png";
        clearInterval(bug_time_3);
        if (nh_3 != 900) {
            nh_3 = 900;
            bug_kills++;
            document.getElementById("bug_kill_count").innerHTML = bug_kills;
            bug_speed -= 2.5;
            setTimeout(zby_3, 2001);
            setTimeout(function () {
                bug_3.style.display = "none";
                bug_3.style.left = "900px";
            }, 2000);
        }
    }

    if (id == "bug_4" || id == "bp_4") {
        go_4 = false;
        document.getElementById("bp_4").src = "bug_splat_l.png";
        clearInterval(bug_time_4);
        if (nh_4 != 900) {
            nh_4 = 900;
            bug_kills++;
            document.getElementById("bug_kill_count").innerHTML = bug_kills;
            bug_speed -= 2.5;
            setTimeout(zby_4, 2001);
            setTimeout(function () {
                bug_4.style.display = "none";
                bug_4.style.left = "900px";
            }, 2000);
        }
    }

    if (id == "bug_5" || id == "bp_5") {
        go_5 = false;
        document.getElementById("bp_5").src = "bug_splat_l.png";
        clearInterval(bug_time_5);
        if (nh_5 != 900) {
            nh_5 = 900;
            bug_kills++;
            document.getElementById("bug_kill_count").innerHTML = bug_kills;
            bug_speed -= 2.5;
            setTimeout(zby_5, 2001);
            setTimeout(function () {
                bug_5.style.display = "none";
                bug_5.style.left = "900px";
            }, 2000);
        }
    }
}

/*cdlhldiuhiasudhviosaudsauidvoasdgvosdygvsydgagi*/
/*cdlhldiuhiasudhviosaudsauidvoasdgvosdygvsydgagi*/

function toggle_sound() {
    if (is_sound) {
        is_sound = false;
        background_music_1.pause();
        background_music_1.currentTime = 0;
        background_music_2.pause();
        background_music_2.currentTime = 0;
        document.getElementById("sound_name").innerHTML = "SOUND ON";
    } else {
        is_sound = true;
        if (bmusic == 1) {
            background_music_1.play();
        } else {
            background_music_2.play();
        }
        document.getElementById("sound_name").innerHTML = "SOUND OFF";
    }
}

/*cdlhldiuhiasudhviosaudsauidvoasdgvosdygvsydgagi*/
/*cdlhldiuhiasudhviosaudsauidvoasdgvosdygvsydgagi*/
document.onkeypress = handleKeyEvent;

function handleKeyEvent(event) {
    if (if_intro == false) {
        if_intro = true;
        start_game();
    }
}

function start_game() {
    console.log("hi");
    start_sound.play();
    document.getElementById("text_1_1").style.animation = "flick_1 0.05s infinite alternate";
    setTimeout(qwerty_1, 100);
}

function qwerty_1() {
    document.getElementById("intro_1").style.animation = "fade 1s alternate";
    setTimeout(qwerty_2, 999);
}

function qwerty_2() {
    background_music_1.play();
    document.getElementById("intro_1").style.display = "none";
    document.getElementById("intro_2").style.display = "block";
    document.getElementById("intro_2").style.animation = "fade_2 4s alternate";
    setTimeout(qwerty_3, 3999);
}

function qwerty_3() {
    document.getElementById("intro_2").style.display = "none";
    document.getElementById("intro_3").style.display = "block";
    document.getElementById("intro_3").style.animation = "fade_2 4s alternate";
    setTimeout(qwerty_4, 3999);
}


function qwerty_4() {
    document.getElementById("intro_3").style.display = "none";
    document.getElementById("intro_4").style.display = "block";
    document.getElementById("intro_4").style.animation = "fade_2 4s alternate";
    setTimeout(qwerty_5, 3999);
}

function qwerty_5() {
    mini_jump_sound.play();
    document.getElementById("intro_4").style.display = "none";
    document.getElementById("intro_5").style.display = "block";
    document.getElementById("intro_5").style.animation = "fade_2 8s alternate";
    setTimeout(qwerty_6, 7999);
}

function qwerty_6() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("desktop").style.display = "block";
    new_msg();
    module_open();
}

function last_jump_1() {
    if (is_sound) {
        jump_sound_2.currentTime = 1;
        jump_sound_2.play();
    }
    document.getElementById("end_1").innerHTML = '<img id="jump_jump" src="end_1.png"/>';
    setTimeout(last_jump_2, 100);
}

function last_jump_2() {
    document.getElementById("jump_jump").src = "end_2.png";
    setTimeout(last_jump_3, 100);
}

function last_jump_3() {
    document.getElementById("jump_jump").src = "end_3.png";
    setTimeout(last_jump_4, 100);
}

function last_jump_4() {
    document.getElementById("jump_jump").src = "end_4.png";
    setTimeout(last_jump_5, 100);
}

function last_jump_5() {
    document.getElementById("jump_jump").src = "end_5.png";
    setTimeout(ending_1, 200);
}

function ending_1() {
    jump_sound_2.pause();
    document.getElementById("end_1").style.display = "none";
    setTimeout(ending_2, 1000);
}

function ending_2() {
    document.getElementById("end_2").style.display = "block";
    document.getElementById("end_2").style.animation = "dim 5s infinite alternate";
    setTimeout(ending_3, 4999);
}

function ending_3() {
    document.getElementById("end_2").style.display = "none";
    document.getElementById("end_3").style.display = "block";
    document.getElementById("end_3").style.animation = "dim 5s infinite alternate";
    setTimeout(ending_4, 4999);
}

function ending_4() {
    document.getElementById("end_3").style.display = "none";
    restart_game();
}

function restart_game() {
    location = location;
}
