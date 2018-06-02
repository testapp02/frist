<template>
    <div>
        <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="课件名称" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="课件类型" prop="remark">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="文件" prop="res_path">
                <el-upload
                        class="upload-demo"
                        action="https://api/upload/load"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="缩略图" prop="icon">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList2"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>

                </el-upload>
            </el-form-item>
            <el-form-item label="介绍" prop="content"  style="height:200px">
                <el-input type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:"edit-course",
        data() {
            return {
                fileList: [],
                ruleForm:{
                    title:"",
                    remark:"",
                    icon:"",
                    res_path:"",
                    content:""
                },
                options: [{
                    value: '选项1',
                    label: '音频'
                }, {
                    value: '选项2',
                    label: '视频'
                }, {
                    value: '选项3',
                    label: '图片'
                }],
                fileList2:[],
                message:"",
                value:""
            };
        },
        mounted(){
            fetch("/api/course/EditCourse/"+this.$route.params.id).then(function (e) {
                return e.JSON();
            }).then((e)=>{
                this.ruleForm.title=e.title;
                this.ruleForm.remark=e.remark;
//                this.ruleForm.res_path=e.res_path;
//                this.ruleForm.icon=e.icon;
                this.ruleForm.content=e.content;
            })
        },
        methods:{
            submitForm(){
                var ruleFormCon=JSON.stringify(this.ruleForm);
                console.log(ruleFormCon);
                fetch("/api/course/editCon", {

                method: "post",
//                    headers: {
//                        'Content-Type': 'application/x-www-form-urlencoded'
//                    },
                    body: ruleFormCon,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }).then(function (e) {
                    return e.text();
                }).then((e)=>{
                    if(e=="ok"){
                        this.$message({
                            message:"添加成功",
                            type: 'success'
                        })

                    }else{
                        this.$message({
                            message:"添加失败",
                            type: 'warning'
                        })
                    }
                })
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }
    }
</script>


<style scoped="">

</style>
