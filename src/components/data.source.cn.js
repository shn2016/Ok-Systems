import React from "react";
import p1 from "../images/portfolio/p1.png";
import p2 from "../images/portfolio/p2.png";
import p3 from "../images/portfolio/p3.png";
import p4 from "../images/portfolio/p4.png";
import p5 from "../images/portfolio/p5.png";
import p6 from "../images/portfolio/p6.png";
import p7 from "../images/portfolio/p7.png";
import p8 from "../images/portfolio/p8.png";
import service1 from "../images/service/service1.png";
import service2 from "../images/service/service2.png";
import service3 from "../images/service/service3.png";
import service4 from "../images/service/service4.png";
import service5 from "../images/service/service5.png";
import service6 from "../images/service/service6.png";
import service7 from "../images/service/service7.png";
import service8 from "../images/service/service8.png";
import service9 from "../images/service/service9.png";
import t1 from "../images/testinomials/t1.png";
import t2 from "../images/testinomials/t2.png";
import banner from "../images/banner.png";

export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children: "../images/icon.png",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "/cn/#Services",
          children: [{ children: "服务", name: "text" }],
        },
        // subItem: [
        //   {
        //     name: 'sub0',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '企业级 UI 设计体系',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     name: 'sub1',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '企业级 UI 设计体系',
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "/cn/#Products",
          children: [{ children: "产品", name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "/cn/#Portfolios",
          children: [{ children: "案例", name: "text" }],
        },
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "/cn/contact",
          children: [{ children: "联系我们", name: "text" }],
        },
      },
      {
        name: "item4",
        className: "header4-item",
        children: {
          href: "/",
          children: [{ children: "English", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};

export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      { name: "title", children: "Ok Systems", className: "banner5-title" },
      {
        name: "explain",
        className: "banner5-explain",
        children: "你的网页开发专家",
      },
      {
        name: "content",
        className: "banner5-content",
        children: "专注于为中小企业提供完整的数字化解决方案。",
      },
      {
        name: "button1",
        className: "banner5-button-wrapper",
        children: {
          href: "/contact",
          className: "banner5-button",
          type: "primary",
          children: "联系我们",
        },
      },
      // {
      //   name: 'button2',
      //   className: 'banner5-button-wrapper',
      //   children: {
      //     href: '#Services',
      //     className: 'banner5-button',
      //     type: 'primary',
      //     children: 'Contact Us',
      //   },
      // },
    ],
  },
  image: {
    className: "banner5-image",
    children: banner,
  },
};

// Service
export const ServiceDataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "产品与服务" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: service1,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "IT咨询",
            },
            { name: "content", children: "帮你加速数字化进程" },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: service2,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "网页&移动开发",
            },
            {
              name: "content",
              children: "解决不同需求，提供定制化方案",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children: service3,
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "SEO & 数据分析",
            },
            {
              name: "content",
              children: "作为Google Partner，我们更了解SEO",
            },
          ],
        },
      },
    ],
  },
};

// Product
export const ProductDataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "我们提供的解决方案",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "专注于",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service4,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "电商平台" },
          content: {
            className: "content3-content",
            children: "帮你拓展在线业务",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service5,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "零售 & 餐饮" },
          content: {
            className: "content3-content",
            children: "提供预定、库存管理、销售管理等 ",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service6,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "企业人力资源" },
          content: {
            className: "content3-content",
            children: "自动化管理人力资源，解决人工难题",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service7,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "高级定制" },
          content: {
            className: "content3-content",
            children: "提供个性化服务",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service8,
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: "服务器迁移，云托管",
          },
          content: {
            className: "content3-content",
            children: "降低运营成本，迁移服务器，云上运营",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: service9,
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "在线预订" },
          content: {
            className: "content3-content",
            children: "在线预约，邮件、短信提醒",
          },
        },
      },
    ],
  },
};

