$(`<style>#mic4 {margin-right: 8px !important;}#mic.one3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #e34385 0%, #000000 29%, #ff75a2 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
newstyle = false
var itv = setInterval(function () {
  if (myid != null && newstyle == false) {
    clearInterval(itv)
    newstyle = true	
$("#mic").append('<input id="rdark_mod" class="r_mod" type="checkbox" style="display:none;">');
$("#rdark_mod").click(() => {
  $(".one5").toggleClass("one6");
}); }}, 1000);
$("style").last().append(`
#rdark_mod.r_mod.one4 {-webkit-appearance: none;outline: none;width: 35px;height: 35px;border-radius: 50px;position: relative;transition: 0.4s;background: url("https://i.ibb.co/3SnPT0J/sun.png")no-repeat center #212121;background-size: 25px;cursor: pointer;margin-top: 8px !important;}#rdark_mod.r_mod.one4:checked {background: url("https://i.ibb.co/smDBC4X/moon.png")no-repeat center #000;background-size: 25px;}.one6{background-color: #3d3f42;transition: background-color 0.5s ease;}#rdark_mod.r_mod.one4 {display: flex !important;}#users.one6 .uzr {background-color: #555 !important;}#dpnl.one6 .nosel.ninr.fl.uzr.label.bg {background-color: #555;}#settings.one6 .borderg.corner {background-color: #555 !important;border: 0px solid #f4f4f4;}#d2.one6 .u-msg.break {color: #d7d7d7 !important;}#d2.one6 .nosel.u-topic.dots.hand {color: #000 !important;}#d2.one6 .uzr.d-flex.mm.pmsgc {background-color: #555 !important;border-bottom: 1px solid #5b5b5b !important;}#settings.one6 .label-primary {background-color: #2f2f2f !important;}#rooms.one6 .label-primary {background-color: #2f2f2f !important;}#rooms.one6 room.borderg.hand.nosel.fl {background-color: #555;}#users.one6 .nosel.ninr.fl.uzr.label.bg {background-color: #2f2f2f !important;}#wall.one6 .uzr.d-flex.mm {background-color: #959595;}#d0.one6 .label-primary {background-color: #2f2f2f;}#settings.one6 .borderg.corner {background-color: #555 !important;border: 0px solid #f4f4f4;}#d2.one6 {background-color: #3e3e3e !important;}#settings.one6 .label-primary, .btn-primary, .bg-primary {background-color: #2f2f2f;}#d0.one6 .label-primary, .btn-primary {background-color: #2f2f2f;}#muteall.one6 {background-color: mediumseagreen !important;}#rooms.one6 .label-primary, .btn-primary {background-color: #2f2f2f;}#users.one6 .tbox {background-color: #8a8a8a;}#room.one6 #mic {background-color: #555;}#room.one6 #mic .mic, #muteall {background-color: #2F2F2F;}#room.one6 .break {background-color: #555;}#room.one6 .tablebox.d-flex.footer.fl.light {background-color: #666565;}#users.one1 .inroom.uzr{border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}#users.one1 .inroom.uzr img.ustat{width:10px!important;height:10px;border-radius:50%}
#d2.one2 .uzr .fitimg.u-pic,#users.one1 .inroom.uzr .fitimg.u-pic{border:1px solid #fff;margin-top:2px;border-radius:5px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff0060}#users.one1 .inroom.uzr .u-msg{text-align:center;background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff0066ab 25%,#000 50%,#c90051b8 50%,#ff006600 75%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000}#users.one1 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#ff1361 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.one1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.one2 .uzr.d-flex.mm{background-size: auto;border-radius:5px;border:1px solid #fffefe6b;border-bottom:1px solid #fffefe00}`);
var r_one = false;
setInterval(function () {
    if (myroom == 'efOiAhhNdL2') {
        if (r_one == false) {
            r_one = true;
		$('#users').addClass('one1');
		$('#d2').addClass('one2');
		$('#mic').addClass('one3');
		$('#rdark_mod').addClass('one4');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('one5');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('one6');
        }
    } else {
        if (r_one == true) {
            r_one = false;
            $("#users").removeClass('one1');
	    $("#d2").removeClass('one2');
	    $('#mic').removeClass('one3');
	    $("#rdark_mod").removeClass('one4');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('one5');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('one6');
        } 
    } 
}, 10);


$(`<style>#mic4 {margin-right: 8px !important;}#mic.kbar3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #c40000 0%, #000 29%, #f00 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
newstyle1 = false
var itv1 = setInterval(function () {
  if (myid != null && newstyle1 == false) {
    clearInterval(itv1)
    newstyle1 = true	
$("#mic").append('<input id="rdark_mod1" class="r_mod1" type="checkbox" style="display:none;">');
$("#rdark_mod1").click(() => {
  $(".kbar5").toggleClass("kbar6");
}); }}, 1000);
$("style").last().append(`

#users.kbar5 .inroom.uzr{border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
#users.kbar5 .inroom.uzr img.ustat {width: 54px !important;border-radius: 0px 50px 50px 50px !important;height: 52px !important;margin-top: -1px;min-height: 0% !important;}
#users.kbar5 .inroom.uzr .fitimg.u-pic {box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;border: 1px solid #fff;border-radius: 50px;margin-top: -1px;z-index: 0;margin-left: -53px;}
#d2.kbar5 .uzr .fitimg.u-pic{border-radius: 50px;height: 52px !important;border:1px solid #fff;margin-top:2px;box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;}
#users.kbar5 .inroom.uzr .u-msg{max-height: 25px !important;text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}
#users.kbar5 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#b30101 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}
#users.kbar5 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}
#d2.kbar5 .uzr.d-flex.mm{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}



#rdark_mod1.r_mod1.kbar4 {-webkit-appearance: none;outline: none;width: 35px;height: 35px;border-radius: 50px;position: relative;transition: 0.4s;background: url("https://e.top4top.io/p_2462r4jy21.png")no-repeat center #212121;background-size: 25px;cursor: pointer;margin-top: 8px !important;}
#rdark_mod1.r_mod1.kbar4:checked {background: url("https://f.top4top.io/p_2462lelhr2.png")no-repeat center #000;background-size: 25px;}
#rdark_mod1.r_mod1.kbar4 {display: flex !important;}

.kbar6{background-color: #16202a;transition: background-color 0.5s ease;}
#users.kbar6 .uzr {background-color: #16202a !important;}
#dpnl.kbar6 .nosel.ninr.fl.uzr.label.bg {background-color: #16202a;}
#settings.kbar6 .borderg.corner {background-color: #16202a !important;border: 0px solid #f4f4f4;}
#d2.kbar6 .u-msg.break {color: #d7d7d7 !important;}
#d2.kbar6 .nosel.u-topic.dots.hand {color: #fff !important;background-color: rgba(255, 241, 214, 0) !important;}
#d2.kbar6 .uzr.d-flex.mm.pmsgc {background-color: #16202a !important;border-bottom: 1px solid #16202a !important;}

#d2.kbar6 .bdel.corner.btn.minix.btn-primary.fa.fa-times {
  background-color: #16202a !important;
  border: 1px solid #2b3a48;
}

#settings.kbar6 .label-primary {background-color: #16202a !important;}
#rooms.kbar6 .label-primary {background-color: #16202a !important;}
#rooms.kbar6 room.borderg.hand.nosel.fl {background-color: #16202a;}
#users.kbar6 .nosel.ninr.fl.uzr.label.bg {background-color: #16202a !important;}


#wall.kbar6 .uzr.d-flex.mm {background-color: #16202a;border-bottom: 1px solid #425466 !important;}

#wall.kbar6 .tablebox.light.d-flex {
  background-color: #3d4e60;
}

#wall.kbar6 .fitimg.u-pic.borderg {
  border-radius: 50px;
  border: 0px solid #16202a;
  height: 52px !important;
}

