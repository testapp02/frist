<template>
    <div>
        <el-row>
            <el-button type="primary" style="float:left" disabled>课程管理</el-button>

        </el-row>
        <el-table
                :data="tableData"
                border
                style="width: 100%;margin-top:10px">
            <el-table-column
                    fixed
                    prop="title"
                    label="课程标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="播放量"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="remark"
                    label="课件类型"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="res_path"
                    label="课件资源"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="crt_time"
                    label="创建时间"
                    width="200">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="300">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">
                        <router-link :to="'/EditCourse/'+scope.row.id"> 编辑 </router-link>
                    </el-button>
                    <el-button  type="info" size="small">置顶</el-button>

                    <el-button @click="handleClick(scope.row.id)" type="danger" size="small">删除</el-button>


                </template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-button type="primary">
                <router-link to="/AddCourse">添加</router-link>
            </el-button>
        </el-row>
        <div class="block">

            <!--<el-pagination-->
                    <!--@size-change="handleSizeChange"-->
                    <!--@current-change="handleCurrentChange"-->
                    <!--:current-page="page"-->
                    <!--:page-sizes="[10,20]"-->
                    <!--:page-size="10"-->
                    <!--layout="total, sizes, prev, pager, next, jumper"-->
                    <!--:total="total">-->
            <!--</el-pagination>-->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData:[],
                total:"",
                page:""
            }
        },
        methods: {
            handleClick(id) {
                fetch("/api/course/del/"+id).then(function (e) {
                    return e.text();
                }).then( (e)=> {
                    if(e=="ok"){
                        this.tableData=this.tableData.filter(function (item) {
                            if(item.id!=id){
                                return item
                            }
                        })
                    }
                })
            }
        },
        mounted(){
            fetch("/api/course/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.tableData=e;

            })
        }
    }
</script>


<style>

</style>
