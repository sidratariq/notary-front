/* eslint-disable */
import manage_inbox from './components/manage/manage_inbox.vue'
import home from './components/auth/start.vue'
import template from './components/template/template.vue'
import forget from './components/auth/forget.vue'
import signup from './components/auth/signup.vue'
import userpreferences from './components/auth/userpreferences.vue'

import adddocs from './components/Add_docs/adddocs.vue'
import commingsoon from './components/commingsoon/comming.vue'
import detail from './components/viewfile/detail.vue'
import actionrequired from './components/manage/Actionrequired/actionrequired.vue'
import completed from './components/manage/completed/completed.vue'
import expiringsoon from './components/manage/expiringsoon/expiringsoon.vue'
import waitingforother from './components/manage/waitingforother/waitingforother.vue'

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
    require.ensure(['./components/manage/delete/delete.vue'],()=>{
        resolve(require('./components/manage/delete/delete.vue'));
    },'manage');
};

const draft  = resolve =>{
    require.ensure(['./components/manage/draft/draft.vue'],()=>{
        resolve(require('./components/manage/draft/draft.vue'));
    },'manage');
};


export const routes = [

    
    {
        path:'/dashboard',
        component:dashboard,
        name:dashboard
    },

    {
        path:'/manage_inbox',
        component: manage_inbox,
        children:[
            {   path:'/inbox',name:'inbox',component: inbox
            
        },
            {   path:'/sent',component: sent},        
            {   path:'/delete', component: deletee },         
            {   path:'/draft',component: draft,  },      
            {   path:'/home:id', component: home,  },
            {
                path:'/actionrequired',
                component:actionrequired
            },
            {
                path:'/completed',
                component:completed
            },
            {
                path:'/expiringsoon',
                component:expiringsoon
            },
            {
                path:'/waitingforother',
                component:waitingforother
            }
        ]
    },   

    {
        path:'/home',
        component:home,
     
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
        redirect:'/home'
    },

    {
        path:'*',
        redirect:'/home'
    },

    {
        path:'/forget/:email',
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
    }
   



];
