<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>用户审核</el-button>

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
                style="width: 100%;margin-top: 10px">
            <el-table-column
                    fixed
                    prop="date"
                    label="课程标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="播放量"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="课件类型"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="课件资源"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="创建时间"
                    width="80">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="400">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {

        data: () => ({})
    }
</script>


<style scoped>

</style>
