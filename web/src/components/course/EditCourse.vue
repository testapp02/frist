<template>
    <div>
        <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="课件名称" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="课件类型" prop="remark">
                <el-select v-model="ruleForm.remark" placeholder="请选择">
                    <el-option
                            v-for="item in ruleForm.res_type"
                            :key="item.res_type"
                            :label="item.remark"
                            :value="item.res_type">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="文件" prop="ruleForm.res_path">
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
            <el-form-item label="缩略图" prop="ruleForm.icon">
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
                <el-button type="primary" @click="submitForm">确定修改</el-button>
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
                    res_type:[
                        {res_type:"1",remark:"音频"},
                        {res_type:"2",remark:"视频"},
                        {res_type:"3",remark:"图片"}
                    ],
                    icon:"",
                    res_path:"",
                    content:"",
                    id:""
                },
                fileList2:[],
                message:"",

            };
        },
        mounted(){
            fetch("/api/course/EditCourse/"+this.$route.params.id).then(function (e) {
                return e.json();
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
                var params = `title=${this.ruleForm.title}&remark=${this.ruleForm.res_type.remark}&res_type=${this.ruleForm.res_type.res_type}&icon=${this.ruleForm.icon}&res_path=${this.ruleForm.res_path}&content=${this.ruleForm.content}&id=${this.ruleForm.id}`;
                fetch("/api/course/editCon?"+params).then(function (e) {
                    console.log(e);
                    if(e == "ok") {
                        this.$message({
                            message: "修改成功",
                            type: "success",
                        });
                        this.$router.push("/course")
                    } else {
                        return false;
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
