<template>
	<div class="loginbox">
		{{message}}
		<el-form :model="form" ref="formName" :label-position="labelPosition" label-width="80px" :rules="rules">
			<el-form-item label="用户名" prop="uname">
				<el-input v-model="form.uname"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="upass">
				<el-input v-model="form.upass" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="success" @click="login">登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				labelPosition: 'left',
				message: "",
				rules: {
					uname: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}, ],
					upass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}, ]
				},
				form: {
					upass: "",
					uname: ""
				}
			};
		},
		methods: {
			login() {
				this.$refs['formName'].validate((valid) => {
					if(valid) {
						var params = "uname=" + this.form.uname + "&upass=" + this.form.upass;
						fetch("/api/login/check?" + params).then(function(e) {
							return e.json();
						}).then((e) => {
							if(e.message == "ok") {
								var arr=["&d-12ei1-n","*&21291)()1","&%$#?/<>","(!0di21j102"];
								this.setCookie("login","yes");
								this.setCookie("uname",e.uname);
								this.setCookie("wname",e.wname);
								this.setCookie("ustatus",arr[e.ustatus]);
								this.$router.push("/")
							} else {
								this.uname = "";
								this.upass = "";
								this.message = "账号或密码输入有误"
							}
						})
					} else {
						return false;
					}
				});
			},
			setCookie(key, val, time) {
				var val=escape(val);
				if(time) {
					let date = new Date();
					date.setTime(date.getTime() + time);
					let ex = date.toGMTString();
					document.cookie = key + "=" + val + "; expires=" + ex;
				} else {
					document.cookie = key + "=" + val;
				}
			}
		}
	}
</script>

<style scoped>
	.loginbox {
		width: 300px;
		height: 300px;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	}
</style>