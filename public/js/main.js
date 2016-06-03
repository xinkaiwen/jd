$(function() {
    $("header .header_top .header_top_right li").hover(function() {
        var i = $(this).index();
        $(".tophide").children().hide();;
        $(".tophide").children().eq(i).show();
        if (i == 3 || i == 6 || i == 7 || i == 8 || i == 9) {
            $(this).css({ "background-color": "#fff" })
        }

    }, function() {
        $(this).css({ "background-color": "#f4f4f4" })

    })
    $(".tophide").children().mouseover(function() {
        $(this).show();
        var i = $(this).index();
        $("header .header_top .header_top_right li").eq(i).css({ "background-color": "#fff" });
    })
    $(".tophide").children().mouseout(function() {
        $(".tophide").children().hide();
        var i = $(this).index();
        $("header .header_top .header_top_right li").eq(i).css({ "background-color": "#f4f4f4" });
    })
    $(".ip1_right_bottom table tr td").addClass("td")

    $(".ip1_right_bottom table tr").mouseover(function() {
        var i = $(this).index();
        $(".ip1_right_bottom table tr").hide();
        $(".ip1_right_bottom table tr .span").hide();
        $(this).show();
        $(".ip1_right_table .div").hide();
        $(".ip1_right_table .div").eq(i).show();

        $(".ip1_right_bottom table tr td").mouseover(function() {
            $(".ip1_right_bottom table tr:eq(" + i + ") td").eq(0).removeClass("td_active");
            $(".ip1_right_table .div:eq(" + i + ") div").eq(0).hide();
            var t = $(this).index();
            $(".ip1_right_table .div div").hide();
            $(".ip1_right_table .div:eq(" + i + ") div").eq(t).show();
            $(".ip1_right_bottom table tr td").removeClass("td_active");
            $(this).addClass("td_active");
        })

    })





    $(".oUlplay img").hide();
    $(".oUlplay img:first").show();
    $('.smalltitle ul li').click(function() {
        $(".oUlplay img").hide();
        var i = $(this).index();
        $('.smalltitle ul li').css('background-color', '#3e3e3e');
        $(this).css({ "background-color": "#B61B1F" });
        $(".oUlplay img").eq(i).fadeIn(1000);
    })
    var i = 0;
    var tab = function() {
        $(".oUlplay img").hide();
        $('.smalltitle ul li').css('background-color', '#3e3e3e');
        $('.smalltitle ul li:eq(' + i + ')').css({ "background-color": "#69aaec" });
        $(".oUlplay img").eq(i).fadeIn();
    }
    $('.next').click(function() {
        i++;
        if (i < 5) {
            tab();
        } else {
            i = -1;
        }
    });
    $('.pre').click(function() {
        i--;
        if (i > -1) {
            tab();
        } else {
            i = 5;
        }
    });
    var timer = setInterval(function() {
        i++;
        if (i < 5) {
            tab();
        } else {
            i = -1;
        }
    }, 1500);

    $("#playBox").mouseout(function(obj) {
        timer = setInterval(function() {
            i++;
            if (i < 5) {
                tab();
            } else {
                i = -1;
            }
        }, 1500);
    })
    $("#playBox").mouseover(function() {
        clearInterval(timer);
    });


    $(".floor1_navbar ul li span").addClass("span_before");
    $(".floor1_tab .floor1_tab_content").hide();
    $(".floor1_tab .floor1_tab_content").eq(0).show();
    $(".floor1_navbar ul li").addClass('li_before');
    $(".floor1_navbar ul li:first").addClass('li_active');
    $(".floor1_navbar ul li span:last").css({ 'border': "none" });
    $(".floor1_navbar ul li span:first").addClass('span_active');
    $(".floor1_navbar ul li").mouseover(function() {
        $('.floor1_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor1_navbar ul li span").removeClass("span_active");
        $(".floor1_tab .floor1_tab_content").hide();
        $(".floor1_tab .floor1_tab_content").eq(i).show();
        $(".floor1_tab .floor1_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })



    $(".floor2_navbar ul li span").addClass("span_before");
    $(".floor2_tab .floor2_tab_content").hide();
    $(".floor2_tab .floor2_tab_content").eq(0).show();
    $(".floor2_navbar ul li").addClass('li_before');
    $(".floor2_navbar ul li:first").addClass('li_active');
    $(".floor2_navbar ul li span:last").css({ 'border': "none" });
    $(".floor2_navbar ul li span:first").addClass('span_active');
    $(".floor2_navbar ul li").mouseover(function() {
        $('.floor2_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor2_navbar ul li span").removeClass("span_active");
        $(".floor2_tab .floor2_tab_content").hide();
        $(".floor2_tab .floor2_tab_content").eq(i).show();
        $(".floor2_tab .floor2_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor3_navbar ul li span").addClass("span_before");
    $(".floor3_tab .floor3_tab_content").hide();
    $(".floor3_tab .floor3_tab_content").eq(0).show();
    $(".floor3_navbar ul li").addClass('li_before');
    $(".floor3_navbar ul li:first").addClass('li_active');
    $(".floor3_navbar ul li span:last").css({ 'border': "none" });
    $(".floor3_navbar ul li span:first").addClass('span_active');
    $(".floor3_navbar ul li").mouseover(function() {
        $('.floor3_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor3_navbar ul li span").removeClass("span_active");
        $(".floor3_tab .floor3_tab_content").hide();
        $(".floor3_tab .floor3_tab_content").eq(i).show();
        $(".floor3_tab .floor3_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor4_navbar ul li span").addClass("span_before");
    $(".floor4_tab .floor4_tab_content").hide();
    $(".floor4_tab .floor4_tab_content").eq(0).show();
    $(".floor4_navbar ul li").addClass('li_before');
    $(".floor4_navbar ul li:first").addClass('li_active');
    $(".floor4_navbar ul li span:last").css({ 'border': "none" });
    $(".floor4_navbar ul li span:first").addClass('span_active');
    $(".floor4_navbar ul li").mouseover(function() {
        $('.floor4_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor4_navbar ul li span").removeClass("span_active");
        $(".floor4_tab .floor4_tab_content").hide();
        $(".floor4_tab .floor4_tab_content").eq(i).show();
        $(".floor4_tab .floor4_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor5_navbar ul li span").addClass("span_before");
    $(".floor5_tab .floor5_tab_content").hide();
    $(".floor5_tab .floor5_tab_content").eq(0).show();
    $(".floor5_navbar ul li").addClass('li_before');
    $(".floor5_navbar ul li:first").addClass('li_active');
    $(".floor5_navbar ul li span:last").css({ 'border': "none" });
    $(".floor5_navbar ul li span:first").addClass('span_active');
    $(".floor5_navbar ul li").mouseover(function() {
        $('.floor5_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor5_navbar ul li span").removeClass("span_active");
        $(".floor5_tab .floor5_tab_content").hide();
        $(".floor5_tab .floor5_tab_content").eq(i).show();
        $(".floor5_tab .floor5_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })


    $(".floor6_navbar ul li span").addClass("span_before");
    $(".floor6_tab .floor6_tab_content").hide();
    $(".floor6_tab .floor6_tab_content").eq(0).show();
    $(".floor6_navbar ul li").addClass('li_before');
    $(".floor6_navbar ul li:first").addClass('li_active');
    $(".floor6_navbar ul li span:last").css({ 'border': "none" });
    $(".floor6_navbar ul li span:first").addClass('span_active');
    $(".floor6_navbar ul li").mouseover(function() {
        $('.floor6_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor6_navbar ul li span").removeClass("span_active");
        $(".floor6_tab .floor6_tab_content").hide();
        $(".floor6_tab .floor6_tab_content").eq(i).show();
        $(".floor6_tab .floor6_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor7_navbar ul li span").addClass("span_before");
    $(".floor7_tab .floor7_tab_content").hide();
    $(".floor7_tab .floor7_tab_content").eq(0).show();
    $(".floor7_navbar ul li").addClass('li_before');
    $(".floor7_navbar ul li:first").addClass('li_active');
    $(".floor7_navbar ul li span:last").css({ 'border': "none" });
    $(".floor7_navbar ul li span:first").addClass('span_active');
    $(".floor7_navbar ul li").mouseover(function() {
        $('.floor7_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor7_navbar ul li span").removeClass("span_active");
        $(".floor7_tab .floor7_tab_content").hide();
        $(".floor7_tab .floor7_tab_content").eq(i).show();
        $(".floor7_tab .floor7_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor8_navbar ul li span").addClass("span_before");
    $(".floor8_tab .floor8_tab_content").hide();
    $(".floor8_tab .floor8_tab_content").eq(0).show();
    $(".floor8_navbar ul li").addClass('li_before');
    $(".floor8_navbar ul li:first").addClass('li_active');
    $(".floor8_navbar ul li span:last").css({ 'border': "none" });
    $(".floor8_navbar ul li span:first").addClass('span_active');
    $(".floor8_navbar ul li").mouseover(function() {
        $('.floor8_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor8_navbar ul li span").removeClass("span_active");
        $(".floor8_tab .floor8_tab_content").hide();
        $(".floor8_tab .floor8_tab_content").eq(i).show();
        $(".floor8_tab .floor8_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor9_navbar ul li span").addClass("span_before");
    $(".floor9_tab .floor9_tab_content").hide();
    $(".floor9_tab .floor9_tab_content").eq(0).show();
    $(".floor9_navbar ul li").addClass('li_before');
    $(".floor9_navbar ul li:first").addClass('li_active');
    $(".floor9_navbar ul li span:last").css({ 'border': "none" });
    $(".floor9_navbar ul li span:first").addClass('span_active');
    $(".floor9_navbar ul li").mouseover(function() {
        $('.floor9_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor9_navbar ul li span").removeClass("span_active");
        $(".floor9_tab .floor9_tab_content").hide();
        $(".floor9_tab .floor9_tab_content").eq(i).show();
        $(".floor9_tab .floor9_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $(".floor10_navbar ul li span").addClass("span_before");
    $(".floor10_tab .floor10_tab_content").hide();
    $(".floor10_tab .floor10_tab_content").eq(0).show();
    $(".floor10_navbar ul li").addClass('li_before');
    $(".floor10_navbar ul li:first").addClass('li_active');
    $(".floor10_navbar ul li span:last").css({ 'border': "none" });
    $(".floor10_navbar ul li span:first").addClass('span_active');
    $(".floor10_navbar ul li").mouseover(function() {
        $('.floor10_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor10_navbar ul li span").removeClass("span_active");
        $(".floor10_tab .floor10_tab_content").hide();
        $(".floor10_tab .floor10_tab_content").eq(i).show();
        $(".floor10_tab .floor10_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })


    $(".floor11_navbar ul li span").addClass("span_before");
    $(".floor11_tab .floor11_tab_content").hide();
    $(".floor11_tab .floor11_tab_content").eq(0).show();
    $(".floor11_navbar ul li").addClass('li_before');
    $(".floor11_navbar ul li:first").addClass('li_active');
    $(".floor11_navbar ul li span:last").css({ 'border': "none" });
    $(".floor11_navbar ul li span:first").addClass('span_active');
    $(".floor11_navbar ul li").mouseover(function() {
        $('.floor11_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor11_navbar ul li span").removeClass("span_active");
        $(".floor11_tab .floor11_tab_content").hide();
        $(".floor11_tab .floor11_tab_content").eq(i).show();
        $(".floor11_tab .floor11_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })


    $(".floor12_navbar ul li span").addClass("span_before");
    $(".floor12_tab .floor12_tab_content").hide();
    $(".floor12_tab .floor12_tab_content").eq(0).show();
    $(".floor12_navbar ul li").addClass('li_before');
    $(".floor12_navbar ul li:first").addClass('li_active');
    $(".floor12_navbar ul li span:last").css({ 'border': "none" });
    $(".floor12_navbar ul li span:first").addClass('span_active');
    $(".floor12_navbar ul li").mouseover(function() {
        $('.floor12_navbar ul li').removeClass('li_active')
        var i = $(this).index();
        $(this).addClass('li_active');
        $(".floor12_navbar ul li span").removeClass("span_active");
        $(".floor12_tab .floor12_tab_content").hide();
        $(".floor12_tab .floor12_tab_content").eq(i).show();
        $(".floor12_tab .floor12_navbar ul li span").eq(i).addClass("span_active");
        $(this).children().addClass("span_active");
        $(this).prev().children().addClass("span_active");
    })

    $("h3>span").addClass('floor_span_before')
    $(window).scroll(function() {
        var aa = $(document).scrollTop();
        console.log(aa);
        if (aa > 1300 && aa < 2000) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(0).addClass('fix_left_active');
            $(".fix_left li").eq(0).html('floor1');
            $("#floor1 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)
        } else {
            $("#floor1 h3>span").removeClass('floor_span_after');
            $(".fix_left li").eq(0).html('1F');
        }
        if (aa > 1800 && aa < 2700) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(1).addClass('fix_left_active');
            $(".fix_left li").eq(1).html('floor2');
            $("#floor2 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor2 h3>span").removeClass('floor_span_after');
            $(".fix_left li").eq(1).html('2F');
        }
        if (aa > 2700 && aa < 3300) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(2).addClass('fix_left_active')
            $(".fix_left li").eq(2).html('floor3');
            $("#floor3 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor3 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(2).html('3F');
        }
        if (aa > 3300 && aa < 3900) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(3).addClass('fix_left_active')
            $(".fix_left li").eq(3).html('floor4');
            $("#floor4 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor4 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(3).html('4F');
        }
        if (aa > 3900 && aa < 4550) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(4).addClass('fix_left_active')
            $(".fix_left li").eq(4).html('floor5');
            $("#floor5 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor5 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(4).html('5F');
        }
        if (aa > 4550 && aa < 5200) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(5).addClass('fix_left_active')
            $(".fix_left li").eq(5).html('floor6');
            $("#floor6 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor6 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(5).html('6F');
        }
        if (aa > 5200 && aa < 5800) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(6).addClass('fix_left_active')
            $(".fix_left li").eq(6).html('floor7');
            $("#floor7 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor7 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(6).html('7F');
        }
        if (aa > 5800 && aa < 6400) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(7).addClass('fix_left_active')
            $(".fix_left li").eq(7).html('floor8');
            $("#floor8 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor8 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(7).html('8F');
        }
        if (aa > 6400 && aa < 7200) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(8).addClass('fix_left_active')
            $(".fix_left li").eq(8).html('floor9');
            $("#floor9 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor9 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(8).html('9F');
        }
        if (aa > 7200 && aa < 7800) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(9).addClass('fix_left_active')
            $(".fix_left li").eq(9).html('floor10');
            $("#floor10 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor10 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(9).html('10F');
        }
        if (aa > 7800 && aa < 8300) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(10).addClass('fix_left_active')
            $(".fix_left li").eq(10).html('floor11');
            $("#floor11 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor11 h3>span").removeClass('floor_span_after');

            $(".fix_left li").eq(10).html('11F');
        }
        if (aa > 8300 && aa < 9000) {
            $(".fix_left li").removeClass('fix_left_active');
            $(".fix_left li").eq(11).addClass('fix_left_active')
            $(".fix_left li").eq(11).html('floor12');
            $("#floor12 h3>span").addClass('floor_span_after').animate({ "height": "35px" }, 1000)

        } else {
            $("#floor12 h3>span").removeClass('floor_span_after');
            $(".fix_left li").eq(11).html('12F');
        }

        if (aa > 9000 || aa < 1300) {
            $("h3>span").removeClass('floor_span_before');
            $(".fix_left li").removeClass('fix_left_active');
        }

    })

})
