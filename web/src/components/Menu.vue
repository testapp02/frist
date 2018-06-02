<template>
    <!--<Menu>-->
    <el-row class="tac">
        <el-col :span="24">

            <el-menu default-active="2"
                    class="el-menu-vertical-demo">

                <el-submenu index="1">
                    <template slot="title">
                        <router-link  to="/selectUser">用户管理</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <router-link to="/banner">轮播管理</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <router-link to="/selectOrder">订单管理</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <router-link to="/selectShare">分享管理</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <router-link to="/course">课程管理</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <router-link to="/userAudit">用户审核</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <router-link to="/withDrawal">提现审核</router-link>
                    </template>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                        <router-link to="/comments">客户见证审核</router-link>
                    </template>

                </el-submenu>
                <el-submenu index="9">
                    <template slot="title">
                        <router-link to="/about">辅助信息修改</router-link>
                    </template>
                </el-submenu>

            </el-menu>

        </el-col>
    </el-row>
    <!--</Menu>-->
</template>

<script>
    export default {

    }
</script>


<style>

</style>
