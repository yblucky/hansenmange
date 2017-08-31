import { Component } from "@angular/core";
import { HttpService } from "../../../providers/HttpService";
import { Utils } from "../../../providers/Utils";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
declare var $: any;
declare var layer: any;
var userPage: any;

@Component({
    selector   : 'page-user',
    templateUrl: './user.html',
    styleUrls: ['./user.scss']
})
export class UserPage {
    find:any={
      uid:"",
      mobile:"",
      nickName:"",
      name:"",
      status:"",
      cardGrade:""
    };
    upUser:any={};
    editDate:any={};
    showTime:any = new Date();
    subData:any={};
    constructor(private router:Router,private httpService:HttpService,private aroute:ActivatedRoute,private utils:Utils) {
        this.aroute.params.subscribe( params  => {
            this.showTime = new Date();
        });
        userPage=this;
        this.loadData();
    }

    /**
    * 加载数据
    */
    loadData(){
        this.httpService.pagination({
            url:'/muser/list',
            data:this.find
        });
    }

    disable(item:any){
      this.upUser.id=item.id;
      if(item.state==10){
        this.upUser.state=20
      }else if(item.state==20){
        this.upUser.state=10
      }else{
        alert("用户状态错误");
        return false;
      }
      this.httpService.post({
          url:'/appUser/upUserState',
          data:this.upUser
      }).subscribe((data:any)=>{
          alert(data.code);
          if(data.code==='0000'){
              //修改成功
             this.loadData();
          }else if(data.code==='9999'){
              Utils.show(data.message);
          }else{
              Utils.show("系统异常，请联系管理员");
          }
      });
    }

    deleteItem(item:any){
      layer.confirm('删除为不可逆操作,您确定要删除此数据吗？', {
          btn: ['确定','取消'] //按钮
      }, function(){
          var upUser:any={};
          upUser.id=item.id;
          if(item.state==10||item.state==20){
            upUser.state=30
          }else{
            alert("用户状态错误");
            return false;
          }
          userPage.httpService.post({
              url:'/appUser/upUserState',
              data:upUser
          }).subscribe((data:any)=>{
              layer.closeAll();
              if(data.code==='0000'){
                  //删除成功
                 layer.msg(data.message,{
                     icon: '1',
                     time: 2000
                 },function(){
                     userPage.loadData();
                 });
              }else if(data.code==='9999'){
                  Utils.show(data.message);
              }else{
                  Utils.show("系统异常，请联系管理员");
              }
          });
      });
    }

    /**
    * 弹出编辑面板
    */
    showEditName(item:any){
        this.editDate = Utils.copyObject(item);
        layer.open({
            title: "修改参数",
            btn: ["保存","退出"],
            type: 1,
            closeBtn: 0,
            shade: 0,
            fixed: true,
            shadeClose: false,
            resize: false,
            area: ['350px','auto'],
            content: $("#editPanel"),
            yes: function(index:number){
              if(Utils.isEmpty(userPage.editDate.name)){
                  layer.tips('姓名不能为空', '#name',{tips: 1});
                  $("#name").focus();
                  return false;
              }
              userPage.httpService.post({
                  url:'/appUser/upUserName',
                  data:userPage.editDate
              }).subscribe((data:any)=>{
                  layer.closeAll();
                  if(data.code==='0000'){
                      //修改成功
                      layer.msg(data.message,{
                          icon: '1',
                          time: 2000
                      },function(){
                          userPage.loadData();
                      });
                  }else if(data.code==='9999'){
                        Utils.show(data.message);
                  }else{
                        Utils.show("系统异常，请联系管理员");
                  }
              });
            }
        });
    }
    bankCard(item:any){
        this.router.navigate(['../../appuser/bankcard'],{relativeTo: this.aroute,queryParams: { uid: item.uid }});
    }


    /**
    * 弹出新增面板
    */
    showAddPanel(){
        this.subData = {
            payword: '',
            password: '',
            confirmPayWord:'',
            confirmPassword: '',
            cardGrade: '',
            uid: '',
            contactUserId: '',
            email: '',
            phone: ''
        };

        layer.open({
            title: "新增用户",
            btn: ["新增","取消"],
            type: 1,
            closeBtn: 0,
            shade: 0,
            fixed: true,
            shadeClose: false,
            resize: false,
            area: ['500px','auto'],
            content: $("#addPanel"),
            yes: function(index:number){
                if(userPage.validator()){
                    userPage.httpService.post({
                        url:'/muser/add',
                        data:userPage.subData
                    }).subscribe((data:any)=>{
                        layer.closeAll();
                        if(data.code==='0000'){
                            //新增成功
                           layer.msg(data.message,{
                               icon: '1',
                               time: 2000
                           },function(){
                               userPage.loadData();
                           });
                        }else if(data.code==='9999'){
                            Utils.show(data.message);
                        }else{
                            Utils.show("系统异常，请联系管理员");
                        }
                    });
                }
            }
        });
    }


    validator(){
        if(Utils.isEmpty(this.subData.cardGrade)){
            layer.tips('账户等级不能为空', '#cardGrade',{tips: 1});
            $("#cardGrade").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.password)){
            layer.tips('登录密码不能为空', '#password',{tips: 1});
            $("#password").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.confirmPassword)){
            layer.tips('确认登录密码不能为空', '#confirmPassword',{tips: 1});
            $("#confirmPassword").focus();
            return false;
        }
        if(this.subData.password != this.subData.confirmPassword){
            layer.tips('两次登录密码不一致', '#confirmPassword',{tips: 1});
            $("#confirmPassword").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.payword)){
            layer.tips('支付密码不能为空', '#payword',{tips: 1});
            $("#payword").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.confirmPayWord)){
            layer.tips('确认支付密码不能为空', '#confirmPayWord',{tips: 1});
            $("#confirmPayWord").focus();
            return false;
        }
        if(this.subData.payword != this.subData.confirmPayWord){
            layer.tips('两次支付密码不一致', '#confirmPassword',{tips: 1});
            $("#confirmPayWord").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.uid)){
            layer.tips('邀请人UID不能为空', '#uid',{tips: 1});
            $("#uid").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.contactUserId)){
            layer.tips('接点人不能为空', '#contactUserId',{tips: 1});
            $("#contactUserId").focus();
            return false;
        }
        if(Utils.isEmpty(this.subData.phone)){
            layer.tips('注册手机号不能为空', '#phone',{tips: 1});
            $("#phone").focus();
            return false;
        }
        return true;
    }



}
