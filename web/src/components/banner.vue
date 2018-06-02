<template>
   <div>
      <el-row>
         <el-button type="primary" style="float:left" disabled>轮播管理</el-button>
      </el-row>
      <el-table
              :data="tableData"
              border
              style="width: 980px;margin-top:10px">
         <el-table-column
                 fixed
                 prop="id"
                 label="序号"
                 width="60">
         </el-table-column>
         <el-table-column
                 prop="image"
                 label="资源路径"
                 width="400">
         </el-table-column>
         <el-table-column
                 prop="crt_time"
                 label="创建时间"
                 width="160">
         </el-table-column>
         <el-table-column
                 prop="city"
                 label="创建人"
                 width="140">
         </el-table-column>

         <el-table-column
                 fixed="right"
                 label="操作"
                 width="180">
            <template slot-scope="scope">
               <el-button type="primary" size="small">
                  <router-link :to="'/EditBanner/'+scope.row.id"> 编辑 </router-link>
               </el-button>
               <el-button @click="delBanner(scope.row.id)" type="danger" size="small">删除</el-button>
            </template>
         </el-table-column>

      </el-table>

   </div>
</template>

<script>
    export default {
    name:"banner",
        data() {
            return {
                message:"",
                tableData: []
            }
        },
        mounted(){
            fetch("/api/banner/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.tableData=e;
            })
        },
        methods: {

            delBanner(id) {
                fetch("/api/banner/del/"+id).then(function (e) {
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
        }
    }
</script>


<style>

</style>
