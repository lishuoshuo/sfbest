define(["jquery"], function () {
    function Listnum() {

    }
    Listnum.prototype = {
        constructor: Listnum,
        init: function (ele) {
            this.ele = ele;
            var listnums = {
                url: "scripts/listnum.json",
                type: "GET",
                context: this
            }
            $.ajax(listnums).then($.proxy(this.ListNum, this));
        },
        ListNum: function (res) {
            console.log(res[0].tag_img)
            var html = "";
            res.forEach(function (item) {
                html += '<li>'+
                '<div class="l-wrap">'+
                    '<div class="pic">'+
                        '<a href="##">'+
                            '<img src="'+item.tag_img+'" alt="">'+
                        '</a>'+
                    '</div>'+
                    '<div class="price">'+
                        '<span>￥</span>'+
                        '<strong>69.9</strong>'+
                    '</div>'+
                    '<p class="title-a">'+item.sfshipping1+'</p>'+
                    '<p class="title-b">'+item.ad_words+'</p>'+
                    '<div class="title-c"><a href="##">'+item.actTag+'</a></div>'+
                    '<div class="comment"><a href="##">'+item.evaluate+'</a><div class="comment-r">自营</div></div>'+
                    '<div class="action">'+
                        '<div class="p-num">'+
                            '<span class="p-reduce">-</span>'+
                            '<span class="numberInp">1</span>'+
                            '<span>+</span>'+
                        '</div>'+
                        '<div class="p-btn">'+
                            '<a href="##">加入购物车</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</li>'
            });
            this.ele.html(html);
        }
    }
    return new Listnum();
})