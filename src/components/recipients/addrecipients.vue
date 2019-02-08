            <template>
            
                <div>
                    <head_head></head_head>

                    <div class="container set-middle">

                    <h2 class="set-recipient">Add Recipients</h2>

                   <logicayee :no_of_recipient="no_of_recipient" :index='index'
                     v-for="(key,index) in quotes" :key="index"
                    

                    @DeleteRecipient='Remove()'
                    
                    > i am key{{key}} ******
                    i am value{{index}}</logicayee>


                     <div class="btn btn-primary" @click="newRecipient()">
                                    create one more
                    </div>
                    
                    <!-- <local_header></local_header> -->
                    
                    <!-- <newrecipient @recipienteadded="newRecipient" ></newrecipient> -->
                    <!-- <recipientgrid :quotes="quotes" @recipientdeleted='recipientdeleted'></recipientgrid> -->

                 

                </div>
                </div>
            </template>

            <script>

            import {mapActions} from 'vuex'
            import recipientgrid from './receipientgrid.vue'
            import newrecipient from './NewRecipient.vue'
            import logicayee from './incrediable.vue'
            
            import head_head from '../header/header.vue'
            // import local_header from './header.vue'

            export default {

            data(){
                return{
                maxQuotes:10,
                quotes:['Just a quote'],
                recipeint:[{name:'',email:''}],
                

                }
            },

            components:{
                head_head,
                recipientgrid,
                newrecipient,
                logicayee
                // local_header
            },

            props:{
                
            },
            
            methods:{

                newRecipient(recipeint){
                    this.quotes.push(recipeint)

                },
                
                Remove(index){
                    if(this.quotes.length>1){
                        this.quotes.splice(index,1);
                    }
                    else{
                        alert("you need to have atleast one recipient")
                    }
                },




            
            },
            computed:{
                no_of_recipient:function(){
                    return this.recipeint.length
                }
            }
            }
            </script>

            <style scoped>

            *{
                        background-color: rgb(244, 244, 244);
            }

            .container{
                background-color: pink;
            }

            .set-middle{
                /* margin-right: 150px; */
                margin-left: 210px;
            }

            .set-recipient{
                padding: 30px;
            }


            </style>
