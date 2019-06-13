<template>
  <nav class="z-3 p-20 pos-relative" id="header">
    <div style="postion:flexd;top:0;">
      <div class="d-none md:d-block pos-absolute left-0 top-0 right-0 css-vjbhfm"></div>
      <div class="maw-1200 mh-auto d-flex jc-between ai-center pos-relative">
        <a href aria-current="page" @click="$router.push('/')">
          <img src="./../../assets/images/logo.png" style=" width: 50px;">
        </a>
        <div
          class="d-flex pos-fixed left-0 top-0 right-0 bot-0 bgc-cosmos fxd-column jc-between md:pos-static md:ai-center md:fxg-1 md:ml-12 md:fxd-row md:v-visible md:op-100p md:bgc-transparent lg:ml-32 css-n7n0sh v-hidden op-0"
        >
          <div class="p-20 d-flex ai-center jc-between fxs-0 pos-relative z-1 md:d-none">
            <a href aria-current="page">
              <img src="./../../assets/images/logo.png">
            </a>
          </div>
          <ul
            class="mv-auto lis-none pv-48 ph-20 d-flex ai-center fxd-column ov-auto md:fxd-row md:pv-0 md:ph-0 md:ov-visible md:m-0 css-1ojwqei"
          >
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                href="/"
              >{{$t("index.home")}}</a>
            </li>
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                href="/#system"
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
              >{{$t("index.systems")}}</a>
            </li>
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                href="/#advantage"
              >{{$t("index.advantage")}}</a>
            </li>
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                href="/#technology"
              >{{$t("index.characteristics")}}</a>
            </li>
            <!-- <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                href="#code"
              >{{$t("index.code")}}</a>
            </li>-->
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                @click="$router.push(`/article-list`)"
              >{{$t("index.news")}}</a>
            </li>
            <li class="ta-center pos-relative md:mr-12 lg:mr-32 d-none md:d-block">
              <a
                class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold mt-24 bdw-0 app-none bgc-transparent md:mt-0 d-block cursor-pointer css-12yqsug"
                @click="$router.push(`/weekly-list`)"
              >{{$t("index.weekly")}}</a>
            </li>
          </ul>
        </div>
        <ul class="lis-none m-0 p-32 d-flex ai-center jc-center md:p-0 z-2">
          <li class="d-none md:d-block">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link" v-if="lang=='en_US'">
                English
                <i class="iconfont icon-jiantou xiala"></i>
              </span>
              <span class="el-dropdown-link" v-else>
                中文
                <i class="iconfont icon-jiantou xiala"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh_CN">中文</el-dropdown-item>
                <el-dropdown-item command="en_US">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <a
                @click="changeLang()"
                class="uil-app-none uil-bdw-0 uil-d-inline-flex uil-ai-center uil-bdr-max uil-td-none uil-jc-center uil-cursor-pointer uil-ff-hind uil-color-telluric uil-ph-24 lg:uil-ph-32 css-f0pevb"
              >
                <span
                  class="uil-tt-upper uil-lsp-big uil-ff-hind css-1ulj5n6 uil-color-telluric uil-fw-semibold"
                >{{$t("index.lang")}}</span>
              </a>

              <ul
                class="m-0 p-0 lis-none md:pos-absolute md:bgc-white md:bxs-default md:w-120 md:z-1 md:bdr-4 md:pv-12 md:op-100p css-1qwzwt7"
                data-navhover="true"
              >
                <li>
                  <a
                    data-navhover="true"
                    href="/enterprise"
                    class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold d-block css-12yqsug"
                  >中文</a>
                </li>
                <li>
                  <a
                    data-navhover="true"
                    href="/enterprise"
                    class="uil-tt-upper uil-lsp-big uil-ff-hind uil-color-telluric p-8 td-none fw-semibold d-block css-12yqsug"
                  >English</a>
                </li>
            </ul>-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style>
@import "../../assets/font/iconfont.css";
h1 {
  color: rgb(5, 110, 234);
}
@media (max-width: 750px) {
  .md\:d-block {
    display: block;
  }
  .d-none {
    display: block;
  }
  .lis-none {
    float: right;
  }
  .maw-1200 {
    margin: 0;
  }

  .el-dropdown-link {
    display: flex;
    flex-direction: row;
  }
}
.el-dropdown-link .xiala {
  font-size: 14px;
  margin-left: 5px;
  line-height: 15px;
}
</style>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  name: "header",
  // props:[lang],
  data() {
    return {
      lang: ""
    };
  },
  mounted: function() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en_US");
      this.$i18n.locale = "en_US";
    }
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    handleCommand(command) {
      localStorage.setItem("lang", command);
      this.$i18n.locale = command;
      window.location.reload();
    }
  }
};
</script>

