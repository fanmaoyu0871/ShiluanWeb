/**
 * Created by fanmaoyu on 2017/5/18.
 */
$(function(){
    var resize = function(){
        var box = $("#contant"),nav=$("#sl-nav"),right=$("#sl-right-box"),left=$("#sl-left-box");
        var h = $("body").height(),w = box.width()
        right.css({
            "width":(parseFloat(w)-parseFloat(left.width()))+"px"
        });
        box.css({
            "height":(parseFloat(h)-parseFloat(nav.height()))+"px"
        });
    }
    resize();
    $(window).resize(function () {
        resize();
    })
})

$(function () {
    var img_array = ['shouye_icon.png', 'shebeiguanli_icon.png', 'baojingguanli_icon.png', 'xitongguanli_icon.png', 'caiwuguanli_icon.png'];
    var img_select_array = ['shouye_select_icon.png', 'shebeiguanli_select_icon.png', 'baojingguanli_select_icon.png', 'xitongguanli_select_icon.png', 'caiwuguanli_select_icon.png'];
    var title_array = ['首页', '设备管理', '报警管理', '系统管理', '财务管理'];
    var ul = $(".sl-left-box ul");
    var pre_index = -1;
    img_array.map(function (item, index, arr) {
        var li = $("<li><a index=" + index + " href='#'>" + title_array[index] + "</a></li>");
        var url = "url('../image/" + img_array[index] + "') no-repeat center 20px";
        li.css({'background': url});
        ul.append(li);
    });

    $(".sl-left-box ul li a").click(function () {
        var index = parseInt($(this).attr('index'));
        if (pre_index == index) {
            return;
        } else {
            if (pre_index != -1) {
                var pre_url = "url('../image/" + img_array[pre_index] + "') no-repeat center 20px";
                $(".sl-left-box ul li a").eq(pre_index).css({
                    'background': pre_url,
                    'color': 'white',
                    'font-weight': '300'
                });
                $(".sl-left-box ul li a").eq(pre_index).parent('li').css({'background-color': 'transparent'});
            }

            pre_index = index;
        }

        var url = "url('../image/" + img_select_array[index] + "') no-repeat center 20px";
        var triangle_url = ", url('../image/triangle.png') no-repeat right -2px center";
        $(this).css({'background': url+triangle_url, 'color': '#8DD7F1', 'font-weight': '400'});
        $(this).parent('li').css({'background-color': 'black'});
    });

    $(".sl-left-box ul li a").eq(0).click();
});