require(['scripts/config.js'], function () { //加载配置文件
    require(["jquery", "list", "navtab", "searchhot","cutout","listnum"],
        function ($, lists, navs, search,cutouts,listn) {
            //商品左侧     
            $(".lists").cul();

            //头部下拉菜单
            $(".fr").nav();

            //导航商品下拉菜单
            $("#booksort").nav();

            //调热搜索接口
            search.init($("#searchHot"), "http://www.sfbest.com/ajax/getWordAll/?callback=?");
            
            //展开收起
            $(".salesRank > .attr").cut();
            
            //加载商品数据
            listn.init($("#listsnum"));


        })
})