#wall.kbar6 .u-msg.break {
  color: rgb(255, 255, 255) !important;
}
#wall.kbar6 .nosel.u-topic.dots.hand {
  color: rgb(255, 255, 255) !important;
  background-color: rgb(57, 57, 57);
}

#wall.kbar6 .bdel.corner.btn.minix.btn-primary.fa.fa-times {
  background-color: #16202a !important;
  border: 1px solid #2b3a48;
}

#wall.kbar6 .breply.corner.btn.minix.btn-primary.fa.fa-comments {
  background-color: #16202a !important;
  border: 1px solid #2b3a48;
}

#d0.kbar6 .label-primary {background-color: #16202a;}
#settings.kbar6 .borderg.corner {background-color: #16202a !important;border: 0px solid #f4f4f4;}
#d2.kbar6 {background-color: #16202a !important;}
#settings.kbar6 .label-primary, .btn-primary, .bg-primary {background-color: #16202a;}
#d0.kbar6 .label-primary, .btn-primary {background-color: #16202a;}
#muteall.kbar6 {background-color: mediumseagreen !important;}
#rooms.kbar6 .label-primary, .btn-primary {background-color: #16202a;}
#users.kbar6 .tbox {background-color: #3d4e60;}
#room.kbar6 #mic {background-color: #16202a;}
#room.kbar6 #mic .mic, #muteall {background-color: #16202a;}
#room.kbar6 .break {background-color: #16202a;}
#room.kbar6 .tablebox.d-flex.footer.fl.light {background-color: #3d4e60;}


