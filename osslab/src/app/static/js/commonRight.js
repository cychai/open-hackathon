
        $(function(){
            //daoJiShi();
            var endDate=new Date(2014,11,17,18,00,00);//年月日时分秒，月要减去1
	        $('#timer').flipcountdown({size:"sm",
                tick:function(){
                    var nol = function(h){
                        return h>9?h:'0'+h;
                    }
                    var now=new Date();
                    var oft=Math.round((endDate-now)/1000);
                    var ofd=parseInt(oft/3600/24);
                    var ofh=parseInt((oft%(3600*24))/3600);
                    var ofm=parseInt((oft%3600)/60);
                    var ofs=oft%60;
                    return nol(ofd)+' '+nol(ofh)+' '+nol(ofm)+' '+nol(ofs);
                }
			});

            $("#logout p").click(function() {
                window.location.href="/logout";
            })
        })