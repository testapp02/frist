<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>提现审核</el-button>
        </el-row>
        <div class="queryx">
            <div class="div" style="float: left;"
            >
                <span>账号：</span>

                <el-autocomplete
                        v-model="state4"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入账号"
                        @select="handleSelect"
                        style="height: 20px;"
                ></el-autocomplete>
                <span>持卡人：</span>
                <el-autocomplete
                        v-model="state4"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入姓名"
                        @select="handleSelect"
                ></el-autocomplete>
            </div>

        </div>
        <div class="block" style="width:100%;margin-top: 10px;float: left;
margin-bottom: 10px;">
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
        <div class="querys">
            <div style="float: left">
                <span>提现状态</span>
                <el-cascader
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange">
                </el-cascader>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary" icon="el-icon-search">导出excel</el-button>
                <el-button type="primary" icon="el-icon-search">全部导出excel</el-button>
                <div class="clearfloat"></div>
            </div>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="持卡人"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="卡号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="所属银行"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="开户行"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="用户账号"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="提现金额（元）"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="申请时间"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="审核时间"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="提现状态"
                    width="80">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="审核"
                    width="180">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {

        data: () => ({})
    }
</script>


<style>
    .queryx{
        width:100%;
        margin-top: 10px;
    }
    .clearfloat{
        clear:both
    }
</style>