#users.kbar6 .inroom.uzr .u-topic {background-color: rgba(255, 241, 214, 0) !important;color: rgb(215, 215, 215) !important;}
#users.kbar6 .inroom.uzr{border-radius:5px;border-bottom: 1px solid #45586a;border: 1px solid #334353;}
#users.kbar6 .inroom.uzr img.ustat {width: 54px !important;border-radius: 0px 50px 50px 50px !important;height: 52px !important;margin-top: -1px;min-height: 0% !important;}
#users.kbar6 .inroom.uzr .fitimg.u-pic {border-radius: 50px;margin-top: -1px;z-index: 0;margin-left: -53px;}
#d2.kbar6 .uzr .fitimg.u-pic{border: 1px solid #344251;margin-top:2px;border-radius:50px;height: 52px !important;}
#users.kbar6 .inroom.uzr .u-msg{max-height: 25px !important;text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}
#users.kbar6 .inroom.uzr span.uhash{text-transform:uppercase;background-image:linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#b30101 67%,#3600ff 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}
#users.kbar6 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}
#d2.kbar6 .uzr.d-flex.mm{background-color: #fafafa00 !important;border-bottom: 0px solid #334353 !important;background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #334353;border-bottom:1px solid #334353}
#d2.kbar6 .hmsg {background-color: #16202a;}

