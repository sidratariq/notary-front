        <template>
        
            <div>
              
                <head_head></head_head>
                


            </div>

        </template>

        <script>

        import {mapActions} from 'vuex'

        
        import head_head from '../header/header.vue'

        export default {

        data(){
            return{
                file:{
                    name:'',
                    filesrc:''
                },
                fileavalible:this.$store.getters.getavalible,
                noofdocs:[
                
                ]
            }
        },

        components:{
            head_head,
        },

        props:{
            
        },
        
        methods:{

        
        },
        computed:{
            
        }
        }
        </script>

        <style scoped>
        *{
                    background-color: rgb(244, 244, 244);

        }

        </style>
