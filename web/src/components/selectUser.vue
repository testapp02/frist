<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>用户管理</el-button>

        </el-row>
        <el-row style="margin-top: 10px">
            <el-button style="float:left">应用用户</el-button>
            <el-button style="float:left">后台管理员</el-button>
        </el-row>
        <div class="query">
            <span>账户</span>
            <el-autocomplete
                    v-model="state4"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入账号"
                    @select="handleSelect"
            ></el-autocomplete>
            <span>姓名</span>
            <el-autocomplete
                    v-model="state4"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入姓名"
                    @select="handleSelect"
            ></el-autocomplete>
            <span>用户类型</span>
            <el-cascader
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
            </el-cascader>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="userName"
                        label="账号"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="推广人数"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="level"
                        label="级别"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="balance"
                        label="余额"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="联系电话"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="创建时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="400">
                </el-table-column>
                <span class="demonstration">调整每页显示条数</span>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage2"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="sizes, prev, pager, next"
                        :total="1000">
                </el-pagination>
            </el-table>
    </div>
</template>

<script>
    export default {
        name: "select-user",
        data() {
            return{
            tableData: {}
            }
        },
//        mounted(){
//            fetch("/api/users/selectUser").then(function (e) {
//                return e.json();
//            }).then((e)=>{
//                this.datas=e;
//            })
//        },
        methods: {
            handleChange(value) {
               alert(value);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>
