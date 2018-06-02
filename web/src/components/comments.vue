<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>客户见证审核</el-button>
        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top:10px">
            <el-table-column
                    fixed
                    prop="date"
                    label="账号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="标题"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="内容"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="图片"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="上传时间"
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


<style>

</style>
