import { Routes } from "@angular/router";

import { HomePage } from '../desktop/home/home';
import { TaskPage } from '../desktop/task/task';
import { BackRechargePage } from '../desktop/backRecharge/backRecharge';
import { StatisticsAmountPage } from '../desktop/statisticsAmount/statisticsAmount';


import { ParameterPage } from '../system/parameter/parameter';
import { UserInfoPage } from '../system/userInfo/userInfo';
import { RolePage } from '../system/role/role';
import { UpdatePwPage } from '../system/updatePw/updatePw';
import { UserPage } from '../appuser/user/user';
import { BankCardPage } from '../appuser/bankcard/bankcard';
import { WalletOrderPage } from '../appuser/walletOrder/walletOrder';
import { CointOutOrderPage } from '../appuser/cointOutOrder/cointOutOrder';
import { PerformancePage } from '../appuser/performance/performance'; 
import { TradeOrderPage } from '../appuser/tradeOrder/tradeOrder';
import { RewardOrderPage } from '../appuser/rewardOrder/rewardOrder';
import { UserSignPage } from '../appuser/userSign/userSign';
import { CoinAddressPage } from '../appuser/coinAddress/coinAddress';

export const MainRoutes: Routes = [ // Routes类型的数组
    {
        path     : '',
        component: UserPage
    },{
        path     : 'desktop/home',//首页
        component: HomePage
    },{
        path     : 'desktop/task',//任务管理
        component: TaskPage
    },{
        path     : 'desktop/backRecharge',//管理后台充值
        component: BackRechargePage
    },{
        path     : 'desktop/statisticsAmount',//统计收益
        component: StatisticsAmountPage
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
        path     : 'appuser/walletOrder',//转账
        component: WalletOrderPage
    },{
        path     : 'appuser/performance',
        component: PerformancePage
    },{
        path     : 'appuser/cointOutOrder',//提币审核
        component: CointOutOrderPage
    },{
        path     : 'appuser/tradeOrder',
        component: TradeOrderPage
    },{
        path     : 'appuser/rewardOrder',
        component: RewardOrderPage
    },{
        path     : 'appuser/userSign',
        component: UserSignPage
    },{
        path     : 'appuser/coinAddress',
        component: CoinAddressPage
    },{
        path     : '**',
        component: UserPage
    },
];
