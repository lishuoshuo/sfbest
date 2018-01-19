require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "fruit" ,"recommend","searchhot","needsBuy"/* ,"tabs" */,"navtab","supperBanner","timeMeter","countdown"/* ,"pop","goodslist","shopping" */ ], 
    function ($, fruitL ,recom,search,needs/* ,otab */,navbtn,supperBanner,times,counts/* ,supperBanner,pop,goodslist,shop */ ) {
         $(".lside").supperBanner({
            src:[
                "http://img.zcool.cn/community/013d825a56bdbea80120121fb8fed4.jpg@1380w",
                "http://img.zcool.cn/community/017ac55a55de01a80120121f0d0e19.jpg@1380w",
                "http://img.zcool.cn/community/01e91f5a56e35aa80120121fbbd853.jpg@1380w",
                "http://img.zcool.cn/community/01c4165a56e341a8012113c7c68c2e.jpg@1380w"
            ],
            autoplay:true,
            create_btn:true,
			movement_mode:"scroll",
			// /autoplay:false
        });
        /*$('.login').on("click",function(){
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
        //new otab().init("#booksort>li","#booksortr li");
        //new otab().init("#booksort>li","#booksortr>li");
        $(".fr").nav();
        $("#booksort").nav()
        times.init($("#timeLimit"));
        counts.init([02,59,52],["time1","time2","time3"]);
        $.getJSON("http://www.sfbest.com/ajax/GetHotSun/?callback=?",function(res){
           // console.log(res.data);
            $("#share").html(res.data);
        })
    })
})