
            <template>
                <div class="component">

                     <div class="small">
                  Small Viewport
                 </div>
                
                <div class="medium">
                        Medium Viewport
                </div>
                <div class="large">
                Large Viewport
                </div>

                <div class="drmiyanwlaa">
                    drmiyan wlaa
                </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6">
                            <h1 >Vuex</h1>
                            <app-result ></app-result>

                            <AnotherResult></AnotherResult>
                            <hr>
                            <app-counter></app-counter>
                            
                            <hr>

                            <anothercounter></anothercounter>

                            <hr>
                            <!-- <input type="text"   v-model="value" > -->
                            <!-- <p>{{value}}</p> -->
                        </div>

                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6">
                            <h1> HTTP request</h1>

                            <div class="form-group">
                                <label for="">username</label>
                                <input type="text" v-model="username" class="form-control">
                                <p>{{"username is" + username}}</p>
                            </div>

                            <div class="form-group">
                                <label for="">email address</label>
                                <input type="email" v-model="value" class="form-control">
                                <p>{{"email" + value}}</p>
                            </div>
                            
                           <button class="btn-btn-primary" @click="submit">
                               submit
                           </button>

                           <hr>

                           <button class="btn btn-primary" @click="fetchdata">
                               Getdata
                           </button>
                            
                            <ul class="list-group">
                                <li class="list-group-item" v-for="(key,index) in users" :key="index"> {{index.username}}{{index.email}}</li>

                            </ul>

                        </div>
                    </div>
                </div>

                <blaa></blaa>

             

                </div>
            </template>

            <script>
                import Counter from './Counter.vue';
                import anothercounter from './anothercounter.vue'
                import Result from './Result.vue';
                import AnotherResult from './AnotherResult.vue'
                import blaa from '../manage/createfolder/oldversion/addrecipients.vue'

                export default {

                    components: {
                        appCounter: Counter,
                        appResult: Result,
                        AnotherResult,
                        anothercounter,
                        blaa,
                    },

                    data(){
                        return{
                            name:'Max',
                            age:27,
                            counter: 0,
                            users:[]
                        }
                    },

                    methods:{
                        
                            submit(){
                                this.$http.post('http://192.168.0.166:8000/login', {"email": this.$store.getters.username,
                                    "password":this.$store.getters.value })
                                .then(response => {
                                    console.log(response)},
                                error => {
                                    console.log(error);
                                });

                            },

                            fetchdata(){
                                this.$http.get('')
                                .then(response => {
                                   return response.json();
                                }).then(data => 
                                {
                                    const resultarray = [];
                                    for (let key in data){
                                        resultarray.push(data[key])
                                    }

                                    this.users = resultarray;  
                                }
                                );                           
                                 }
                
                    },

                    computed:{

                        value:{
                            get(){
                            return  this.$store.getters.value;
                            },

                            set(value){
                            this.$store.dispatch('updatevalue',value)

                            }
                        },

                        username:{
                            get(){
                            
                            return this.$store.getters.username;                           
                            },
                            set(value){
                            this.$store.dispatch('setusername',value)

                            }
                        }

                    }
                }
            </script>

            <style scoped>
            
            @media only screen and (max-width: 948px) {
                .medium, .large {
                    display:none;
                }
            }

             @media only screen and (max-width: 520px) {
                 *{
                    background-color: red;        

                 }
             }

            </style>