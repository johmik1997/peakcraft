
import {createRouter,createWebHistory} from "vue-router"
import Home from "../route/Home.vue"
import Aboutus from"../route/Aboutus.vue"
import Project from"../route/Project.vue"
import Event from "../route/Event.vue"
import Domain from "../route/Domain.vue"
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path:'/',
        name:'Home',
        component:Home
    },{
        path:'/about',
        name:'Aboutus',
        component:Aboutus
    },
    ,{
        path:'/project',
        name:'Project',
        component:Project
    },
    ,{
        path:'/event',
        name:'Event',
        component:Event
    },
    ,{
        path:'/domain',
        name:'Domain',
        component:Domain
    }
]
});
export default router;