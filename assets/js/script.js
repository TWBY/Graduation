
var vm1  = new Vue({
    el: "#intro",
    data: {
       
    },
    methods:{     
        scroll : function (){               
            $('html, body').animate({
                scrollTop: $('.page').offset().top
            }, 1000);
                      
        },            
    }

    
});



var vm2  = new Vue({
    el: "#v-for-object",
    data: {
        courses: "",
        Compulsory: "",
        DesignGroupCompulsory: "",
        TechnologyCompulsory: "",
        Elective: "",
        DesignElective: "",
        TechnologyElective: "",


        checked : true,
       
    },
    created(){  
        var now = this;
        axios.get('assets/js/allClass.json').then(function(val){
               now.courses = val.data;
               now.Compulsory = now.courses.Compulsory;
               now.DesignGroupCompulsory = now.courses.DesignGroupCompulsory;
               now.TechnologyCompulsory = now.courses.TechnologyCompulsory;
               now.Elective = now.courses.Elective;
               now.DesignElective = now.courses.DesignElective;
               now.TechnologyElective = now.courses.TechnologyElective;
               
        })
        
<<<<<<< HEAD
   
        //新增vue物件
        var vm1 = new Vue({
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
         });

        var vm2 = new Vue({
            el: '#app2',
            data: {
                message: 'hello',
                radio: '',
                firstName: '',
                lastName: '',
                fullName: '',
                compufullName: ''
            },

            computed:{
                reversemessage: function(){
                    return this.message.split('').reverse().join('');
                },
                comfullName: function(){
                    this.compufullName =  this.firstName + this.lastName;
                    return this.compufullName;
                }
            },
            
            watch:{
                firstName: function(val){
                    this.fullName = val + this.lastName;
                },
                // lastName: function(val){
                //     this.fullName = this.firstName + val;
                // }
            }
            

        });

        console.log(vm2.reversemessage);
         
    });
       
=======
    },

    computed: {

        //篩選已經修過課
        filteredCompulsoryCourses() {
            return this.check(this.Compulsory);           
        },
        filteredDesignGroupCompulsoryCourses() {
            return this.check(this.DesignGroupCompulsory);             
        },
        filteredTechnologyCompulsoryCourses() {
            return this.check(this.TechnologyCompulsory);            
        },
        filteredElectiveCourses() {
            return this.check(this.Elective);            
        },       
        filteredDesignElectiveCourses() {
            return this.check(this.DesignElective);            
        },       
        filteredTechnologyElectiveCourses() {
            return this.check(this.TechnologyElective);            
        }     
       
    },


    methods:{
        //----------------------------------------------
        check: function(category){
            if(this.checked){
                return category;
            }else{
                return category.filter(d => d.active == false);
            } 
        },

        //變更是否已經通過
        toggle: function(s){
            s.active = !s.active;

        },
        button_toggle: function(){
            this.checked = !this.checked;
        },


        //已通過的學分數
        categoryPassCredit: function(category){
            var passtotal = 0;
            category.forEach(function (s) {
                if (s.active) {
                passtotal += s.credit;
                }
            });
            return passtotal;
        },
        //-----------------------------------------------------------------------------------
        //各類已拿到學分數總和
        getTotalCredit: function(){
            let total = 0;
            total += this.getCompulsoryCredit();
            total += this.getDesignGroupCompulsoryCredit();
            total += this.getTechnologyCompulsoryCredit();
            total += this.getElectiveCredit();
            total += this.getDesignElectiveCredit();
            total += this.getTechnologyElectiveCredit();
            
            return total;
        },

        //選修總和
        getDesignCredit: function(){                
            let total = 0;          
            total += this.getDesignGroupCompulsoryCredit();         
            total += this.getDesignElectiveCredit();
                   
            return total;
        },
        getTechnologyCredit: function(){                
            let total = 0;       
            total += this.getElectiveCredit();        
            total += this.getTechnologyElectiveCredit();
            
            return total;
        },

        //各類已拿到學分數
        getCompulsoryCredit: function(){                             
            return this.categoryPassCredit(this.Compulsory);
        },
        getDesignGroupCompulsoryCredit: function(){                
            return this.categoryPassCredit(this.DesignGroupCompulsory);
        },
        getTechnologyCompulsoryCredit: function(){                
            return this.categoryPassCredit(this.TechnologyCompulsory);
        },
        getElectiveCredit: function(){                
            return this.categoryPassCredit(this.Elective);
        },
        getDesignElectiveCredit: function(){                
            return this.categoryPassCredit(this.DesignElective);
        },
        getTechnologyElectiveCredit: function(){                
            return this.categoryPassCredit(this.TechnologyElective);
        },
        
        

        //動態設置id
        gernerateCompulsoryId : function (index){
            return "Compulsory_" +　index    
        },
        gernerateDesignGroupCompulsoryId : function (index){
            return "DesignGroupCompulsory_" +　index         
        },
        gernerateTechnologyCompulsorysoryId : function (index){
            return "TechnologyCompulsory_" +　index         
        },
        gernerateElectivesoryId : function (index){
            return "Elective_" +　index         
        },
        gernerateDesignElectivesoryId : function (index){
            return "DesignElective_" +　index         
        },
        gernerateTechnologyElectivesoryId : function (index){
            return "TechnologyElective_" +　index         
        },

    
    }

    
>>>>>>> 12180928
});




//.showCredit
let height = window.innerHeight;
var basicScrollTop = function () {  

    // Reveal the button
    var CreditReveal = function () { 
    console.log(window.scrollY);
      if (window.scrollY >= height - height*0.2) {
        $(".showCredit").addClass("cansee");
      } else {
        $(".showCredit").removeClass("cansee");
      }    
    }  

    // Listeners
    // var Credit = document.querySelector('.showCredit');
    // Credit.addEventListener('scroll', CreditReveal);
    // $(".showCredit").on("scroll",CreditReveal());
    window.addEventListener('scroll', CreditReveal);

      
  };
basicScrollTop();
  

Vue.config.devtools = true;
