import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Add from '@/components/Add'

import login from '@/components/login'
import selectUser from '@/components/selectUser'
import banner from '@/components/banner'
import selectOrder from '@/components/selectOrder'
import course from '@/components/course'
import userAudit from '@/components/userAudit'
import withDrawal from '@/components/withDrawal'
import comments from '@/components/comments'
import about from '@/components/about'
import selectShare from '@/components/selectShare'
import EditCourse from '@/components/course/EditCourse'
import AddCourse from '@/components/course/AddCourse'


Vue.use(Router)

var router= new Router({
  routes: [{
      path: "/login",
      component: login
  },
    {
      path: '/',
      component: Main,
        children:[
            {path: '/', component: Add},
            {path: '/selectUser', component: selectUser},
            {path: '/banner', component: banner},
            {path: '/selectOrder', component: selectOrder},
            {path: '/course',component: course},
            {path:'/EditCourse/:id', component:EditCourse},
            {path:'/AddCourse', component:AddCourse},
            {path: '/userAudit', component: userAudit},
            {path: '/withDrawal', component: withDrawal},
            {path: '/comments', component: comments},
            {path: '/about', component: about},
            {path:'/selectShare', component:selectShare}
        ]
    }
  ]
})
// router.beforeEach(function(to, from, next) {
//     function getCookie(name) {
//         let str = document.cookie;
//         let arr = str.split("; ");
//         arr.forEach(function(ele, index) {
//             let arr1 = ele.split("=");
//             if(arr1[0] == name) {
//                 name = arr1[1];
//             }
//         });
//         return unescape(name);
//     }
//     if(to.path == "/login") {
//         next();
//     } else {
//         if(getCookie("login") == "yes") {
//             next();
//         } else {
//             next("/login");
//         }
//     }
// })
export default router