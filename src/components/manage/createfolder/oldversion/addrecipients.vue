            <template>
            
                <div>

                    <div class="container set-middle">                                                     
                    <!-- <local_header></local_header> -->
                    
                    <newrecipient @recipienteadded="newRecipient" ></newrecipient>
                    <recipientgrid :quotes="quotes" @recipientdeleted='Remove()'></recipientgrid>

                    <folder></folder>

                </div>
                </div>
            </template>

            <script>

            import {mapActions} from 'vuex'
            import recipientgrid from './receipientgrid.vue'
            import newrecipient from './NewRecipient.vue'
            import folder from '../createfolderold.vue'
            
            // import head_head from '../header/header.vue'
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
                // head_head,
                recipientgrid,
                newrecipient,
                folder
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

                recipientdeleted(){}




            
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

            .set-recipient{
                padding: 30px;
            }


            </style>
