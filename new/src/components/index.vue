<template>
  <div id="indexpage">
    <vhead :lang="lang"></vhead>
    <main>
      <header class="uil-ph-20 uil-ta-center uil-pos-relative uil-pv-80 lg:uil-pv-120">
        <div
          class="uil-pos-absolute uil-bgp-center uil-left-0 uil-right-0 uil-d-none md:uil-d-block css-5xhzfp"
        ></div>
        <div class="uil-pos-relative uil-z-1 uil-maw-500 uil-m-auto md:uil-maw-1200">
          <H1
            class="uil-fsz-36 uil-lsp-big uil-lh-small uil-tt-upper uil-fw-bold lg:uil-fsz-56 uil-ff-poppins uil-color-solstice uil-m-0 uil-maw-35ch uil-ml-auto uil-mr-auto"
          >{{$t("index.bannerText")}}</H1>
          <H3
            class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-nova uil-maw-60ch uil-mt-8 uil-mb-0 uil-ml-auto uil-mr-auto uil-jc-center"
          ></H3>
          <div
            class="uil-mt-32 uil-mh-auto uil-d-flex uil-fxd-column uil-ai-center xs:uil-fxd-row xs:uil-jc-center lg:uil-mt-48"
          >
            <A
              v-if="lang=='en_US'"
              target="_blank"
              class="uil-app-none uil-bdw-0 uil-d-inline-flex uil-ai-center uil-bdr-max uil-td-none uil-jc-center uil-cursor-pointer uil-ff-hind uil-color-telluric uil-ph-24 lg:uil-ph-32 css-6wc57r"
              href="http://www.edag.info/public/EDAG_EN.pdf"
            >
              <span
                class="uil-tt-upper uil-lsp-big uil-ff-hind css-1ulj5n6 uil-color-telluric uil-fw-semibold"
              >{{$t("index.white")}}</span>
            </A>

            <A
              v-else
              target="_blank"
              class="uil-app-none uil-bdw-0 uil-d-inline-flex uil-ai-center uil-bdr-max uil-td-none uil-jc-center uil-cursor-pointer uil-ff-hind uil-color-telluric uil-ph-24 lg:uil-ph-32 css-6wc57r"
              href="http://www.edag.info/public/EDAG_CN.pdf"
            >
              <span
                class="uil-tt-upper uil-lsp-big uil-ff-hind css-1ulj5n6 uil-color-telluric uil-fw-semibold"
              >{{$t("index.white")}}</span>
            </A>
            <!-- <A
              class="uil-app-none uil-bdw-0 uil-d-inline-flex uil-ai-center uil-bdr-max uil-td-none uil-jc-center uil-cursor-pointer uil-ff-hind uil-color-moon uil-ph-24 lg:uil-ph-32 uil-mt-16 xs:uil-mt-0 xs:uil-ml-24 css-1q1tn8s"
              href="#"
            >
              <span
                class="uil-tt-upper uil-lsp-big uil-ff-hind css-1ulj5n6 uil-color-moon uil-fw-semibold"
              >{{$t("index.Wallet")}}</span>
            </A>-->
          </div>
        </div>
      </header>
      <section
        class="uil-ph-20 uil-ff-hind uil-bgc-moon uil-pb-48 lg:uil-pb-80 css-bevzk"
        id="system"
      >
        <div class="uil-mh-auto uil-maw-500 uil-pos-relative uil-z-2 md:uil-maw-1200">
          <header class="uil-mb-48 lg:uil-mb-80">
            <H2
              class="uil-fsz-24 uil-lh-small uil-fw-normal lg:uil-fsz-36 uil-ff-hind uil-color-solstice uil-m-0 uil-ta-center uil-mh-auto"
            >{{$t("index.systems")}}</H2>
            <P
              class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-15 uil-color-telluric uil-mt-8 uil-mb-0 uil-ta-center uil-mh-auto md:uil-w-70p lg:uil-mt-12 lg:uil-w-90p"
            >{{$t("index.overview")}}</P>
          </header>

          <H2
            class="uil-fsz-24 uil-lh-small uil-fw-normal lg:uil-fsz-36 uil-ff-hind uil-color-solstice uil-m-0 uil-ta-center uil-mh-auto"
            id="advantage"
          >{{$t("index.advantage")}}</H2>
          <div class="d-grid ghgap-48 pt-48 ta-center xs:g-3 lg:ggap-80 lg:pt-80">
            <p class="m-0">
              <img class="mb-20" src="./../assets/images/shensuoxing.png" style="height:100px;">
              <span
                class="d-block fsz-24 color-solstice lh-small mb-20"
              >{{$t("index.Scalability_tl")}}</span>
              <span
                class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-15 uil-color-telluric uil-mt-8 uil-mb-0 uil-ta-center uil-mh-auto md:uil-w-70p lg:uil-mt-12 lg:uil-w-90p"
              >{{$t("index.Scalability")}}</span>
            </p>
            <p class="m-0">
              <img class="mb-20" src="./../assets/images/kuozhanxing.png" style="height:100px;">
              <span
                class="d-block fsz-24 color-solstice lh-small mb-20"
              >{{$t("index.Expansibility_tl")}}</span>
              <span
                class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-15 uil-color-telluric uil-mt-8 uil-mb-0 uil-ta-center uil-mh-auto md:uil-w-70p lg:uil-mt-12 lg:uil-w-90p"
              >{{$t("index.Expansibility")}}</span>
            </p>
            <p class="m-0">
              <img class="mb-20" src="./../assets/images/hutongxing.png" style="height:100px;">
              <span
                class="d-block fsz-24 color-solstice lh-small mb-20"
              >{{$t("index.Interoperability_tl")}}</span>
              <span
                class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-15 uil-color-telluric uil-mt-8 uil-mb-0 uil-ta-center uil-mh-auto md:uil-w-70p lg:uil-mt-12 lg:uil-w-90p"
              >{{$t("index.Interoperability")}}</span>
            </p>
          </div>
          <h2
            class="uil-fsz-24 uil-lh-small uil-fw-normal lg:uil-fsz-36 uil-ff-hind uil-color-solstice uil-m-0 uil-ta-center uil-mh-auto mb-48"
            style="margin-top:140px;"
          >{{$t("index.characteristics")}}</h2>
          <div class="mt-48 lg:mt-80">
            <div class="md:uil-d-flex md:uil-ai-center uil-jc-center css-2381e3">
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pr-12 lg:uil-pr-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt
                  src="./../assets/images/Jp2p.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pl-12 lg:uil-pl-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.P2P_Network_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.P2P_Network")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="md:uil-d-flex md:uil-ai-center uil-jc-center md:uil-fxd-row-reverse css-eps56a uil-mt-48 lg:uil-mt-80"
            >
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pl-12 lg:uil-pl-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt="Recommended products illustration"
                  src="./../assets/images/Jjiedian.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pr-12 lg:uil-pr-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.Node_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.Node")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="md:uil-d-flex md:uil-ai-center uil-jc-center css-1u82iq0 uil-mt-48 lg:uil-mt-80"
            >
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pr-12 lg:uil-pr-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt
                  src="./../assets/images/Jzhangben.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pl-12 lg:uil-pl-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.Account_DAG_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.Account_DAG")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="md:uil-d-flex md:uil-ai-center uil-jc-center md:uil-fxd-row-reverse css-eps56a uil-mt-48 lg:uil-mt-80"
            >
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pl-12 lg:uil-pl-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt="Recommended products illustration"
                  src="./../assets/images/Jzhanghu.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pr-12 lg:uil-pr-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.Account_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.Account")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="md:uil-d-flex md:uil-ai-center uil-jc-center css-1u82iq0 uil-mt-48 lg:uil-mt-80"
            >
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pr-12 lg:uil-pr-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt
                  src="./../assets/images/Jjiaoyi.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pl-12 lg:uil-pl-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.Transaction_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.Transaction")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="md:uil-d-flex md:uil-ai-center uil-jc-center md:uil-fxd-row-reverse css-eps56a uil-mt-48 lg:uil-mt-80"
            >
              <div
                class="uil-mb-24 md:uil-fx-5 uil-ta-center md:uil-mb-0 md:uil-pl-12 lg:uil-pl-24"
              >
                <img
                  class="uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p"
                  alt="Recommended products illustration"
                  src="./../assets/images/Jjianzhengren.png"
                >
              </div>
              <div class="md:uil-fx-5 md:uil-pr-12 lg:uil-pr-24">
                <div class="uil-w-90p uil-m-auto">
                  <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                    <div>
                      <H3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8"
                      >{{$t("index.Witness_tl")}}</H3>
                      <P
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-lh-bigger lg:uil-fsz-18 uil-color-telluric uil-mt-0 uil-mb-0"
                      >{{$t("index.Witness")}}</P>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="uil-ph-20 uil-ff-hind uil-bgc-moon uil-pb-48 lg:uil-pb-80 uil-pt-48 lg:uil-pt-80"
      >
        <div class="uil-d-grid uil-maw-600 md:uil-maw-1200 uil-m-auto css-12xaahj" id="technology">
          <div
            class="uil-h-auto uil-bgs-cover uil-grstart-2 uil-gcstart-1 uil-gcend-4 css-9qalnf pos-relative"
          >
            <img
              v-if="lang=='en_US'"
              src="./../assets/images/middleImgEn.png"
              style="height: 100%;width: 100%;border-radius: 10px;"
            >
            <img
              v-else
              src="./../assets/images/middleImg.png"
              style="height: 100%;width: 100%;border-radius: 10px;"
            >
            <span class="starBtn" @click="open">{{$t("index.startAccess")}}</span>
          </div>
        </div>
      </section>
      <section
        class="uil-ph-20 uil-ff-hind uil-bgc-moon uil-pb-48  uil-pt-48 lg:uil-pt-80"
      >
        <div
          class="uil-mh-auto uil-maw-500 uil-pos-relative uil-z-2 md:uil-maw-1200 mb-120"
          id="news"
        >
          <div
            class="md:uil-d-flex  uil-jc-center md:uil-fxd-row-reverse css-eps56a "
          >
            <div class="uil-mb-24 md:uil-fx-6 md:uil-mb-0 md:uil-pl-12 lg:uil-pl-24" >
              <div class="uil-w-90p uil-m-auto">
                <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                  <div>
                    <h3
                      class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8 uil-ta-center"
                    >{{$t("index.weekly")}}</h3>
                    <div v-if="weeklyList && weeklyList.length>0">
                      <div class="uil-bxs-default uil-bdr-2 uil-ff-hind uil-p-24 mt-24 css-1pwkud"  v-for="(item,index) in weeklyList"
                      :key="index"
                      @click="goDetail(item)">
                      <h3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice mt-0 mb-8"
                      ></h3>
                      <!-- <h3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice mt-0 mb-8"
                      >Ja54549</h3> -->
                      <div
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-fsz-18 uil-color-telluric handle"
                      >
                        <div class="css-14j8w2o">
                         {{item.title}}
                        </div>
                      </div>
                    </div>
                    </div>

                    <div v-else style="    margin-top: 30px;
    text-align: center;">{{$t("index.nodata")}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="uil-mb-24 md:uil-fx-6 md:uil-mb-0 md:uil-pl-12 lg:uil-pl-24">
              <div class="uil-w-90p uil-m-auto">
                <div class="md:uil-d-flex md:uil-fxd-column md:uil-jc-between">
                  <div>
                    <h3
                      class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice uil-mt-0 uil-mb-8 uil-ta-center"
                    >{{$t("index.news")}}</h3>
                    <div
                      class="uil-bxs-default uil-bdr-2 uil-ff-hind uil-p-24 mt-24 css-1pwkud handle"
                      v-for="(item,index) in articleList"
                      :key="index"
                      @click="goDetail(item)"
                    >
                      <!-- <h3
                        class="uil-fsz-18 uil-lh-big uil-fw-normal lg:uil-fsz-24 uil-ff-hind uil-color-solstice mt-0 mb-8"
                      >wqwq</h3> -->
                      <div
                        class="uil-fw-normal uil-ff-hind uil-fsz-16 uil-lh-big lg:uil-fsz-18 uil-color-telluric"
                      >
                        <div class="css-14j8w2o">{{item.title}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="to_top">
        <i class="iconfont icon-fanhuidingbu"></i>
      </div>
      <div class="mobile_menu">
        <div class="type-right">
          <a href="javascript:;" class="mobile_menu_btn">
            <i class="iconfont icon-ego-menu"></i>
          </a> 
        </div>
        <ul class="type-left" >
          <li><a href="/">{{$t("index.home")}}</a></li>
          <li><a href="/#system">{{$t("index.systems")}}</a></li>
          <li><a href="/#advantage">{{$t("index.advantage")}}</a></li>
          <li><a href="/#technology">{{$t("index.characteristics")}}</a></li>
          <li><a @click="$router.push(`/article-list`)">{{$t("index.news")}}</a></li>
          <li><a @click="$router.push(`/weekly-list`)">{{$t("index.weekly")}}</a></li>
        </ul>
      </div>
    </main>
    <vfoot></vfoot>
  </div>
</template>

<script>
import vhead from "./common/header";
import vfoot from "./common/footer";
import https from "../https.js";
import $ from "../../node_modules/jquery/dist/jquery.js";

export default {
  name: "indexpage",
  data() {
    return {
      articleList: [],
      weeklyList:[],
      lang: ""
    };
  },
  created: function() {},
  mounted: function() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en_US");
      this.$i18n.locale = "en_US";
    }
    this.lang = localStorage.getItem("lang");
    this.getArticleList();
    this.getweeklyList();

    // this.$nextTick(()=>[
    //      this.goAnchor(window.location.hash)
    // ])
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= 200) {
            $(".to_top").show();
        } else {
            $(".to_top").hide();
        }
    });
    $(".to_top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    $('.mobile_menu_btn').click(function(){
        $(this).parent().next('.type-left').toggleClass('showListType');
        if($(this).parent().next('.type-left').hasClass("showListType")==true){
          $(this).find("i").addClass("icon-guanbi");
        }else{
          $(this).find("i").removeClass("icon-guanbi");
        }
    });
    $(".type-left li").click(function(){
      $(this).parent().removeClass("showListType");
      $(this).parent().parent().find(".type-right .mobile_menu_btn i").removeClass("icon-guanbi");
      // if($(this).parent().hasClass("showListType")==true){
      //   $(this).parent().parent().find(".mobile_menu_btn i").addClass("icon-guanbi");
      // }else{
      //   $(this).parent().parent().find(".mobile_menu_btn i").addClass("icon-ego-menu");
      // }
    })
  },
  components: {
    vhead,
    vfoot
  },

  methods: {
    getArticleList: function() {
      let oData = {
        type: 1,
        page:1,
        limit:4
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
     getweeklyList: function() {
      let oData = {
        type: 3,
        page:1,
        limit:4
      };
      https
        .fetchGet("/home/index/articleList", oData)
        .then(data => {
          this.weeklyList = data.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    goDetail: function(item) {
      this.$router.push({ path: "/article-detail", query: { id: item.id } });
    },
    open() {
      let message = this.$t("index.startAccessMessageBox");
      let info = this.$t("index.infoTetx");
      let comifm = this.$t("index.comifm");
      this.$alert(message, info, {
        confirmButtonText: comifm,
        callback: action => {}
      });
    },
    // goAnchor(selector) {
    //   // #这里是根据root 节点来scroll，可以自己根据需要调整scroll对象
    //       if(this.$el.querySelector(selector)){
    //       let anchor = this.$el.querySelector(selector)
    //       document.documentElement.scrollTop = anchor.offsetTop 
    //       }
    // },

  }
};
</script>


<style>
@import "./../assets/css/common.css";
.handle{
  cursor: pointer;
}
.newBox {
  text-align: center;
}
.css-1ulj5n6 {
  font-size: 11px;
}
.starBtn {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  bottom: 0;
  left: 46%;
  text-align: center;
  -webkit-box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
    0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  border-radius: 18px;
  z-index: 3;
  background: #f5f5fa;
  color: #97a3ff;
  cursor: pointer;
}
.to_top{
    position: fixed;
    bottom: 10px;
    display: flex;
    right: 14px;
    z-index: 9999;
    display: none;
}
.to_top i{
    font-size: 30px;
    color: #3a416f;
}
.type-left li{
  list-style: none;
}
a{
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #3a416f !important;
  /* font-size: 12px; */
}
.mobile_menu_btn{
  text-decoration: none;
}
.mobile_menu_btn i{
  font-size: 25px;
  color: #3a416f;
}
.mobile_menu{
    position: fixed;
    z-index: 99;
    right: 0;
    top: 48px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    /* background: #fff; */
}
.mobile_menu .type-left{
  width: 0;
  padding: 0;
  margin: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5); */
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  margin-left: 0;
  transition: width 0.4s;
  -moz-transition: width 0.4s;
  -webkit-transition: width 0.4s;
  -o-transition: width 0.4s;
  background: #fff; 
  box-shadow: 3.5px 6.062px 24px 0px rgba(140,140,140,0.53);
}
.mobile_menu .type-left li{
  font-size: 14px;
    text-align: center;
    /* height: 48px; */
    /* line-height: 48px; */
    margin: 15px 0;
    letter-spacing: 1px;
    font-weight: 600;
}
.mobile_menu .type-left li a{
  width: 100%;
  height: 100%;
}
.type-right{
  /* margin-left: 10px; */
  /* width: 25px; */
}
.type-right a{
  float: right;
  margin-right: 10px;
}
.type-right a:focus,.type-right a:hover{
  text-decoration: none;
}
.mobile_menu .showListType {
    height: 100%;
    width: 118px;
    transition: width 0.4s;
    -moz-transition: width 0.4s;
    -webkit-transition: width 0.4s;
    -o-transition: width 0.4s;
}
@media (min-width: 415px){
  .mobile_menu{
    display: none;
  }
}
.d-none {
    display: block!important;
}

@media (max-width: 970px){
  .starBtn{
        left: 41.5%;
  }
}
@media (max-width: 420px){
    .starBtn {
      font-size: 12px;
      display: inline-block;
      width: 50px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      bottom: 10px;
      left: 42.5%;
      text-align: center;
      box-shadow: 0 11px 16px -3px rgba(45,35,66,.3), 0 4px 5px 0 rgba(45,35,66,.4), inset 0 -2px 0 0 #cfd1e3;
      transform: translateY(-2px);
      border-radius: 18px;
      z-index: 3;
      background: #f5f5fa;
      color: #97a3ff;
      cursor: pointer;
    }
    .el-message-box__wrapper .el-message-box {
      width: 360px!important;
    }
}
</style>