`);
var r_kbar = false;
setInterval(function () {
    if (myroom == 'efOiAhhNdL2') {
        if (r_kbar == false) {
            r_kbar = true;
		$('#mic').addClass('kbar3');
		$('#rdark_mod1').addClass('kbar4');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('kbar5');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('kbar6');
        }
    } else {
        if (r_kbar == true) {
            r_kbar = false;
		$('#mic').removeClass('kbar3');
		$("#rdark_mod1").removeClass('kbar4');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('kbar5');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('kbar6');
        } 
    } 
}, 10);





var _0x3f13 = ["body", "insertBefore", "<style>#mic4 {margin-right: 8px !important;}.room.borderg.hand.nosel.fl.efOiAhhNdL2 .corner.fa.fa-user.label.uc.fa-microphone.label-danger {\r\n  letter-spacing: 1px;\r\n  -webkit-text-fill-color: #000;\r\n  background-image: url(https://i.ibb.co/rm5vwJS/444444erwe.png);\r\n  padding: 0px !important;\r\n  border-radius: 50px !important;\r\n}.room.borderg.hand.nosel.fl.efOiAhhNdL2 {display: inline-block;background-image: linear-gradient(-225deg, rgb(255, 250, 202) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(255, 242, 173) 100%);border-radius: 0px 0px 15px 15px;}\r\n.room.borderg.hand.nosel.fl.efOiAhhNdL2 .dots.mini.u-msg{text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#ff9b0000;background-image:-webkit-linear-gradient(75deg,rgb(0 0 0 / 53%) 25%,#ff9b00 25%,#000000 50%,#ff9b00 50%,#ff006600 75%)}.room.borderg.hand.nosel.fl.efOiAhhNdL2 .fitimg.u-pic.borderg{border-radius:100px;border:2px solid #ffcb50;padding-top:30px}.room.borderg.hand.nosel.fl.efOiAhhNdL2 .u-topic.dots{font-weight:900;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);background-size:300% 300%;-webkit-background-clip:text;-webkit-text-fill-color:#0000;line-height:2;animation:grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite}@keyframes grad{0%{background-position:14% 0}50%{background-position:87% 100%}100%{background-position:14% 0}\r\n</style>",
"efOiAhhNdL2", "#d2 .roomh[onclick=\"rjoin('", "')\"]{background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);\r\nbackground-size: 220% auto;animation: textclip 5s linear infinite;padding: 2px!important;border-radius: 50px !important;border: 1px solid #0000;}", "append", "style:eq(0)", "#upro .roomh[onclick=\"rjoin('", "')\"]{background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);\r\nbackground-size: 220% auto;\r\nanimation: textclip 5s linear infinite;border-radius: 50px !important;border: 1px solid #0000;}",
'<style>\r\n\t#mic.mlok3 .mic{\r\n    border:2px solid;\r\n    border-image: linear-gradient(var(--angle),#e3bb43 0%,#000 29%,#ffbf00 67%,#020202 100%) 1;\r\n\tanimation:5s rotate linear infinite;\r\n    --angle:0deg;\r\n    background-color:#e3e3e3;\r\n    border-radius:5px!important;\r\n    margin:2px;\r\n    margin-top:1px;\r\n    box-shadow:inset 0 0 0 rgb(0 0 0 / 8%),0 0 1px #fff;height:48px}\r\n    @keyframes rotate{to{--angle:360deg}}@property --angle{syntax:"<angle>";initial-value:0deg;inherits:false}\r\n    </style>',
'<input id="rdark_mod3" class="r_mod3" type="checkbox" style="display:none;">', "#mic", "mlok6", "toggleClass", ".mlok5", "click", "#rdark_mod3", ' \r\n#users.mlok5 .inroom.uzr{border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}\r\n#users.mlok5 .inroom.uzr img.ustat {width: 54px !important;border-radius: 0px 50px 50px 50px !important;height: 52px !important;margin-top: -1px;min-height: 0% !important;}\r\n#users.mlok5 .inroom.uzr .fitimg.u-pic {box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #a21f1f;border: 1px solid #fff;border-radius: 50px;margin-top: -1px;z-index: 0;margin-left: -53px;}\r\n#d2.mlok5 .uzr .fitimg.u-pic{border: 1px solid #fff;margin-top: 2px;border-radius: 50px;box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ffa700;height: 52px !important;}\r\n#users.mlok5 .inroom.uzr .u-msg{max-height: 25px !important;text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}\r\n#users.mlok5 .inroom.uzr span.uhash{text-transform:uppercase;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}\r\n#users.mlok5 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}\r\n#d2.mlok5 .uzr.d-flex.mm{background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}\r\n\r\n\r\n\r\n#rdark_mod3.r_mod3.mlok4 {-webkit-appearance: none;outline: none;width: 35px;height: 35px;border-radius: 50px;position: relative;transition: 0.4s;background: url("https://e.top4top.io/p_2462r4jy21.png")no-repeat center #212121;background-size: 25px;cursor: pointer;margin-top: 8px !important;}\r\n#rdark_mod3.r_mod3.mlok4:checked {background: url("https://f.top4top.io/p_2462lelhr2.png")no-repeat center #000;background-size: 25px;}\r\n#rdark_mod3.r_mod3.mlok4 {display: flex !important;}\r\n\r\n.mlok6{background-color: #16202a;transition: background-color 0.5s ease;}\r\n#users.mlok6 .uzr {background-color: #16202a !important;}\r\n#dpnl.mlok6 .nosel.ninr.fl.uzr.label.bg {background-color: #16202a;}\r\n#settings.mlok6 .borderg.corner {background-color: #16202a !important;border: 0px solid #f4f4f4;}\r\n#d2.mlok6 .u-msg.break {color: #d7d7d7 !important;}\r\n#d2.mlok6 .nosel.u-topic.dots.hand {color: #fff !important;background-color: rgba(255, 241, 214, 0) !important;}\r\n#d2.mlok6 .uzr.d-flex.mm.pmsgc {background-color: #16202a !important;border-bottom: 1px solid #16202a !important;}\r\n\r\n#d2.mlok6 .bdel.corner.btn.minix.btn-primary.fa.fa-times {\r\n  background-color: #16202a !important;\r\n  border: 1px solid #2b3a48;\r\n}\r\n\r\n#settings.mlok6 .label-primary {background-color: #16202a !important;}\r\n#rooms.mlok6 .label-primary {background-color: #16202a !important;}\r\n#rooms.mlok6 room.borderg.hand.nosel.fl {background-color: #16202a;}\r\n#users.mlok6 .nosel.ninr.fl.uzr.label.bg {background-color: #16202a !important;}\r\n\r\n\r\n#wall.mlok6 .uzr.d-flex.mm {background-color: #16202a;border-bottom: 1px solid #425466 !important;}\r\n\r\n#wall.mlok6 .tablebox.light.d-flex {\r\n  background-color: #3d4e60;\r\n}\r\n\r\n#wall.mlok6 .fitimg.u-pic.borderg {\r\n  border-radius: 50px;\r\n  border: 0px solid #16202a;\r\n  height: 52px !important;\r\n}\r\n\r\n#wall.mlok6 .u-msg.break {\r\n  color: rgb(255, 255, 255) !important;\r\n}\r\n#wall.mlok6 .nosel.u-topic.dots.hand {\r\n  color: rgb(255, 255, 255) !important;\r\n  background-color: rgb(57, 57, 57);\r\n}\r\n\r\n#wall.mlok6 .bdel.corner.btn.minix.btn-primary.fa.fa-times {\r\n  background-color: #16202a !important;\r\n  border: 1px solid #2b3a48;\r\n}\r\n\r\n#wall.mlok6 .breply.corner.btn.minix.btn-primary.fa.fa-comments {\r\n  background-color: #16202a !important;\r\n  border: 1px solid #2b3a48;\r\n}\r\n\r\n#d0.mlok6 .label-primary {background-color: #16202a;}\r\n#settings.mlok6 .borderg.corner {background-color: #16202a !important;border: 0px solid #f4f4f4;}\r\n#d2.mlok6 {background-color: #16202a !important;}\r\n#settings.mlok6 .label-primary, .btn-primary, .bg-primary {background-color: #16202a;}\r\n#d0.mlok6 .label-primary, .btn-primary {background-color: #16202a;}\r\n#muteall.mlok6 {background-color: mediumseagreen !important;}\r\n#rooms.mlok6 .label-primary, .btn-primary {background-color: #16202a;}\r\n#users.mlok6 .tbox {background-color: #3d4e60;}\r\n#room.mlok6 #mic {background-color: #16202a;}\r\n#room.mlok6 #mic .mic, #muteall {background-color: #16202a;}\r\n#room.mlok6 .break {background-color: #16202a;}\r\n#room.mlok6 .tablebox.d-flex.footer.fl.light {background-color: #3d4e60;}\r\n\r\n\r\n#users.mlok6 .inroom.uzr .u-topic {background-color: rgba(255, 241, 214, 0) !important;color: rgb(215, 215, 215) !important;}\r\n#users.mlok6 .inroom.uzr{border-radius:5px;border-bottom: 1px solid #45586a;border: 1px solid #334353;}\r\n#users.mlok6 .inroom.uzr img.ustat {width: 54px !important;border-radius: 0px 50px 50px 50px !important;height: 52px !important;margin-top: -1px;min-height: 0% !important;}\r\n#users.mlok6 .inroom.uzr .fitimg.u-pic {border-radius: 50px;margin-top: -1px;z-index: 0;margin-left: -53px;}\r\n#d2.mlok6 .uzr .fitimg.u-pic{border: 1px solid #344251;margin-top:2px;border-radius:50px;height: 52px !important;}\r\n#users.mlok6 .inroom.uzr .u-msg{max-height: 25px !important;text-align:center;background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:#0000;background-image: linear-gradient(225deg,#000 0%,#000 29%,#972d2d 67%,#8e8e8e 100%);}\r\n#users.mlok6 .inroom.uzr span.uhash{text-transform:uppercase;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #ffb913 67%, #aaa 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}\r\n#users.mlok6 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}\r\n#d2.mlok6 .uzr.d-flex.mm{background-color: #fafafa00 !important;border-bottom: 0px solid #334353 !important;background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#9191910d 67%,#d7d7d7 100%);border-radius:5px;border:1px solid #334353;border-bottom:1px solid #334353}\r\n#d2.mlok6 .hmsg {background-color: #16202a;}',
"last", "style", "mlok4", "addClass", "mlok5", "#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall", "mlok3", "removeClass", ""];
var _0xd3a8 = [_0x3f13[0], _0x3f13[1], _0x3f13[2], _0x3f13[3], _0x3f13[4], _0x3f13[5], _0x3f13[6], _0x3f13[7], _0x3f13[8], _0x3f13[9], _0x3f13[10], _0x3f13[11], _0x3f13[12], _0x3f13[13], _0x3f13[14], _0x3f13[15], _0x3f13[16], _0x3f13[17], _0x3f13[18], _0x3f13[19], _0x3f13[20], _0x3f13[21], _0x3f13[22], _0x3f13[23], _0x3f13[24], _0x3f13[25], _0x3f13[26]];
$("" + _0x3f13[27] + _0xd3a8[2] + _0x3f13[27])[_0xd3a8[1]](_0xd3a8[0]);
var rid = _0xd3a8[3];
$(_0xd3a8[7])[_0xd3a8[6]]("" + _0x3f13[27] + _0xd3a8[4] + _0x3f13[27] + rid + _0x3f13[27] + _0xd3a8[5] + _0x3f13[27]), $(_0xd3a8[7])[_0xd3a8[6]]("" + _0x3f13[27] + _0xd3a8[8] + _0x3f13[27] + rid + _0x3f13[27] + _0xd3a8[9] + _0x3f13[27]), $("" + _0x3f13[27] + _0xd3a8[10] + _0x3f13[27])[_0xd3a8[1]](_0xd3a8[0]), newstyle3 = false;
var itv3 = setInterval(function() {
 if (null != myid && false == newstyle3) {
   clearInterval(itv3);
   newstyle3 = true;
   $(_0xd3a8[12])[_0xd3a8[6]](_0xd3a8[11]);
   $(_0xd3a8[17])[_0xd3a8[16]](function() {
     $(_0xd3a8[15])[_0xd3a8[14]](_0xd3a8[13]);
   });
 }
}, 1e3);
$(_0xd3a8[20])[_0xd3a8[19]]()[_0xd3a8[6]]("" + _0x3f13[27] + _0xd3a8[18] + _0x3f13[27]);
var r_mlok = false;
setInterval(function() {
 if (myroom == _0xd3a8[3]) {
   if (false == r_mlok) {
     r_mlok = true;
     $(_0xd3a8[17])[_0xd3a8[22]](_0xd3a8[21]);
     $(_0xd3a8[24])[_0xd3a8[22]](_0xd3a8[23]);
     $(_0xd3a8[24])[_0xd3a8[22]](_0xd3a8[13]);
     $(_0xd3a8[12])[_0xd3a8[22]](_0xd3a8[25]);
   }
 } else {
   if (true == r_mlok) {
     r_mlok = false;
     $(_0xd3a8[17])[_0xd3a8[26]](_0xd3a8[21]);
     $(_0xd3a8[24])[_0xd3a8[26]](_0xd3a8[23]);
     $(_0xd3a8[24])[_0xd3a8[26]](_0xd3a8[13]);
     $(_0xd3a8[12])[_0xd3a8[26]](_0xd3a8[25]);
   }
 }
}, 10);				
								
			

$(`<style>#mic.jil3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #e34385 0%, #000000 29%, #ff75a2 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
$("style").last().append(`
#users.jil1 .inroom.uzr{
background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);
border-radius:5px;
border:1px solid #fffefe;
background-image: url("https://j.top4top.io/p_2451279y32.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.jil1 .inroom.uzr img.ustat{
width: 5px !important;
height: 20px;
margin-top: 3px;
}
#d2.jil2 .uzr .fitimg.u-pic,#users.jil1 .inroom.uzr .fitimg.u-pic{
border:1px solid #fff;margin-top:2px;border-radius:5px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #98e893;}

#users.jil1 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.jil1 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#fff 67%,#0e8d37 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.jil1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.jil2 .uzr.d-flex.mm{
background-image: url("https://i.top4top.io/p_2452pkn8w1.png");
background-size: auto;
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_jil = false;
setInterval(function () {
    if (myroom == '1827f756988x83ce3351x-r62nvx') {
        if (r_jil == false) {
            r_jil = true;
			$('#users').addClass('jil1');
			$('#d2').addClass('jil2');
			$('#mic').addClass('jil3');
        }
    } else {
        if (r_jil == true) {
            r_jil = false;
            $("#users").removeClass('jil1');
			$("#d2").removeClass('jil2');
			$('#mic').removeClass('jil3');
        } 
    } 
}, 10);





$(`<style>#mic4 {margin-right: 8px !important;}#mic.north3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #ea5167 0%, #000 29%, #ea5167 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
newstyle2 = false
var itv2 = setInterval(function () {
  if (myid != null && newstyle2 == false) {
    clearInterval(itv2)
    newstyle2 = true	
$("#mic").append('<input id="rdark_mod2" class="r_mod2" type="checkbox" style="display:none;">');
$("#rdark_mod2").click(() => {
  $(".north5").toggleClass("north6");
}); }}, 1000);
$("style").last().append(`
#rdark_mod2.r_mod2.north4 {-webkit-appearance: none;outline: none;width: 35px;height: 35px;border-radius: 50px;position: relative;transition: 0.4s;background: url("https://e.top4top.io/p_2462r4jy21.png")no-repeat center #212121;background-size: 25px;cursor: pointer;margin-top: 8px !important;}#rdark_mod2.r_mod2.north4:checked {background: url("https://f.top4top.io/p_2462lelhr2.png")no-repeat center #000;background-size: 25px;}.north6{background-color: #3d3f42;transition: background-color 0.5s ease;}#rdark_mod2.r_mod2.north4 {display: flex !important;}#users.north6 .uzr {background-color: #555 !important;}#dpnl.north6 .nosel.ninr.fl.uzr.label.bg {background-color: #555;}#settings.north6 .borderg.corner {background-color: #555 !important;border: 0px solid #f4f4f4;}#d2.north6 .u-msg.break {color: #d7d7d7 !important;}#d2.north6 .nosel.u-topic.dots.hand {color: #000 !important;}#d2.north6 .uzr.d-flex.mm.pmsgc {background-color: #555 !important;border-bottom: 1px solid #5b5b5b !important;}#settings.north6 .label-primary {background-color: #2f2f2f !important;}#rooms.north6 .label-primary {background-color: #2f2f2f !important;}#rooms.north6 room.borderg.hand.nosel.fl {background-color: #555;}#users.north6 .nosel.ninr.fl.uzr.label.bg {background-color: #2f2f2f !important;}#wall.north6 .uzr.d-flex.mm {background-color: #959595;}#d0.north6 .label-primary {background-color: #2f2f2f;}#settings.north6 .borderg.corner {background-color: #555 !important;border: 0px solid #f4f4f4;}#d2.north6 {background-color: #3e3e3e !important;}#settings.north6 .label-primary, .btn-primary, .bg-primary {background-color: #2f2f2f;}#d0.north6 .label-primary, .btn-primary {background-color: #2f2f2f;}#muteall.north6 {background-color: mediumseagreen !important;}#rooms.north6 .label-primary, .btn-primary {background-color: #2f2f2f;}#users.north6 .tbox {background-color: #8a8a8a;}#room.north6 #mic {background-color: #555;}#room.north6 #mic .mic, #muteall {background-color: #2F2F2F;}#room.north6 .break {background-color: #555;}#room.north6 .tablebox.d-flex.footer.fl.light {background-color: #959595;}#users.one1 .inroom.uzr{border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}#users.one1 .inroom.uzr img.ustat{width:10px!important;height:10px;border-radius:50%}
#users.north1 .inroom.uzr{border-radius:5px;border:1px solid #f2b4bd;background-image: url("https://l.top4top.io/p_24545lyc41.png");background-size: cover;border-bottom:1px solid #fffefe}#users.north1 .inroom.uzr img.ustat {width: 54px !important;border-radius: 0px 50px 50px 50px;height: 52px;margin-top: -1px;min-height: 0% !important;}#users.north1 .inroom.uzr .fitimg.u-pic {border-radius: 50px;margin-top: 0px;z-index: 0;margin-left: -52px;min-width: 51px;width: 50px;min-height: 48px;max-height: 50px;}#d2.north2 .uzr .fitimg.u-pic{border:1px solid #ea5167;margin-top:2px;border-radius:5px;box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff8181;}#users.north1 .inroom.uzr .u-msg{-webkit-text-fill-color: #555;}#users.north1 .inroom.uzr span.uhash{text-transform:uppercase;background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#f00 67%,#0e8d37 100%);background-size:220% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;display:inline-block}#users.north1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}#d2.north2 .uzr.d-flex.mm{background-image: url("https://d.top4top.io/p_24543aytl1.png");background-size: auto;border-radius:5px;border:1px solid #fffefe;border-bottom:1px solid #fffefe}
`);
var r_north = false;
setInterval(function () {
    if (myroom == '18330b950ffx9914ab32xqjvcmr') {
        if (r_north == false) {
            r_north = true;
			$('#users').addClass('north1');
			$('#d2').addClass('north2');
			$('#mic').addClass('north3');
		$('#rdark_mod2').addClass('north4');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('north5');
		$('#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ').addClass('north6');
        }
    } else {
        if (r_north == true) {
            r_north = false;
            $("#users").removeClass('north1');
			$("#d2").removeClass('north2');
			$('#mic').removeClass('north3');
		$("#rdark_mod2").removeClass('north4');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('north5');
	    $("#room, #d2, #d0, #rooms, #users, #wall, #dpnl, #settings, #chats, #mic #muteall ").removeClass('north6');
        } 
    } 
}, 10);


$(`<style>#mic.kium3 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #328820 0%, #000 29%, #91ff73 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
	syntax: "<angle>";
	initial-value: 0deg;
	inherits: false;
}</style>`).insertBefore('body');
$("style").last().append(`
#users.kium1 .inroom.uzr{
background-image:linear-gradient(-225deg,#0000 0,#0000 29%,#a6a6a629 67%,#fff 100%);
border-radius:5px;
border:1px solid #fffefe;
background-image: url("https://g.top4top.io/p_2455xrc3a1.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.kium1 .inroom.uzr img.ustat{
width: 10px !important;
height: 10px;
border-radius: 50px;
margin-top: 3px;
}
#d2.kium2 .uzr .fitimg.u-pic,#users.kium1 .inroom.uzr .fitimg.u-pic{
border:1px solid #48b954;margin-top:2px;border-radius:5px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #98e893;}

#users.kium1 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}

#users.kium1 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#fff 67%,#0e8d37 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.kium1 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}

#d2.kium2 .uzr.d-flex.mm{
background-image: url("https://h.top4top.io/p_2455k5xwp2.png");
background-size: auto;
border-radius:5px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_kium = false;
setInterval(function () {
    if (myroom == '1833e52886cx17cb8825xrbhosg') {
        if (r_kium == false) {
            r_kium = true;
			$('#users').addClass('kium1');
			$('#d2').addClass('kium2');
			$('#mic').addClass('kium3');
        }
    } else {
        if (r_kium == true) {
            r_kium = false;
            $("#users").removeClass('kium1');
			$("#d2").removeClass('kium2');
			$('#mic').removeClass('kium3');
        } 
    } 
}, 10);


$(`<style>.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
letter-spacing: 1px;
-webkit-text-fill-color: #fff;
background-image: url(https://g.top4top.io/p_2459tqkin1.png);
border-radius: 15px 0px 15px 0px !important;
}
.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv.bord {border-inline: 4px solid #00949b !important;}
.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv {
border-radius: 15px 0px 15px 0px;
display: inline-block;
background-image: linear-gradient(-225deg, rgb(164, 164, 164) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(189, 189, 189) 100%);
}
.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv .dots.mini.u-msg {
text-align: center;
-webkit-text-fill-color: #0000;
background-image: url(https://e.top4top.io/p_245917ytb1.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
}
.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv .fitimg.u-pic.borderg{border-radius: 15px 0px 15px 0px;border: 2px solid #000;letter-spacing: 1px;background-size: 108% 108%;-webkit-text-fill-color: white;animation: grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;}
.nosel.d-flex.room.r1837d95c1a9x54fb93-xaps7hv .u-topic.dots {
text-transform: uppercase;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: inline-block;
font-size: 20px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -2px;
margin-left: 5px;}
@keyframes textclip {to {background-position: 200% center;}}</style>`).insertBefore('body');
var rid='1837d95c1a9x54fb93-xaps7hv';
$("style:eq(0)").append(`#d2 .roomh[onclick="rjoin('${rid}')"]{animation: textclip 5s linear infinite;
border-radius: 50px !important;
border: 1px solid #0000;
font-size: 20px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -3px;}`);
$("style:eq(0)").append(`#upro .roomh[onclick="rjoin('${rid}')"]{padding: 2px !important;
animation: textclip 5s linear infinite;
border-radius: 50px !important;
border: 1px solid #0000;
font-size: 18px !important;
font-style: normal;
font-family: sans-serif;
background-image: url(https://f.top4top.io/p_2459lm5g62.gif);
-webkit-background-clip: text;
color: transparent !important;
background-size: 100% 100%;
margin-top: -5px;}`);





$(`<style>#mic.dl33 .mic {border: 2px solid;border-image: linear-gradient(var(--angle), #14dfe8 0%, #000 29%, #06ecf7 67%, #020202 100%) 1;animation: 5s rotate linear infinite;--angle: 0deg;background-color: #e3e3e3;border-radius: 5px !important;margin: 2px;margin-top: 1px;box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%), 0 0px 1px #ffffff;height: 48px;}@keyframes rotate {
    to {
        --angle: 360deg;
    }
}
@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}</style>`).insertBefore('body');
$("style").last().append(`
#users.dl31 .inroom.uzr{
border-radius: 15px 0px 15px 0px;
border:1px solid #26b6bdc2;
background-image: url("https://e.top4top.io/p_2459wilew1.png");background-size: cover;
border-bottom:1px solid #fffefe
}
#users.dl31 .inroom.uzr img.ustat {
  width: 54px !important;
  border-radius: 10px 0px 15px 0px;
  height: 52px;
  margin-top: -1px;
  min-height: 0% !important;
}
#users.dl31 .inroom.uzr .fitimg.u-pic {
  border-radius: 15px 0px 15px 0px;