// 客户累计
export const StatDataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: { className: "feature6-title-text", children: "我们已经有" },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "+" },
              toText: true,
              children: "100",
            },
            children: { className: "feature6-text", children: "客户" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "+" },
              toText: true,
              children: "300",
            },
            children: { className: "feature6-text", children: "网站和应用" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "%" },
              toText: true,
              children: "99.99",
            },
            children: { className: "feature6-text", children: "满意度" },
          },
        ],
        // },
        // {
        //   title: { className: 'feature6-title-text', children: '服务指标' },
        //   className: 'feature6-item',
        //   name: 'block1',
        //   children: [
        //     {
        //       md: 8,
        //       xs: 24,
        //       name: 'child0',
        //       className: 'feature6-number-wrapper',
        //       number: {
        //         className: 'feature6-number',
        //         unit: { className: 'feature6-unit', children: '万' },
        //         toText: true,
        //         children: '116+',
        //       },
        //       children: { className: 'feature6-text', children: '模型数据' },
        //     },
        //     {
        //       md: 8,
        //       xs: 24,
        //       name: 'child1',
        //       className: 'feature6-number-wrapper',
        //       number: {
        //         className: 'feature6-number',
        //         unit: { className: 'feature6-unit', children: '亿' },
        //         toText: true,
        //         children: '1.17',
        //       },
        //       children: { className: 'feature6-text', children: '模型迭代数量' },
        //     },
        //     {
        //       md: 8,
        //       xs: 24,
        //       name: 'child2',
        //       className: 'feature6-number-wrapper',
        //       number: {
        //         className: 'feature6-number',
        //         unit: { className: 'feature6-unit', children: '亿' },
        //         toText: true,
        //         children: '2.10',
        //       },
        //       children: { className: 'feature6-text', children: '训练样本数量' },
        //     },
        //   ],
      },
    ],
  },
};

// Portfolio
export const PortfolioDataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "案例", className: "title-h1" },
      {
        name: "content",
        className: "title-content",
        children: "项目展示",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p1,
          },
          content: { children: "汽修公司" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p2,
          },
          content: { children: "旅游中介" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p3,
          },
          content: { children: "房地产" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p4,
          },
          content: { children: "电商" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p5,
          },
          content: { children: "Core 咨询" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p6,
          },
          content: { children: "室内设计" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p7,
          },
          content: { children: "管理界面" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: p8,
          },
          content: { children: "健身房" },
        },
      },
    ],
  },
};

// 客户评价
export const TestimonialsDataSource = {
  wrapper: { className: "home-page-wrapper teams0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page teams0" },
  BannerAnim: {
    className: "banner-anim",
    children: [
      {
        name: "elem0",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children: t1,
              className: "teams0-image",
            },
            {
              name: "content",
              children:
                "Thanks to Ok Systems, we have our business online and got more exposure",
              className: "teams0-content",
            },
            { name: "title", children: "Jack Jones", className: "teams0-h1" },
            {
              name: "content2",
              children: "Small Business Owner",
              className: "teams0-content",
            },
          ],
        },
      },
      {
        name: "elem1",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children: t2,
              className: "teams0-image",
            },
            {
              name: "content",
              children: "Great job",
              className: "teams0-content",
            },
            { name: "title", children: "Lily Chou", className: "teams0-h1" },
            {
              name: "content2",
              children: "Returant Manager",
              className: "teams0-content",
            },
          ],
        },
      },
    ],
  },
};

// 最后的
export const BookDataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: "现在开始咨询",
        className: "title-h1",
      },
      {
        name: "content",
        children: "想要咨询业务，联系我们",
        className: "title-content",
      },
      {
        name: "content2",
        children: "为你答疑解惑",
        className: "title-content",
      },
    ],
  },
  button: {
    className: "",
    children: {
      a: { className: "button", href: "/cn/contact", children: "预约" },
    },
  },
};

export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2018-2021 <a href="https://oksystems.com.au">Ok Systems</a> All Rights
        Reserved
      </span>
    ),
  },
};

export const Feature20DataSource = {
  wrapper: { className: "home-page-wrapper content2-wrapper" },
  OverPack: { className: "home-page content2", playScale: 0.3 },
  imgWrapper: { className: "content2-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png",
  },
  textWrapper: { className: "content2-text", md: 14, xs: 24 },
  title: {
    className: "content2-title",
    children: (
      <span>
        <p>联系我们</p>
      </span>
    ),
  },
  content: {
    className: "content2-content",
    children: (
      <span>
        <span>
          <span>
            <p>如果有任何关于产品问题，服务咨询，请在下方联系我们。</p>
          </span>
        </span>
      </span>
    ),
  },
};

export const SEODataSource = {
  lang: "ch",
  title: "墨尔本网站开发",
  description:
    "Ok Sysytems, 服务于中小企业, 专注于提供经济解决方案，为企业削减成本，提供自动化需求",
  keywords:
    "Ok Systems, 墨尔本网站开发, 墨尔本网页开发， 墨尔本电商网站， 澳洲网页开发， 澳洲网站开发",
  twitter: {
    label1: "阅读时间",
    data1: "别担心，不长",
  },
  robots: "index, follow",
};

export default {
  Banner50DataSource,
  ServiceDataSource,
  StatDataSource,
  ProductDataSource,
  TestimonialsDataSource,
  BookDataSource,
  PortfolioDataSource,
  Nav30DataSource,
  Footer00DataSource,
  Feature20DataSource,
  SEODataSource,
};
