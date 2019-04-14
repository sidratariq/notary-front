    /* eslint-disable */
    import manage_inbox from './components/manage/manage_inbox.vue'
    import login from './components/auth/startapp.vue'
    import template from './components/template/template.vue'
    import forget from './components/auth/forget.vue'
    import signup from './components/auth/signup.vue'
    import userpreferences from './components/auth/userpreferences.vue'
    import verify from './components/auth/verficationscreen.vue'
    import playground from './components/playground/playground'
    import testing from './components/testing/testing'
    // import newpassword from './components/auth/newpassword.vue'
    import suckyground from './components/suckyground.vue'
    import authentication from './components/blankpage/waitingscreen'
    import  temporary from './components/temporary.vue'
    import  extra from './components/extra.vue'



    // ******* learning routes ************///
    import User from './components/template/user/User.vue'
    import userhome from './components/template/Home.vue'
    
    // ******* learning routes ************///
    import adddocs from './components/Add_docs/adddocs.vue'
    import commingsoon from './components/commingsoon/comming.vue'
    import detail from './components/viewfile/detail.vue'



    // make a bundle of dashoard
    import dashboard from './components/dashboard/dashboard.vue'
    import addrecipient from './components/recipients/AddRecipient.vue'


    export const routes = [
        {
            path:'/extra',
            component:extra,
            name:'extra'
        },
        {
            path:'/temprary',
            component:temporary,
            name:'temporary'
        },
        {   
            path:'/suckyground',
            component:suckyground,
            name:'suckyground'
        },
            // ********* tutorial********    
        {
            path:'/user',
            component: User,
            name:'User'
        },

        {
            path:'/userhome',
            component:userhome,
            name:'userhome'
        },

        {
            path:'/authentication',
            component:authentication,
            name:'authentication'
        },
            // **** dashboard route set****//
            {
                path:'/dashboard',
                component:dashboard,
                name:dashboard
            },
            
            //*** manage routes with child and parents ***/
            {path:'/manage',
            component: manage_inbox,
            name:'manage',
            children:[
              
                ]
                },   

                {
                    path:'/login',
                    component:login,
                    name:'login' 
                },
                {
                    // path:'/verify/:email',
                    path:'/verify',
                    component:verify,
                    name:'verify',
                    beforeEnter:(to,from,next)=>{
                        // if(to.name == '/signup'){
                        //     console.log(Object.keys(to)+'to');
                        //     console.log(Object.keys(from)+'from');
                        //  //    console.log(next+'next');
                        //     next(true)
                        // }
                        console.log(from)
                        // console.log(Object.entries(to))
                        next()

                    }
                },


        {
            path:'/signup',
            component:signup,
            name:'signup'
        
        },
    
        {
            path:'/template',
            component: template,
            name:'template'
        },

        {
            path:'/redirect-me',
            redirect:'/login'
        },
        {
            path:'*',
            redirect:'/login',

        },

        {
            path:'/forget',
            component:forget,
            name:forget,

        },

        {
            path:'/adddocs',
            component:adddocs,
            name:'adddocs',
        },

        {
            path:'/commingsoon',
            component:commingsoon,
            name:'commingsoon'
        },

        {  
            path:'/detail/:id',
            component:detail,
            name:'detail'
        },
        
        {
            path:'/userpreferences',
            component:userpreferences
        },

        {
            path:'/addrecipient',
            component:addrecipient,
            name:'addrecipient'
        },

        {
            path:'/playground',
            component:playground,
            name:'playground'
        },

        {
            path:'/testing',
            component:testing,
            name:'testing'
        }
    ];
