<template>
	<div class="block top">
		<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizesList" :page-size="pageSizes" layout=" prev, pager, next, jumper, sizes, total" :total="total">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		methods: {
			handleSizeChange(val) {
				this.pageSizes = val
				this.$emit('changePage', 1, val) // 获取当前每页显示条数
			},
			handleCurrentChange(val) {
				this.$emit('changePage', val, this.pageSizes) // 获取当前页码数
			}
		},
		mounted() {
			this.$nextTick(() => {
				console.log('currentPage', this.currentPage, 'pageSize', this.pageSize)
			})
		},
		props: ['pageVo', 'currentPage', 'count', 'totalRecs', 'pageSize'], // 这里是接受父组件传过来的所有值
		data() {
			return {
				pageSizesList: [10, 20, 30, 40, 50],
				pageSizes: this.pageSize
			}
		},
		computed: {
			total() {
				return parseInt(this.totalRecs)
			}
		}
	}
</script>

<style scoped>
	.top {
		margin-top: 20px;
	}
</style>