require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "fruit" ,"recommend","searchhot","needsBuy","tabs"/* ,"supperBanner","pop","goodslist","shopping" */ ], function ($, fruitL ,recom,search,needs,otab/* ,supperBanner,pop,goodslist,shop */ ) {
        /* $(".content").supperBanner({
            src:[
                "http://img.zcool.cn/community/013d825a56bdbea80120121fb8fed4.jpg@1380w",
                "http://img.zcool.cn/community/017ac55a55de01a80120121f0d0e19.jpg@1380w",
                "http://img.zcool.cn/community/01e91f5a56e35aa80120121fbbd853.jpg@1380w",
                "http://img.zcool.cn/community/01c4165a56e341a8012113c7c68c2e.jpg@1380w"
            ],
			autoplay:true
        });
        $('.login').on("click",function(){
            pop.init(`
                <div><p>dasdfadsfasfdasfda</p><div>
            `);
        });
        goodslist.init($(".goodslist li"));
        shop.init($(".goodslist li button")); */
        new fruitL().init($("#fruitList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&cId=7&floorId=297");
        new fruitL().init($("#meatList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=301");
        new fruitL().init($("#foodList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=357");
        new fruitL().init($("#grainList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=309");
        new fruitL().init($("#arderList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=173");
        new fruitL().init($("#teaList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=371");
        new fruitL().init($("#drinksList"), "http://www.sfbest.com/ajaxIndex/GetFloorGoods/?callback=?&floorId=169");

        new recom().init($("#recommendList"),"http://www.sfbest.com/ajaxIndex/GetGuessYouLikeProducts/?callback=?");
        search.init($("#searchHot"),"http://www.sfbest.com/ajax/getWordAll/?callback=?");
        needs.init($("#bbig"));
        otab.init("#booksort>li","#booksortr li");
    })
})