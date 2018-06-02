<template>
     <div class="box">
            <div class="photo">

            </div>

            <username
              top="3.9rem"
              placeholder="请输入用户名"
              type="text"
              icon="mui-icon-person"
              @getval="getval"
              prop="name"
            ></username>

            <username
                top="0.3rem"
                placeholder="请输入密码"
                type="password"
                icon="mui-icon-locked"
                @getval="getval"
                prop="pass"
            ></username>
          <div class="btn" @click="submit">
              Login
          </div>
     </div>
</template>

<script>
    import username from "@/components/input.vue"
    export default {
        name: "login",
        components:{username},
        data(){
          return {

          }
        },
        methods:{
            getval(attr,name){
                this[attr]=name;
            },
            submit(){
                console.log(this.name);
                console.log(this.pass);
                var params="name="+this.name+"&pass="+this.pass
                fetch("/api/ctl/login?"+params).then(function (e) {
                    return e.json()
                }).then((e)=>{
                     sessionStorage.teachLogin=JSON.stringify(e);
                     this.$router.push("/")

                })
            }
        }
    }
</script>

<style scoped>


     .box{
         width:100vw;
         height:100vh;
         background: url("../assets/img/bg.jpg") center no-repeat;
         background-size: cover;
         float:left;
     }
     .mui-icon{
         color:#fff;
     }
    .photo{
        width:1.2rem;height:1.2rem;
        border:3px solid #fff;
        margin:auto;
        border-radius: 50%;
        position: relative;
        margin-top:2.35rem;
    }


    .btn{
        width:5.65rem;
        height:0.88rem;
        margin:auto;
        margin-top:0.3rem;
        border-radius: 0.2rem;
        text-align: center;
        line-height: 0.88rem;
        color:#fff;
        background:#ff2672 ;
    }
     .btn:active{
         box-shadow: 0 0 5px #000;
     }

</style>