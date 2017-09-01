import { CommonRoutes } from './common.routes';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeModule } from 'ng2-tree';
import { ImageUploadModule } from 'ng2-imageupload';
//通用
import { LoginPage } from './login/login';
import { MainPage } from './main/main';
//我的桌面
import { HomePage } from '../desktop/home/home';
import { TaskPage } from '../desktop/task/task';
import { BackRechargePage } from '../desktop/backRecharge/backRecharge';
//系统管理
import { ParameterPage } from '../system/parameter/parameter';
import { UserInfoPage } from '../system/userInfo/userInfo';
import { RolePage } from '../system/role/role';
import { UpdatePwPage } from '../system/updatePw/updatePw';
//用户管理
import { UserPage } from '../appuser/user/user';
import { BankCardPage } from '../appuser/bankcard/bankcard';
import { WalletOrderPage } from '../appuser/walletOrder/walletOrder';
import { TradeOrderPage } from '../appuser/tradeOrder/tradeOrder';
import { UserSignPage } from '../appuser/userSign/userSign';


@NgModule({
    declarations: [
        LoginPage,
        MainPage,
        HomePage,
        ParameterPage,
        UserInfoPage,
        RolePage,
        UpdatePwPage,
        TaskPage,
        UserPage,
        BankCardPage,
        WalletOrderPage,
        TradeOrderPage,
        UserSignPage,
        BackRechargePage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TreeModule,
        ImageUploadModule,
        RouterModule.forRoot(CommonRoutes,{useHash: false}),
    ]
})
export class CommonModule { }
