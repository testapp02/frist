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

            <!--<el-form-item label="文件" prop="res_path">-->
                <!--<el-upload-->
                        <!--class="upload-demo"-->
                        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                        <!--:on-preview="handlePreview"-->
                        <!--:on-remove="handleRemove"-->
                        <!--:before-remove="beforeRemove"-->
                        <!--multiple-->
                        <!--:limit="3"-->
                        <!--:on-exceed="handleExceed"-->
                        <!--:file-list="fileList">-->
                    <!--<el-button size="small" type="primary">点击上传</el-button>-->
                <!--</el-upload>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="缩略图" prop="icon">-->
                <!--<el-upload-->
                        <!--class="upload-demo"-->
                        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                        <!--:on-preview="handlePreview"-->
                        <!--:on-remove="handleRemove"-->
                        <!--:file-list="fileList2"-->
                        <!--list-type="picture">-->
                    <!--<el-button size="small" type="primary">点击上传</el-button>-->

                <!--</el-upload>-->
            <!--</el-form-item>-->
            <el-form-item label="介绍" prop="content">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addCourse('ruleForm')">添加</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add-course",

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
                    content:""
                },
                fileList2:[],
                value:""
            };
        }
    }
</script>


<style scoped="">

</style>
