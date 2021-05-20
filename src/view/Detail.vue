<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-main class="container"> </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { video_detail } from "../api/bjxkhc";

@Component({})
export default class Home extends Vue {
  id: number;

  created() {
    this.id = this.$route.query.id;
  }

  mounted() {
    console.log(this.id);
    video_detail({id: this.id}).then(res => console.log(res));
  }

  getVideoDetail() {
    // TODO 提取分类
    video_detail({ page: 1, size: 20 }).then((res) => {
      console.log(res);
    });
  }

  getDetail(id: Number) {
    console.log("go to video:", id);
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .block {
    width: 25%;
    margin-top: 50px;
    text-align: center;
    .cover {
      width: 80%;
      height: 90%;
      left: 10%;
      display: block;
    }
    span {
      line-height: 60px;
    }
  }
}
</style> 