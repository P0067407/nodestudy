;(function() {
    "use strict";

    require.config({
        baseUrl:"../../js/",
        paths:{
            vue:"libs/vue",
            http:"libs/http",
            axios:"libs/axios",
            ELEMENT:"libs/elm-2.1.0",
        }
    }); 

    require(["vue" , "ELEMENT" , "http"] , function (Vue , ELEMENT , http) {
        ELEMENT.install(Vue);
        window.vm = new Vue({
            el:"#app",
            data:{
                menus:[],
                themeColor:"#2e323d"
            },
            created:function () {
                this.$on("onglobalsearch" , result => {
                    this.$message("当前页面监听到全局搜索事件:"+result.value);
                });
            },
            mounted:function () {
              
            }
        })
    });

})()