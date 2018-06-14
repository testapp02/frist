<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>用户见证审核</el-button>
        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top:10px">
            <el-table-column prop="nickname" label="账号" width="150">
            </el-table-column>
            <el-table-column prop="realname" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="tags" label="标题" width="150">
            </el-table-column>
            <el-table-column prop="content" label="内容" width="200">
            </el-table-column>
            <el-table-column prop="pictures" label="图片" width="200">
            </el-table-column>
            <el-table-column prop="crt_time" label="上传时间" width="100">
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
            fetch("/api/gjc/comments/select").then(function(e) {
                return e.json();
            }).then((e) => {
                this.tableData = e;
            })
        }
    }
</script>


<style>

</style>
