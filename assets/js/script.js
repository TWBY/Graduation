

$(document).ready(function () { 

    //存取外部json 並列印出來
    $.getJSON("assets/js/allClass.json", function(json) {
        //接入資料放進變數data
        let data = json;
    
        //計算總學分數
        function countCredit(){
            let credit = 0
            for(let i=0; i<data.length; i++){
                credit += data[i].credit
            }
            return credit;
        }

        var totalCredit  =  countCredit();

        // 箭頭函式(Arrow Functions)
        // const add = function(x,y){
        //     return x+y;
        // }
        // param => expression
        // const add = (x,y) => x*y;
        // console.log(add(6,7));

        // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        // const all  = words.filter(word => word.length>6);
        // console.log(all);
        
   
        //新增vue物件
        new Vue({
            el: '#v-for-object',
            data: {
                courses: data,
                score: 0,
                totalCredit: totalCredit,
                checked : true,
                
            },
            
            methods: {

                button_toggle: function(){
                    this.checked = !this.checked;
                },

                toggle: function(s){
                    s.active = !s.active;
                },
           
                total: function(){
                    var total = 0;
                    this.courses.forEach(function (s) {
                      if (s.active) {
                        total += s.credit;
                      }
                    });
                    this.score = total;
                    return total;
                }    
            },
            computed: {
                filteredCourses() {
                  return this.checked ? this.courses : this.courses.filter(d => d.active == false);
                }
            }
         })



          


            
    });
       
});
