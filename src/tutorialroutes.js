// routes tutorial
import User from './components/template/user/User.vue'
import userhome from './components/template/Home.vue'

export const tutorial = [

      // tutorial    
      {
        path:'/user',
        component: User,

    },
    
    {
        path:'/userhome',
        component:userhome
    },
       
];
