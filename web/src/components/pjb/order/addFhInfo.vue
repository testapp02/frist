<template>
	<div class="root">
		<el-form ref="form" :model="form" label-width="100px" :rules="rules">
			<el-form-item label="订单号" prop="id">
				<el-input v-model="form.id" type="text" style="width:300px"></el-input>
			</el-form-item>
			<el-form-item label="用户id" prop="uid">
				<el-input v-model="form.uid" type="text" style="width:300px"></el-input>
			</el-form-item>
			<el-form-item label="发货类型" prop="type">
				<el-select v-model="form.type" filterable placeholder="请选择" filterable style="width: 300px;">
					<el-option key="0" label="租用" value="0"></el-option>
					<el-option key="2" label="购买" value="2"></el-option>
					<el-option key="4" label="维修" value="4"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="发货机器号" prop="mid">
				<el-input v-model="form.mid" type="text" style="width:300px"></el-input>
			</el-form-item>
			<el-form-item label="快递单号" prop="express_no">
				<el-input v-model="form.express_no" type="text" style="width:300px"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit('form')">提交</el-button>
				<el-button @click="quxiao">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					id: "",
					uid: "",
					type: "",
					mid: "",
					express_no: "",
				},
				rules: {
					id: [{
						required: true,
						message: "请填写",
						trigger: "change"
					}],
					uid: [{
						required: true,
						message: "请填写",
						trigger: "change"
					}],
					type: [{
						required: true,
						message: "请选择",
						trigger: "change"
					}],
					mid: [{
						required: true,
						message: "请填写",
						trigger: "change"
					}],
					express_no: [{
						required: true,
						message: "请填写",
						trigger: "change"
					}]

				}
			}
		},
		methods: {
			quxiao() {
				this.$router.push("/pjbOrderInfo");
			},
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						var params = `id=${this.form.id}&uid=${this.form.uid}&type=${this.form.type}&mid=${this.form.express_no}`;
						fetch("/api/pjb/fhOrder/add?" + params, {
							credentials: 'include'
						}).then(function(e) {
							return e.text()
						}).then(function(e) {
							if(e == "ok") {
								this.$message({
									message: "添加成功",
									type: "success"
								});
								this.$router.push("/pjbOrderInfo");
							} else {
								this.$message({
									message: "添加失败",
									type: "error"
								});
							}
						}.bind(this));
					} else {
						return false;
					}
				});
			}
		},
		mounted() {
		}
	}
</script>

<style scoped="scoped">

</style>