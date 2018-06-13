<template>
	<div>
		<el-row style="text-align: right;">
			<el-button type="primary">
				<router-link to="/AddCourse">添加</router-link>
			</el-button>
		</el-row>
		<el-table :data="tableData" border style="width: 100%;margin-top:10px">
			<el-table-column fixed prop="title" label="课程标题" width="150">
			</el-table-column>
			<el-table-column prop="number" label="播放量" width="120">
			</el-table-column>
			<el-table-column prop="remark" label="课件类型" width="120">
			</el-table-column>
			<el-table-column prop="res_path" label="课件资源" width="180">
			</el-table-column>
			<el-table-column prop="crt_time" label="创建时间" width="200">
			</el-table-column>

			<el-table-column fixed="right" label="操作" width="300">
				<template slot-scope="scope">
					<el-button type="primary" size="small">
						<router-link :to="'/EditCourse/'+scope.row.id"> 编辑 </router-link>
					</el-button>
					<el-button type="info" size="small">置顶</el-button>

					<el-button @click="handleClick(scope.row.id)" type="danger" size="small">删除</el-button>

				</template>
			</el-table-column>
		</el-table>
		<div class="block" style="margin-top: 20px;padding-right: 10px;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="1" style="float: right;">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				total: "",
				page: "",
				currentPage:4
			}
		},
		methods: {
			handleClick(id) {
				fetch("/api/course/del/" + id).then(function(e) {
					return e.text();
				}).then((e) => {
					if(e == "ok") {
						this.tableData = this.tableData.filter(function(item) {
							if(item.id != id) {
								return item
							}
						})
					}
				})
			},
			handleSizeChange(){
				
			},
			handleCurrentChange(){
				
			}
		},
		mounted() {
			fetch("/api/course/select").then(function(e) {
				return e.json();
			}).then((e) => {
				this.tableData = e;
				console.log(e);
			})
		}
	}
</script>

<style>

</style>