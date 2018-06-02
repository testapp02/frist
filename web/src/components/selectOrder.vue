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
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    style="float: left">
            </el-date-picker>
            <div class="clearfloat"></div>
        </div>
        <div class="queryx">
            <span>账号：</span>

            <el-autocomplete
                    v-model="state4"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入账号"
                    @select="handleSelect"
            ></el-autocomplete>
            <span>人员姓名：</span>
            <el-autocomplete
                    v-model="state4"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入姓名"
                    @select="handleSelect"
            ></el-autocomplete>
            <div class="clearfloat"></div>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="支付方式"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="交易订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="商家订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="姓名"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="订单金额"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="支付状态"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
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
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '弄',
                    zip: 200333
                }]

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