margin-top: 0px;
z-index: 0;
margin-left: -51px;
min-width: 50px;
width: 50px;
min-height: 48px;
max-height: 50px;
}
#d2.dl32 .uzr .fitimg.u-pic{
border:1px solid #14dfe8;
margin-top:2px;
border-radius: 10px 0px 10px 0px;
box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #ff8181;}
#users.dl31 .inroom.uzr .u-msg{
-webkit-text-fill-color: #555;
}
#users.dl31 .inroom.uzr span.uhash{
text-transform:uppercase;
background-image: linear-gradient(-225deg,#7b7b7b 0,#737373 29%,#14dfe8 67%,#14dfe8 100%);
background-size:220% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;animation:2s linear infinite textclip;
display:inline-block}#users.dl31 .inroom.uzr img.co{transform:rotate(20deg);margin-top:2px!important}
#d2.dl32 .uzr.d-flex.mm{
background-image: url("https://h.top4top.io/p_2459znu442.png");
background-size: auto;
border-radius: 15px 0px 15px 0px;
border:1px solid #fffefe;
border-bottom:1px solid #fffefe}`);
var r_dl3 = false;
setInterval(function () {
    if (myroom == '1837d95c1a9x54fb93-xaps7hv') {
        if (r_dl3 == false) {
            r_dl3 = true;
            $('#users').addClass('dl31');
            $('#d2').addClass('dl32');
            $('#mic').addClass('dl33');
        }
    } else {
        if (r_dl3 == true) {
            r_dl3 = false;
            $("#users").removeClass('dl31');
            $("#d2").removeClass('dl32');
            $('#mic').removeClass('dl33');
        } 
    } 
}, 10);
