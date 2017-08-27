import { Routes } from "@angular/router";

import { HomePage } from '../desktop/home/home';
import { TaskPage } from '../desktop/task/task';

import { ParameterPage } from '../system/parameter/parameter';
import { UserInfoPage } from '../system/userInfo/userInfo';
import { RolePage } from '../system/role/role';
import { UpdatePwPage } from '../system/updatePw/updatePw';
import { UserPage } from '../appuser/user/user';
import { BankCardPage } from '../appuser/bankcard/bankcard';

export const MainRoutes: Routes = [ // Routes类型的数组
    {
        path     : '',
        component: HomePage
    },{
        path     : 'desktop/home',//首页
        component: HomePage
    },{
        path     : 'desktop/task',//任务管理
        component: TaskPage
    },{
        path     : 'system/parameter',//参数管理
        component: ParameterPage
    },{
        path     : 'system/userInfo',//用户管理
        component: UserInfoPage
    },{
        path     : 'system/role',//权限管理
        component: RolePage
    },{
        path     : 'system/updatePw',//修改密码
        component: UpdatePwPage
    },{
        path     : 'appuser/user',//用户管理
        component: UserPage
    },{
        path     : 'appuser/bankcard',//银行卡管理
        component: BankCardPage
    },{
        path     : '**',
        component: HomePage
    },
];
