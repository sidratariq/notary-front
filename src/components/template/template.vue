        <template>
            <div class="component">
                <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <h1 >Vuex</h1>
                        <app-result ></app-result>

                        <AnotherResult></AnotherResult>
                        <hr>
                        <app-counter></app-counter>
                        
                        <hr>

                        <anothercounter></anothercounter>

                        <input type="text" :value="value" @input="updatevalue" >
                        <p>{{value}}</p>


                    </div>
                </div>
            </div>

            </div>
        </template>

        <script>
            import UserDetail from './UserDetail.vue';
            import UserEdit from './UserEdit.vue';
            import Counter from './Counter.vue';
            import anothercounter from './anothercounter.vue'
            import Result from './Result.vue';
            import AnotherResult from './AnotherResult.vue'

            export default {

                   components: {
                    appUserDetail: UserDetail,
                    appUserEdit: UserEdit,
                    appCounter: Counter,
                    appResult: Result,
                    AnotherResult,
                    anothercounter
                },

                data(){
                    return{
                        name:'Max',
                        age:27,
                        counter: 0
                    }
                },

                methods:{
                
                 updatevalue(event){
                    this.$store.dispatch('updatevalue', event.target.value)

                }
                },

                computed:{
                    value(){
                        return this.$store.getters.value;
                    }
                }
              

        
             
            }
        </script>

        <style scoped>
        
        </style>