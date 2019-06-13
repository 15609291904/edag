<template>
  <div id="articleList">
    <vhead></vhead>
    <div class="home blog wp-custom-logo hfeed uil-bgc-moon pos-relative">

      <header class="uil-ph-20 uil-ta-center uil-pos-relative uil-pv-80 lg:uil-pv-120 css-bevzk">
        <div class="uil-pos-relative uil-z-1 uil-maw-500 uil-m-auto md:uil-maw-1200">
          <h1
            class="uil-fsz-36 uil-lsp-big uil-lh-small uil-tt-upper uil-fw-bold lg:uil-fsz-56 uil-ff-poppins uil-color-solstice uil-m-0 uil-maw-35ch uil-ml-auto uil-mr-auto"
          >{{$t("index.news")}}</h1>
          <!-- <h3
            class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-nova uil-maw-60ch uil-mt-8 uil-mb-0 uil-ml-auto uil-mr-auto uil-jc-center"
          >These changelogs reflect the history of the Algolia Search service.</h3> -->
        </div>
      </header>
      <!-- <header id="masthead" class="site-header">
        <div class="container">
          <div class="header-container">
            <div
              class="uil-fsz-36 uil-lsp-big uil-lh-small uil-tt-upper uil-fw-bold lg:uil-fsz-56 uil-ff-poppins uil-color-solstice uil-m-0 uil-maw-35ch uil-ml-auto uil-mr-auto"
            >新闻列表</div>
          </div>
        </div>
      </header> -->
      <div id="page" class="site container uil-z-2 pos-relative" style="padding-bottom: 20px;">
        <div id="content" class="site-content">
          <div id="primary" class="content-area">
            <main id="main" class="site-main">
              <div
                class="uil-bxs-default uil-bdr-2 uil-ff-hind uil-p-24 mt-24 css-1pwkud md:uil-maw-1200 handle"
                v-for="(item,index) in articleList"
                :key="index"
                @click="goDetail(item)"
              >
                <!-- <h3
                  class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice mt-0 mb-8"
                >Ja54549</h3> -->
                <div
                  class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-fsz-18 uil-color-telluric"
                >
                  <div class="css-14j8w2o">{{item.title}}</div>
                </div>
              </div>
              <!-- <div class="posts-list"> 

              <article v-for="(item,index) in articleList" :key="index" @click="goDetail(item)"
                class="post-8321 post type-post status-publish format-standard has-post-thumbnail hentry category-engineering tag-dns tag-dsn tag-search-network">
                <div class="post-img">
                  <a href rel="bookmark">
                    <img
                      width="360"
                      height="200"
                      :src="item.img_url"
                      class="attachment-aerial_thumbnail size-aerial_thumbnail wp-post-image"
                      sizes="(max-width: 360px) 100vw, 360px"
                    >
                  </a>
                </div>
                <div class="post-content">
                  <h2 class="entry-title">
                    <a href rel="bookmark">
                     {{item.title}}
                    </a>
                  </h2>
                </div>
              </article>
              </div>-->
            </main>
          </div>
        </div>
      </div>
    </div>
    <vfoot></vfoot>
  </div>
</template>

<script>
import vhead from "./common/header";
import vfoot from "./common/footer";
import https from "../https.js";

export default {
  name: "articleList",
  data() {
    return {
      articleList: []
    };
  },
  created: function() {},
  mounted: function() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "zh_CN");
      this.$i18n.locale = "zh_CN";
    }
    this.getArticleList();
  },
  components: {
    vhead,
    vfoot
  },

  methods: {
    getArticleList: function() {
      let oData = {
        type: 1
      };
      https
        .fetchGet("/home/index/articleList", oData)
        .then(data => {
          this.articleList = data.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    goDetail: function(item) {
      this.$router.push({ path: "/article-detail", query: { id: item.id } });
    }
  }
};
</script>



<style scoped>
@import "./../assets/css/list.css";
@import "./../assets/css/common.css";

@import "./../assets/css/list-local.css";
</style>
