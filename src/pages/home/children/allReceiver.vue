<template>
  <div class="all-receiver-container">
    <el-table :data="receiverData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市" width="120"></el-table-column>
          <el-table-column prop="area" label="区/县" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      // area:"长安区"
      // city:"石家庄市"
      // common_used:1
      // detailed_address:"金融港B15栋2楼"
      // id:2
      // mobile:"13030303030"
      // postcode:"430070"
      // province:"河北省"
      // receiver_name:"传智人牛逼"
      receiverData: []
    };
  },
  created() {
    this.getAllReceiver();
  },
  methods: {
    getAllReceiver() {
      // 从localStorage中获取token
      let token = localStorage.getItem("token") || "";
      // 发送请求获取数据
      this.$http
        .get("/users/getReceiverAddress")
        .then(result => {
          // console.log(result);
          this.receiverData = result.data;
        })
        // .catch(err => {
        //   // console.dir(err);
        //   this.$message({
        //     showClose: true,
        //     type: "error",
        //     message: err.response.data.errMsg
        //   });
        // });
    }
  }
};
</script>

<style lang="less" scoped>
.all-receiver-container {
  padding: 50px;
}
</style>
