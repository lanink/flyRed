<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-main class="container">
          <router-link
            class="block"
            v-for="(item, i) in videoList"
            :key="i"
            :to="{ name: 'video', query: { id: item.id } }"
          >
            <el-image :src="item.pic" class="cover">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
            <span>{{ item.name }}</span>
          </router-link>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { video_list } from "../api/bjxkhc";
import Detail from "./Detail.vue";

@Component({
  components: {
    Detail,
  },
})
export default class Home extends Vue {
  videoList = [];

  mounted() {
    this.getVideoList();
  }

  getVideoList() {
    // TODO 提取分类
    video_list({ page: 1, size: 20 }).then((res) => {
      console.log(res);
      this.videoList = (res as any).data;
    });
  }

  getDetail(id: number) {
    console.log("go to video:", id);
    this.$router.push("/video");
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