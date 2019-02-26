        <template>
            <div>

                <div class="row" >
                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12" >
                    
                    </div>
                    <div  class="col-md-4 col-lg-4 col-sm-4 col-xs-12 text-center" >
                    
                    <transition  name="fade">
                    <div class="alert alert-info" transition="expand">Account created sucessfully</div>
                    </transition>

                    <img src="../../assets/icons/esnotary.png" >
                    
                    <h3>Verify your code</h3>

                    <p> Please enter the verification code sent at {{email}} <br> </p>

                    <form @submit.prevent="">


                        <input  class=" form-control globalwidth" v-model="verify_code" style="margin-left:15%" type="text"  placeholder="Enter Verfication code ">

                        <button @click.prevent="submit" class="bbutton globalwidth">Confirm</button>
                        
                    </form>
                    
                    <hr>
                
                    <div>
                        <button class="btn btn-link" @click="resendcode" >Resend Code</button>

                    </div>
                    </div>

                    <div  class="col-md-4 col-lg-4 col-sm-6 col-xs-12">


                    </div>


                </div>
                </div>
        </template>


        <script>
        export default {
        data:function(){
            return{
                // email:this.$route.params.email,
                email:localStorage.getItem('email'),
                show: false,
                verify_code:'',
                email:this.$route.params.email,
                show:false
            }
        },
        methods:{
            
            resendcode:function(){
                this.show = !this.show;
                setTimeout(() =>{
                    this.show = !this.show;
                },5000) 

            },

            submit(){
                 this.$http.post('http://192.168.10.7:8000/verifyEmail', {
                     "email":this.email,
                     "VerificationCode":this.verify_code
                })
            .then(response => {
                if(response.status ==200){
                    
                    this.show = true;
                    this.$router.push('/login')
                    console.log(response)
                }
                },
            error => {
                console.log(error);
                // console.log(response.bodyText)
            });
            } 
        
        },
        computed:{
            div_show:function(){
                return this.show
            }
        }
        }
        </script>

        <style scoped>
        *{
            background-color: white;
            /* border: 1px solid black; */

        }

        .text-center{
            /* height: 100vh; */
            padding-top: 4%;

        }
            
            .bbutton{
            background-color:  #ffc820;
            color: #333;
            font-family: "Maven Pro","Helvetica Neue","HelveticaNeue",Helvetica,Arial,sans-serif;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: .66px;
            line-height: 20px;
            text-decoration: none;
            text-transform: uppercase;
            padding: 6px 18px;
            border:none;
            }

            .globalwidth{
                width: 70%;
                margin: 2%;
            }

            .fade-enter{
                opacity: 0;
            }

            .fade-enter-active{
                transition: opacity 1s;
            }

            .fade-leave-active{
                transition: opacity 1s ;
                opacity: 0;
            }
        </style>
