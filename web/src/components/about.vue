<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>辅助信息修改</el-button>
        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top:10px">
            <el-table-column
                    fixed
                    prop="date"
                    label="标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="内容"
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


<style>

</style>
