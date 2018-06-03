<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>订单管理</el-button>
        </el-row>
        <div class="block" style="width:100%;margin-top: 10px;">
            <span class="demonstration" style="float: left;line-height: 40px">订单时间：</span>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    style="float: left">
            </el-date-picker>
            <span style="float: left;line-height: 40px">至</span>
            <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期"
                    style="float: left">
            </el-date-picker>
            <div class="clearfloat"></div>
        </div>
        <!--<div class="queryx">-->
        <!--<span>账号：</span>-->

        <!--<el-autocomplete-->
        <!--v-model="state3"-->
        <!--:fetch-suggestions="querySearchAsync"-->
        <!--placeholder="请输入账号"-->
        <!--@select="handleSelect"-->
        <!--&gt;</el-autocomplete>-->
        <!--<span>人员姓名：</span>-->
        <!--<el-autocomplete-->
        <!--v-model="state4"-->
        <!--:fetch-suggestions="querySearchAsync"-->
        <!--placeholder="请输入姓名"-->
        <!--@select="handleSelect"-->
        <!--&gt;</el-autocomplete>-->
        <!--<el-button type="primary" icon="el-icon-search">搜索</el-button>-->
        <!--<div class="clearfloat"></div>-->
        <!--</div>-->
        <el-table
                :data="orderData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="o_type.value"
                    label="支付方式"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="交易订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="seller_id"
                    label="商家订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="uid"
                    label="账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="cealname"
                    label="姓名"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="gold"
                    label="订单金额"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="支付状态"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="pay_time"
                    label="订单时间"
                    width="200">
            </el-table-column>

        </el-table>

    </div>
</template>
<script>
    export default {
        name: "select-order",
        data() {
            return {
                orderData: [{
                    type:[
                        {key:0,value:"ali"},
                        {key:1,value:"微信app"},
                        {key:2,value:"微信公众号"}
                    ],
                    id:"",
                    seller_id:"",
                    uid:"",
                    cealname:"",
                    gold:"",
                    state:"",
                    pay_time:""
                }],
                value1:"",
                value2:"",
                state3:"",
                state4:"",
                querySearchAsync:""
            }
        },
        created(){
            fetch("/api/order/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.orderData=e;
            })
        },
        methods:{
            handleSelect(){
                console.log(state4)
            }
        }
    }
</script>
<style scoped>
    .queryx{
        float: left;
        margin-top: 10px;
    }
    .clearfloat{
        clear:both
    }

</style>