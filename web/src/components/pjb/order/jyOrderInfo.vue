<template>
	<div class="root">
		<div style="float: left;margin-right: 10px;">
			<el-date-picker v-model="time" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right" @change="change">
			</el-date-picker>
		</div>
		<div style="display: inline-block;width: 650px;margin-bottom: 20px;">
			<input v-model="id" placeholder="订单号搜索..." style="width: 300px;" @keydown.13="find" class="el-input__inner" />
			<input v-model="nickname" placeholder="人名搜索..." style="width: 300px;" @keydown.13="find" class="el-input__inner" />
			<el-button icon="el-icon-search" circle @click="find"></el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="id" label="订单号" width="150">
			</el-table-column>
			<el-table-column prop="order_id" label="交易id" width="170">
			</el-table-column>
			<el-table-column prop="type" label="交易用途" width="170">
			</el-table-column>
			<el-table-column prop="gold" label="交易金额(元)" width="165">
			</el-table-column>
			<el-table-column label="交易状态" width="170">
				<template slot-scope="scope">
					<span v-if="scope.row.state==0">未生效</span>
					<span v-else-if="scope.row.type==1">生效</span>
				</template>
			</el-table-column>
			<el-table-column prop="crt_time" label="订单时间" width="300">
			</el-table-column>
		</el-table>
		<div v-if="tableData.length>0">
			<el-pagination background layout="prev, pager, next" :total="pages*10" style="text-align: right;margin-top: 20px;margin-right: 20px;" @current-change="fanye">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 10,
				activeName: 'first',
				endtime: "",
				starttime: "",
				tableData: [],
				pages: 1,
				page: 0,
				id: "",
				nickname: "",
				flag: 0,
				time: [],
				pickerOptions2: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				}
			};
		},
		methods: {
			time1(time) {
				var year = time.getFullYear() >= 10 ? time.getFullYear() : "0" + time.getFullYear();
				var mon = time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : "0" + (time.getMonth() + 1);
				var day = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
				var hours = time.getHours() >= 10 ? time.getHours() : "0" + time.getHours();
				var min = time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes();
				var sec = time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds();
				return year + "-" + mon + "-" + day + " " + hours + ":" + min + ":" + sec;
			},
			handleClick(tab, event) {

			},
			change() {
				if(this.time == null) {
					this.starttime = "";
					this.endtime = "";
				} else {
					this.starttime = new Date(this.time[0]).getTime();
					this.endtime = new Date(this.time[1]).getTime();
				}
				this.selectAll();
				this.selectPage();
			},
			selectAll() {
				fetch(`/api/pjb/jyOrder/selAll?id=${this.id}&starttime=${this.starttime}&endtime=${this.endtime}&pageNum=${this.pageNum}`).then(function(e) {
					return e.text();
				}).then((e) => {
					this.pages = e;
				})
			},
			selectPage() {
				var params = "id=" + this.id + "&page=" + this.page + `&starttime=${this.starttime}&endtime=${this.endtime}&pageNum=${this.pageNum}`;
				fetch("/api/pjb/jyOrder/selPage?" + params).then(function(e) {
					return e.json();
				}).then((e) => {
					if(e.message != "err") {
						e.forEach((val) => {
							val.crt_time = this.time1(new Date(val.crt_time));
						});
						this.tableData = e;
					}
				});
			},
			find() {
				if(this.like == "" && this.flag == 0) {
					return;
				}
				if(this.like == "") {
					this.flag = 0;
				} else {
					this.flag = 1;
				}
				this.selectAll();
				this.selectPage();
			},
			fanye(currentPage) {
				this.page = currentPage - 1;
				this.selectPage();
			}
		},
		mounted() {
			this.selectAll();
			this.selectPage();
		}
	};
</script>

<style>

</style>