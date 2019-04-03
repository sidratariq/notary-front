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

    import authentication from './components/blankpage/waitingscreen'


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

    const inbox = resolve =>{
            require.ensure(['./components/manage/inbox/inbox.vue'],()=>{
                resolve(require('./components/manage/inbox/inbox.vue'));
            },'manage');
    };

    const sent = resolve =>{
        require.ensure(['./components/manage/sent/sent.vue'],()=>{
            resolve(require('./components/manage/sent/sent.vue'));
        },'manage');
    };

    const deletee = resolve =>{
        require.ensure(['./components/manage/inbox/delete.vue'],()=>{
            resolve(require('./components/manage/inbox/delete.vue'));
        },'manage');
    };

    const draft  = resolve =>{
        require.ensure(['./components/manage/draft/draft.vue'],()=>{
            resolve(require('./components/manage/draft/draft.vue'));
        },'manage');
    };


    export const routes = [
            // ********* tutorial********    
        {
            path:'/user',
            component: User,
        },

        {
            path:'/userhome',
            component:userhome
        },

        {
            path:'/authentication',
            component:authentication
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
                // {path:'',name:'inbox',component: inbox},
                //   {path:'/detail/:id',component:detail },
                // {   path:'/sent',component: sent},        
                // {   path:'/delete', component: deletee },         
                // {   path:'/draft',component: draft,  },      
                // {   path:'/home:id', component: home,  },
                // {
                //     path:'/actionrequired',
                //     component:actionrequired
                // },
                // {
                    // path:'/completed',
                    // component:completed
                // },
                // {
                    // path:'/expiringsoon',
                    // component:expiringsoon
                // },
                // {
                    // path:'/waitingforother',
                    // component:waitingforother
                // }
                ]
                },   

                {
                    path:'/login',
                    component:login, 
                },{
                    // path:'/verify/:email',
                    path:'/verify',
                    component:verify
                },


        {
            path:'/signup',
            component:signup,
        
        },
    
        {
            path:'/template',
            component: template
        },

        {
            path:'/redirect-me',
            redirect:'/login'
        },
        {
            path:'*',
            redirect:'/login'
        },

        {
            path:'/forget',
            component:forget,
            name:forget
        },

        {
            path:'/adddocs',
            component:adddocs,
            name:adddocs

        },

        {
            path:'/commingsoon',
            component:commingsoon,
            name:commingsoon
        },

        {  
            path:'/detail/:id',
            component:detail
        },
        
        {
            path:'/userpreferences',
            component:userpreferences
        },

        {
            path:'/addrecipient',
            component:addrecipient
        },

        {
            path:'/playground',
            component:playground
        },

        {
            path:'/testing',
            component:testing
        }
    ];
