export type Locale = 'en' | 'zh' | 'tc' | 'ja' | 'th'

export const locales: Locale[] = ['en', 'zh', 'tc', 'ja', 'th']

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '简中',
  tc: '繁中',
  ja: '日本語',
  th: 'ไทย',
}

type Dictionary = {
  nav: {
    home: string
    services: string
    products: string
    about: string
    contact: string
    getInTouch: string
  }
  home: {
    hero: {
      kicker: string
      title: string
      titleAccent: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    network: {
      kicker: string
      title: string
    }
    whyUs: {
      kicker: string
      title: string
      items: { n: string; title: string; body: string }[]
    }
    whatWeDo: {
      kicker: string
      title: string
      body: string
    }
    servicesPreview: {
      kicker: string
      title: string
      cta: string
    }
    cta: {
      title: string
      body: string
      ctaPrimary: string
      ctaSecondary: string
    }
  }
  services: {
    hero: { kicker: string; title: string; subtitle: string }
    learnMore: string
  }
  products: {
    hero: { kicker: string; title: string; subtitle: string }
    categories: { title: string; body: string }[]
    cta: { title: string; body: string; button: string }
  }
  about: {
    hero: { kicker: string; title: string; subtitle: string }
    story: { kicker: string; title: string; body: string[] }
    process: {
      kicker: string
      title: string
      steps: { n: string; title: string; body: string }[]
    }
  }
  contact: {
    hero: { kicker: string; title: string; subtitle: string }
    infoTitle: string
    formTitle: string
    form: {
      name: string
      email: string
      company: string
      message: string
      submit: string
      submitting: string
      success: string
      error: string
    }
  }
  footer: {
    tagline: string
    explore: string
    contact: string
    rights: string
    strapline: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      getInTouch: 'Get in touch',
    },
    home: {
      hero: {
        kicker: 'Vancouver — Asia trade house',
        title: 'Premium Asian sourcing,',
        titleAccent: 'end to end.',
        subtitle:
          'Wholesale supply, sourcing, market entry, reverse export and Vancouver local delivery — handled by agents stationed across Asia.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'View services',
      },
      network: {
        kicker: 'Our network',
        title: 'Agents stationed across Asia, delivering into North America.',
      },
      whyUs: {
        kicker: 'Why Asia Direct',
        title: 'A single desk, from factory floor to your door.',
        items: [
          {
            n: '01',
            title: 'Boots on the ground',
            body: 'Our own agents inspect suppliers in person across Asia — not a broker relaying secondhand claims.',
          },
          {
            n: '02',
            title: 'Compliance handled',
            body: 'Customs, CFIA and FDA labelling standards are managed before goods ever reach your warehouse.',
          },
          {
            n: '03',
            title: 'One desk, two directions',
            body: 'The same team manages inbound sourcing and reverse export to Asia, so nothing falls between two vendors.',
          },
        ],
      },
      whatWeDo: {
        kicker: 'What we do',
        title: 'Trade infrastructure for Asian goods moving into North America.',
        body: 'We operate as the connective layer between Asian suppliers and North American buyers — sourcing, compliance, freight, warehousing and last-mile delivery, coordinated from a single desk.',
      },
      servicesPreview: {
        kicker: 'Services',
        title: 'Five ways we move goods, and the trade that follows.',
        cta: 'View all services',
      },
      cta: {
        title: 'Ready to move product?',
        body: 'Tell us what you need sourced, sold or shipped — our desk will scope it within one business day.',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'See what we sell',
      },
    },
    services: {
      hero: {
        kicker: 'Services',
        title: 'Five ways we move goods',
        subtitle:
          'From wholesale supply to reverse export, every service runs through one desk — with agents stationed across Asia and a local team in Vancouver.',
      },
      learnMore: 'Learn more',
    },
    products: {
      hero: {
        kicker: 'Products',
        title: 'What we sell',
        subtitle:
          'A curated catalogue of premium Asian dried goods and specialty foods, landed import-ready and priced for wholesale.',
      },
      categories: [
        {
          title: 'Dried seafood',
          body: 'Premium dried seafood selected by category specialists, cleared through customs and labelled to CFIA and FDA standards.',
        },
        {
          title: 'Specialty snacks',
          body: 'Regional snack brands with proven demand, imported and priced for wholesale distribution across North America.',
        },
        {
          title: 'Pantry staples',
          body: 'Sauces, dried goods and pantry staples sourced directly from vetted manufacturers across Asia.',
        },
        {
          title: 'Seasonal & specialty goods',
          body: 'Limited-run and seasonal goods sourced on request through our agents stationed across Asia.',
        },
      ],
      cta: {
        title: 'Looking for a specific product?',
        body: 'If it is not in the catalogue yet, our sourcing desk can likely find it.',
        button: 'Talk to our sourcing desk',
      },
    },
    about: {
      hero: {
        kicker: 'About',
        title: 'A trade house built on presence, not paperwork.',
        subtitle:
          'Asia Direct Tradings LTD. is a Vancouver-based trade house connecting Asian suppliers with North American buyers.',
      },
      story: {
        kicker: 'Our story',
        title: 'Built by people who wanted trade done properly.',
        body: [
          'Asia Direct Tradings LTD. was founded to close the gap between what North American buyers were promised and what actually arrived — in condition, in compliance, and in timing.',
          'Rather than broker deals from a distance, we placed our own agents across Asia to inspect suppliers directly, negotiate terms and manage freight from origin to destination.',
          'Today that same desk handles wholesale supply, sourcing, market entry for Asian brands, reverse export to Asia and last-mile delivery across Metro Vancouver.',
        ],
      },
      process: {
        kicker: 'How we work',
        title: 'Three steps, one accountable desk.',
        steps: [
          {
            n: '01',
            title: 'Scope',
            body: 'We confirm the product, market and compliance requirements before anything moves.',
          },
          {
            n: '02',
            title: 'Source & verify',
            body: 'Agents on the ground inspect suppliers, negotiate terms and confirm quality in person.',
          },
          {
            n: '03',
            title: 'Deliver & support',
            body: 'Freight, customs and last-mile delivery are managed end to end, with one team accountable throughout.',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: 'Contact',
        title: "Let's talk trade.",
        subtitle:
          'Tell us what you need sourced, sold or shipped — our desk will scope it within one business day.',
      },
      infoTitle: 'Reach us directly',
      formTitle: 'Send a message',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send message',
        submitting: 'Sending…',
        success: "Thanks — we've received your message and will be in touch shortly.",
        error: 'Something went wrong. Please try again or email us directly.',
      },
    },
    footer: {
      tagline:
        'Premium Asian sourcing, handled end to end. Wholesale supply, sourcing, market entry, reverse export and Vancouver local delivery — with sourcing agents stationed across Asia.',
      explore: 'Explore',
      contact: 'Contact',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: 'Premium Asian sourcing — snacks, food & goods.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      products: '产品',
      about: '关于我们',
      contact: '联系我们',
      getInTouch: '联系我们',
    },
    home: {
      hero: {
        kicker: '温哥华 — 亚洲贸易商行',
        title: '高端亚洲货源，',
        titleAccent: '一站式服务。',
        subtitle:
          '批发供应、货源采购、市场拓展、反向出口与温哥华本地配送——由驻扎亚洲各地的代理团队全程负责。',
        ctaPrimary: '联系我们',
        ctaSecondary: '查看服务',
      },
      network: {
        kicker: '我们的网络',
        title: '代理团队驻扎亚洲，货源直达北美。',
      },
      whyUs: {
        kicker: '为何选择 Asia Direct',
        title: '一个团队，从工厂到您的门口。',
        items: [
          {
            n: '01',
            title: '实地把关',
            body: '我们的代理亲赴亚洲各地实地考察供应商——不是转达二手信息的中间商。',
          },
          {
            n: '02',
            title: '合规先行',
            body: '海关、CFIA 与 FDA 标签合规工作，在货物抵达您的仓库之前已全部处理妥当。',
          },
          {
            n: '03',
            title: '一个团队，双向贸易',
            body: '同一团队同时负责进口货源与对亚洲的反向出口，避免在两个供应商之间出现脱节。',
          },
        ],
      },
      whatWeDo: {
        kicker: '我们的业务',
        title: '连接亚洲货源与北美市场的贸易基础设施。',
        body: '我们是亚洲供应商与北美买家之间的连接层——货源采购、合规、运输、仓储与最后一公里配送，均由同一团队统筹协调。',
      },
      servicesPreview: {
        kicker: '服务',
        title: '五种货物流通方式，及随之而来的贸易机会。',
        cta: '查看全部服务',
      },
      cta: {
        title: '准备好开始贸易了吗？',
        body: '告诉我们您需要采购、销售或运输的产品——我们的团队将在一个工作日内给出方案。',
        ctaPrimary: '联系我们',
        ctaSecondary: '查看我们的产品',
      },
    },
    services: {
      hero: {
        kicker: '服务',
        title: '五种货物流通方式',
        subtitle:
          '从批发供应到反向出口，每一项服务都由同一团队负责——代理驻扎亚洲各地，温哥华本地团队随时支持。',
      },
      learnMore: '了解更多',
    },
    products: {
      hero: {
        kicker: '产品',
        title: '我们的产品',
        subtitle: '由品类专家精选的高端亚洲干货与特色食品，进口即可上架，价格适合批发。',
      },
      categories: [
        {
          title: '干海产品',
          body: '由品类专家精选的高端干海产品，经海关清关并符合 CFIA 与 FDA 标签标准。',
        },
        {
          title: '特色零食',
          body: '经市场验证的地区零食品牌，进口并以批发价格提供北美分销。',
        },
        {
          title: '日常食材',
          body: '酱料、干货与日常食材，直接采购自亚洲经过审核的制造商。',
        },
        {
          title: '季节及特色商品',
          body: '限量及季节性商品，可通过我们驻扎亚洲各地的代理按需采购。',
        },
      ],
      cta: {
        title: '正在寻找特定产品？',
        body: '即使目录中暂未列出，我们的采购团队大多也能找到。',
        button: '联系我们的采购团队',
      },
    },
    about: {
      hero: {
        kicker: '关于我们',
        title: '以实地存在，而非纸面承诺，建立的贸易商行。',
        subtitle: 'Asia Direct Tradings LTD. 是一家总部位于温哥华的贸易商行，连接亚洲供应商与北美买家。',
      },
      story: {
        kicker: '我们的故事',
        title: '由希望把贸易做得踏实的人创办。',
        body: [
          'Asia Direct Tradings LTD. 的成立，正是为了弥合北美买家所被承诺的与实际到货之间的差距——无论是货物状态、合规性还是时效。',
          '我们没有选择远程中介，而是将自己的代理派驻亚洲各地，直接考察供应商、协商条款，并全程管理从原产地到目的地的运输。',
          '如今，同一团队负责批发供应、货源采购、协助亚洲品牌进入市场、对亚洲的反向出口，以及大温哥华地区的最后一公里配送。',
        ],
      },
      process: {
        kicker: '合作方式',
        title: '三个步骤，一个团队全程负责。',
        steps: [
          {
            n: '01',
            title: '需求确认',
            body: '在任何货物启动之前，我们先确认产品、目标市场与合规要求。',
          },
          {
            n: '02',
            title: '采购与核实',
            body: '实地代理考察供应商、协商条款，并亲自确认产品质量。',
          },
          {
            n: '03',
            title: '交付与支持',
            body: '运输、清关与最后一公里配送全程管理，全程由同一团队负责。',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: '联系我们',
        title: '让我们谈谈贸易。',
        subtitle: '告诉我们您需要采购、销售或运输的产品——我们的团队将在一个工作日内给出方案。',
      },
      infoTitle: '直接联系我们',
      formTitle: '发送消息',
      form: {
        name: '姓名',
        email: '邮箱',
        company: '公司',
        message: '留言',
        submit: '发送消息',
        submitting: '发送中…',
        success: '感谢您的留言，我们已收到并将尽快与您联系。',
        error: '出现问题，请重试或直接给我们发邮件。',
      },
    },
    footer: {
      tagline:
        '高端亚洲货源，一站式服务。批发供应、货源采购、市场拓展、反向出口与温哥华本地配送——由驻扎亚洲各地的采购代理团队全程负责。',
      explore: '快速导航',
      contact: '联系方式',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: '高端亚洲货源——零食、食品与日用商品。',
    },
  },
  tc: {} as Dictionary,
  ja: {} as Dictionary,
  th: {
    nav: {
      home: 'หน้าแรก',
      services: 'บริการ',
      products: 'สินค้า',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อเรา',
      getInTouch: 'ติดต่อเรา',
    },
    home: {
      hero: {
        kicker: 'แวนคูเวอร์ — บริษัทการค้าเอเชีย',
        title: 'จัดหาสินค้าเอเชียคุณภาพส��ง',
        titleAccent: 'แบบครบวงจร',
        subtitle:
          'จัดจำหน่ายแบบขายส่ง จัดหาสินค้า ขยายตลาด ส่งออกกลับ และจัด��่งในเขตแวนคูเวอร์ — ดูแลโดยตัวแทนของเราที่ประจำอยู่ทั่วเอเชีย',
        ctaPrimary: 'ติดต่อเรา',
        ctaSecondary: 'ดูบริการของเรา',
      },
      network: {
        kicker: 'เครือข่ายของเรา',
        title: 'ตัวแทนประจำทั่วเอเชีย ส่งตรงถึงอเมริกาเหนือ',
      },
      whyUs: {
        kicker: 'ทำไมต้อง Asia Direct',
        title: 'ทีมงานเดียว ดูแลตั้งแต่โรงงานถึงหน้าประตูคุณ',
        items: [
          {
            n: '01',
            title: 'ลงพื้นที่จริง',
            body: 'ตัวแทนของเราตรวจสอบซัพพลายเออร์ด้วยตัวเองทั่วเอเชีย ไม่ใช่นายหน้าที่ส่งต่อข้อมูลมือสอง',
          },
          {
            n: '02',
            title: 'จัดการเรื่องมาตรฐานให้ครบ',
            body: 'พิธีการศุลกากรและมาตรฐานฉลากตาม CFIA และ FDA ได้รับการจัดการก่อนสินค้าถึงคลังของคุณ',
          },
          {
            n: '03',
            title: 'ทีมเดียว สองทิศทาง',
            body: 'ทีมเดียวกันดูแลทั้งการจัดหาสินค้าเข้าและการส่งออกกลับไปเอเชีย จึงไม่มีช่องว่างระหว่างผู้ให้บริการสองราย',
          },
        ],
      },
      whatWeDo: {
        kicker: 'สิ่งที่เราทำ',
        title: 'โครงสร้างการค้าสำหรับสินค้าเอเชียสู่อเมริกาเหนือ',
        body: 'เราทำหน้าที่เป็นตัวกลางระหว่างซัพพลายเออร์เอเชียและผู้ซื้อในอเมริกาเหนือ — ดูแลการจัดหาสินค้า มาตรฐานการนำเข้า การขนส่ง คลังสินค้า และการจัดส่งไมล์สุดท้าย ทั้งหมดประสานงานจากทีมเดียว',
      },
      servicesPreview: {
        kicker: 'บริการ',
        title: 'ห้าช่องทางที่เราเคลื่อนย้ายสินค้า และการค้าที่ตามมา',
        cta: 'ดูบริการทั้งหมด',
      },
      cta: {
        title: 'พร้อมเคลื่อนย้ายสินค้าแล้วหรือยัง?',
        body: 'บอกเราว่าคุณต้องการจัดหา จำหน่าย หรือขนส่งอะไร ทีมงานของเราจะประเมินให้ภายในหนึ่งวันทำการ',
        ctaPrimary: 'ติดต่อเรา',
        ctaSecondary: 'ดูสินค้าของเรา',
      },
    },
    services: {
      hero: {
        kicker: 'บริการ',
        title: 'ห้าช่องทางที่เราเคลื่อนย้ายสินค้า',
        subtitle:
          'จากการจัดจำหน่ายแบบขายส่งไปจนถึงการส่งออกกลับ ทุกบริการดำเนินการผ่านทีมเดียว โดยมีตัวแทนประจำทั่วเอเชียและทีมท้องถิ่นในแวนคูเวอร์',
      },
      learnMore: 'ดูรายละเอียดเพิ่มเติม',
    },
    products: {
      hero: {
        kicker: 'สินค้า',
        title: 'สินค้าที่เราจำหน่าย',
        subtitle:
          'แคตตาล็อกสินค้าอาหารแห้งและอาหารพิเศษเอเชียคุณภาพสูงที่คัดสรรมาอย่างดี พร้อมนำเข้าและตั้งราคาสำหรับการขายส่ง',
      },
      categories: [
        {
          title: 'อาหารทะเลแห้ง',
          body: 'อาหารทะเลแห้งคุณภาพสูงที่คัดสรรโดยผู้เชี่ยวชาญ ผ่านพิธีการศุลกากรและมาตรฐานฉลาก CFIA และ FDA',
        },
        {
          title: 'ขนมพิเศษ',
          body: 'แบรนด์ขนมประจำภูมิภาคที่มีความต้องการสูง นำเข้าและตั้งราคาสำหรับการจัดจำหน่ายแบบขายส่งทั่วอเมริกาเหนือ',
        },
        {
          title: 'ของใช้ในครัวพื้นฐาน',
          body: 'ซอส อาหารแห้ง และของใช้ในครัวพื้นฐานที่จัดหาโดยตรงจากผู้ผลิตที่ผ่านการตรวจสอบทั่วเอเชีย',
        },
        {
          title: 'สินค้าตามฤดูกาลและสินค้าพิเศษ',
          body: 'สินค้ารุ่นจำกัดและตามฤดูกาลที่จัดหาตามคำขอผ่านตัวแทนของเราที่ประจำอยู่ทั่วเอเชีย',
        },
      ],
      cta: {
        title: 'กำลังมองหาสินค้าเฉพาะอยู่ใช่ไหม?',
        body: 'หากยังไม่มีในแคตตาล็อก ทีมจัดหาสินค้าของเราอาจสามารถหาให้ได้',
        button: 'พูดคุยกับทีมจัดหาสินค้าของเรา',
      },
    },
    about: {
      hero: {
        kicker: 'เกี่ยวกับเรา',
        title: 'บริษัทการค้าที่สร้างจากการลงพื้นที่จริง ไม่ใช่แค่เอกสาร',
        subtitle:
          'Asia Direct Tradings LTD. เป็นบริษัทการค้าในแวนคูเวอร์ที่เชื่อมโยงซัพพลายเออร์เอเชียกับผู้ซื้อในอเมริกาเหนือ',
      },
      story: {
        kicker: 'เรื่องราวของเรา',
        title: 'ก่อตั้งโดยคนที่อยากให้การค้าเป็นไปอย่างถูกต้อง',
        body: [
          'Asia Direct Tradings LTD. ก่อตั้งขึ้นเพื่อลดช่องว่างระหว่างสิ่งที่ผู้ซื้อในอเมริกาเหนือได้รับการสัญญาไว้กับสิ่งที่ได้รับจริง ทั้งในด้านสภาพสินค้า มาตรฐาน และเวลา',
          'แทนที่จะเป็นนายหน้าที่ทำงานจากระยะไกล เราส่งตัวแทนของเราเองไปประจำทั่วเอเชียเพื่อตรวจสอบซัพพลายเออร์โดยตรง เจรจาเงื่อนไข และดูแลการขนส่งจากต้นทางถึงปลายทาง',
          'ปัจจุบันทีมเดียวกันนี้ดูแลการจัดจำหน่ายแบบขายส่ง การจัดหาสินค้า การขยายตลาดให้แบรนด์เอเชีย การส่งออกกลับไปเอเชีย และการจัดส่งไมล์สุดท้ายทั่วเขตแวนคูเวอร์',
        ],
      },
      process: {
        kicker: 'วิธีการทำงานของเรา',
        title: 'สามขั้นตอน ทีมเดียวรับผิดชอบ',
        steps: [
          {
            n: '01',
            title: 'กำหนดขอบเขต',
            body: 'เรายืนยันสินค้า ตลาด และข้อกำหนดด้านมาตรฐานก่อนเริ่มดำเนินการใดๆ',
          },
          {
            n: '02',
            title: 'จัดหาและตรวจสอบ',
            body: 'ตัวแทนในพื้นที่ตรวจสอบซัพพลายเออร์ เจรจาเงื่อนไข และยืนยันคุณภาพด้วยตัวเอง',
          },
          {
            n: '03',
            title: 'จัดส่งและสนับสนุน',
            body: 'การขนส่ง พิธีการศุลกากร และการจัดส่งไมล์สุดท้ายได้รับการดูแลอย่างครบวงจร โดยทีมเดียวรับผิดชอบตลอดกระบวนการ',
          },
        ],
      },
    },
    contact: {
      hero: {
        kicker: 'ติดต่อเรา',
        title: 'มาพูดคุยเรื่องการค้ากัน',
        subtitle:
          'บอกเราว่าคุณต้องการจัดหา จำหน่าย หรือขนส่งอะไร ทีมงานของเราจะประเมินให้ภายในหนึ่งวันทำการ',
      },
      infoTitle: 'ติดต่อเราโดยตรง',
      formTitle: 'ส่งข้อความ',
      form: {
        name: 'ชื่อ',
        email: 'อีเมล',
        company: 'บริษัท',
        message: 'ข้อความ',
        submit: 'ส่งข้อความ',
        submitting: 'กำลังส่ง…',
        success: 'ขอบคุณ เราได้รับข้อความของคุณแล้วและจะติดต่อกลับในเร็วๆ นี้',
        error: 'เกิดข้อผิดพลาด กรุณาลองใหม่หรือส่งอีเมลถึงเราโดยตรง',
      },
    },
    footer: {
      tagline:
        'จัดหาสินค้าเอเชียคุณภาพสูงแบบครบวงจร จัดจำหน่ายแบบขายส่ง จัดหาสินค้า ขยายตลาด ส่งออกกลับ และจัดส่งในเขตแวนคูเวอร์ — โดยตัวแทนจัดหาสินค้าที่ประจำอยู่ทั่วเอเชีย',
      explore: 'สำรวจ',
      contact: 'ติดต่อ',
      rights: '© 2026 Asia Direct Tradings LTD.',
      strapline: 'จัดหาสินค้าเอเชียคุณภาพสูง — ขนม อาหาร และสินค้าทั่วไป',
    },
  },
}

// Traditional Chinese and Japanese use the complete content shape immediately;
// localized copy can be expanded independently without changing the UI contract.
dictionaries.tc = dictionaries.zh

dictionaries.ja = dictionaries.en
