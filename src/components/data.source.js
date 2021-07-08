import React from 'react';
import p1 from "../images/portfolio/p1.png"
import p2 from "../images/portfolio/p2.png"
import p3 from "../images/portfolio/p3.png"
import p4 from "../images/portfolio/p4.png"
import p5 from "../images/portfolio/p5.png"
import p6 from "../images/portfolio/p6.png"
import p7 from "../images/portfolio/p7.png"
import p8 from "../images/portfolio/p8.png"

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      '../images/icon.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/#Services',
          children: [{ children: 'Services', name: 'text' }],
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
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/#Products',
          children: [{ children: 'Products', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '/#Portfolios',
          children: [{ children: 'Portfolios', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/contact',
          children: [{ children: 'Contact Us', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header4-item',
        children: {
          href: '/cn',
          children: [{ children: '中文', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      { name: 'title', children: 'Ok Systems', className: 'banner5-title' },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: 'Your web & mobile specialists',
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: 'We help You to Discover the best Digital Solution that Supports You and Your Business with Web and Mobile Applications Development',
      },
      {
        name: 'button1',
        className: 'banner5-button-wrapper',
        children: {
          href: '/contact',
          className: 'banner5-button',
          type: 'primary',
          children: 'Contact Us',
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
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};

// Service
export const ServiceDataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Products and Services' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Business & IT Consulting',
            },
            { name: 'content', children: 'We help you accelerate the digital transformation' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Web & Mobile Development',
            },
            {
              name: 'content',
              children: 'Customised design, integrated with cutting edge technologies',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'SEO && Data Analytics',
            },
            {
              name: 'content',
              children: 'SEO reports and analysis from our Google Partner',
            },
          ],
        },
      },
    ],
  },
};

// Product
export const ProductDataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'The solutions Ok Systems provide',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: 'Our Focus',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'E-commerce' },
          content: {
            className: 'content3-content',
            children:
              'Build your shops online',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Retail & Resturant' },
          content: {
            className: 'content3-content',
            children:
              'Help you better improve customer service with ordering, and managing your inventory, ',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Human Resources & Workforce' },
          content: {
            className: 'content3-content',
            children:
              'An ERP that supports resilience and operational excellence',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Customised Solution' },
          content: {
            className: 'content3-content',
            children:
              'Want something special, we can help you out',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Cloud Migration' },
          content: {
            className: 'content3-content',
            children:
              'Want to minimise your operating cost ? We can help you with this',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Online Booking' },
          content: {
            className: 'content3-content',
            children:
              'Save your paperwork time, book an appointment and send confirmation with SMS, email, etc...',
          },
        },
      },
    ],
  },
};

// 客户累计
export const StatDataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: 'We have got' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '+' },
              toText: true,
              children: '100',
            },
            children: { className: 'feature6-text', children: 'Customers' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '+' },
              toText: true,
              children: '300',
            },
            children: { className: 'feature6-text', children: 'Web and apps' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '%' },
              toText: true,
              children: '99.99',
            },
            children: { className: 'feature6-text', children: 'Satisfaction' },
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
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Portfolios', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: 'Some of the project we have completed',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              p1,
          },
          content: { children: 'Car Care Service' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p2,
          },
          content: { children: 'Travel Agency' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p3,
          },
          content: { children: 'Real Estate' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p4,
          },
          content: { children: 'Online Business' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p5,
          },
          content: { children: 'Core Consulting' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p6,
          },
          content: { children: 'Interior Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p7,
          },
          content: { children: 'Admin Dashboard' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
            p8,
          },
          content: { children: 'Fitness' },
        },
      },
    ],
  },
};

// 客户评价
export const TestimonialsDataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'Thanks to Ok Systems, we have our business online and got more exposure',
              className: 'teams0-content',
            },
            { name: 'title', children: 'Jack Jones', className: 'teams0-h1' },
            {
              name: 'content2',
              children: 'Small Business Owner',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'Great job',
              className: 'teams0-content',
            },
            { name: 'title', children: 'Lily Chou', className: 'teams0-h1' },
            {
              name: 'content2',
              children: 'Returant Manager',
              className: 'teams0-content',
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
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: 'Book a Consultation Today', className: 'title-h1' },
      {
        name: 'content',
        children:
          'Our experts will help you find out the best',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: 'and answer your doubts',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '/contact', children: 'Book' } },
  },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018-2021 <a href="https://oksystems.com.au">Ok Systems</a> All Rights
        Reserved
      </span>
    ),
  },
};

export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Contact Us Today</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <span>
            <p>
              Do you have any questions about our service, leave a message here,
              and we will get back soon.
            </p>
          </span>
        </span>
      </span>
    ),
  },
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
};
