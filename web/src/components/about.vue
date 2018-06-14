<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>辅助信息修改</el-button>
        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top:10px">
            <el-table-column prop="remark" label="标题" width="150">
            </el-table-column>
            <el-table-column prop="_value" label="内容" width="400">
            </el-table-column>
            <el-table-column prop="_key" label="创建时间" width="200">
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">
                        编辑
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[]
            }
        },
        mounted(){
            fetch("/api/gjc/about/select").then(function(e) {
                return e.json();
            }).then((e) => {
                this.tableData = e;
            })
        }
    }
</script>


<style>

</style>
