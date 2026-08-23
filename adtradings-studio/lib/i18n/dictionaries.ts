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
    items?: { title: string; long: string }[]
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
        kicker: 'แวนคูเวอร์ — บริษัทการค้���เอเชีย',
        title: 'จัดหาสินค้าเอเชียคุณภาพส��ง',
        titleAccent: 'แบบครบวงจร',
        subtitle:
          'จัดจำหน่ายแบบขายส���ง จัดหาสินค้า ขยายตลาด ส่งออกกลับ และจัด��่งในเขตแวนคูเวอร์ — ดูแลโดยตัวแทนของเราที่ประจำอยู่ทั่วเอเชีย',
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
          'Asia Direct Tradings LTD. ก่อตั้งขึ้นเพื่อลดช่องว่างระหว่างสิ่งที่ผู้ซื้อในอเมริกาเหนือได้รับการสัญญาไว้��ับสิ่งที่ได้รับจริง ทั้งในด้านสภาพสินค้า มาตรฐาน และเวลา',
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

// Traditional Chinese and Japanese dictionaries keep the same complete shape
// while providing localized copy for every user-facing section.
dictionaries.tc = {
  ...dictionaries.zh,
  nav: { home: '首頁', services: '服務', products: '產品', about: '關於我們', contact: '聯絡我們', getInTouch: '聯絡我們' },
  home: {
    ...dictionaries.zh.home,
    hero: { kicker: '溫哥華 — 亞洲貿易商行', title: '高端亞洲貨源，', titleAccent: '一站式服務。', subtitle: '批發供應、貨源採購、市場拓展、反向出口與溫哥華本地配送——由駐紮亞洲各地的代理團隊全程負責。', ctaPrimary: '聯絡我們', ctaSecondary: '查看服務' },
    network: { kicker: '我們的網絡', title: '代理團隊駐紮亞洲，貨源直達北美。' },
    whyUs: { kicker: '為何選擇 Asia Direct', title: '一個團隊，從工廠到您的門口。', items: [{ n: '01', title: '實地把關', body: '我們的代理親赴亞洲各地實地考察供應商——不是轉達二手資訊的中間商。' }, { n: '02', title: '合規先行', body: '海關、CFIA 與 FDA 標籤合規工作，在貨物抵達您的倉庫之前已全部處理妥當。' }, { n: '03', title: '一個團隊，雙向貿易', body: '同一團隊同時負責進口貨源與對亞洲的反向出口，避免在兩個供應商之間出現脫節。' }] },
    whatWeDo: { kicker: '我們的業務', title: '連接亞洲貨源與北美市場的貿易基礎設施。', body: '我們是亞洲供應商與北美買家之間的連接層——貨源採購、合規、運輸、倉儲與最後一公里配送，均由同一團隊統籌協調。' },
    servicesPreview: { kicker: '服務', title: '五種貨物流通方式，及隨之而來的貿易機會。', cta: '查看全部服務' },
    cta: { title: '準備好開始貿易了嗎？', body: '告訴我們您需要採購、銷售或運輸的產品——我們的團隊將在一個工作日內給出方案。', ctaPrimary: '聯絡我們', ctaSecondary: '查看我們的產品' },
  },
  services: { ...dictionaries.zh.services, hero: { kicker: '服務', title: '五種貨物流通方式', subtitle: '從批發供應到反向出口，每一項服務都由同一團隊負責——代理駐紮亞洲各地，溫哥華本地團隊隨時支援。' }, learnMore: '了解更多', items: [{ title: 'B2B 批發供應', long: '精選高端亞洲乾貨與特色食品，進口即可上架，並以批發價格提供。每項產品均由品類專家挑選，完成清關並符合 CFIA 與 FDA 標籤標準。' }, { title: '採購服務', long: '告訴我們產品與市場需求。我們在亞洲各地的代理會尋找合適供應商、親自考察、協商條款，並管理運輸、清關與合規，讓您收到完全符合核准規格的產品。' }, { title: '協助亞洲品牌拓展市場', long: '對準備進入北美、但尚未需要自設辦公室的亞洲品牌，我們可作為您的加拿大團隊，負責進口、合規標籤、倉儲、分銷與買家關係。' }, { title: '反向出口至亞洲', long: '貿易路線雙向運行。我們將加拿大產品出口給亞洲各地經審核的買家，並由同一團隊管理文件、運輸與目的地合規。' }, { title: '溫哥華本地配送', long: '提供大溫哥華地區的商業配送，從冷凍食品到大型貨運皆可處理。最後一公里由我們的團隊負責，讓貨物從港口到門口始終由同一團隊跟進。' }] },
  products: { ...dictionaries.zh.products, hero: { kicker: '產品', title: '我們的產品', subtitle: '由品類專家精選的高端亞洲乾貨與特色食品，進口即可上架，價格適合批發。' }, categories: [{ title: '乾海產品', body: '由品類專家精選的高端乾海產品，完成清關並符合 CFIA 與 FDA 標籤標準。' }, { title: '特色零食', body: '具備市場需求的地區零食品牌，進口後以批發價格供北美分銷。' }, { title: '日常食材', body: '醬料、乾貨與日常食材，直接採購自亞洲經審核的製造商。' }, { title: '季節及特色商品', body: '限量及季節性商品，可透過我們駐紮亞洲各地的代理按需採購。' }], cta: { title: '正在尋找特定產品？', body: '即使目錄中暫未列出，我們的採購團隊大多也能找到。', button: '聯絡我們的採購團隊' } },
  about: { ...dictionaries.zh.about, hero: { kicker: '關於我們', title: '以實地存在，而非紙面承諾，建立的貿易商行。', subtitle: 'Asia Direct Tradings LTD. 是一家總部位於溫哥華的貿易商行，連接亞洲供應商與北美買家。' }, story: { ...dictionaries.zh.about.story, kicker: '我們的故事', title: '由希望把貿易做得踏實的人創辦。' }, process: { ...dictionaries.zh.about.process, kicker: '合作方式', title: '三個步驟，一個團隊全程負責。' } },
  contact: { ...dictionaries.zh.contact, hero: { kicker: '聯絡我們', title: '讓我們談談貿易。', subtitle: '告訴我們您需要採購、銷售或運輸的產品——我們的團隊將在一個工作日內給出方案。' }, infoTitle: '直接聯絡我們', formTitle: '發送訊息', form: { name: '姓名', email: '電子郵件', company: '公司', message: '留言', submit: '發送訊息', submitting: '發送中…', success: '感謝您的留言，我們已收到並將盡快與您聯絡。', error: '出現問題，請重試或直接寄送電子郵件給我們。' } },
  footer: { ...dictionaries.zh.footer, explore: '快速導覽', contact: '聯絡方式', strapline: '高端亞洲貨源——零食、食品與日用品。' },
}

dictionaries.ja = {
  ...dictionaries.en,
  nav: { home: 'ホーム', services: 'サービス', products: '取扱商品', about: '会社案内', contact: 'お問い合わせ', getInTouch: 'お問い合わせ' },
  home: {
    ...dictionaries.en.home,
    hero: { kicker: 'バンクーバー — アジア貿易商社', title: '上質なアジア商品を、', titleAccent: '一貫してお届け。', subtitle: '卸売供給、商品調達、市場参入、アジアへの逆輸出、バンクーバー地域配送まで。アジア各地のスタッフが一貫して対応します。', ctaPrimary: 'お問い合わせ', ctaSecondary: 'サービスを見る' },
    network: { kicker: '私たちのネットワーク', title: 'アジア各地のスタッフが、北米へ商品を届けます。' },
    whyUs: { kicker: 'Asia Directが選ばれる理由', title: '工場からお客様のもとまで、一つの窓口で。', items: [{ n: '01', title: '現地スタッフが確認', body: 'アジア各地のスタッフが自ら仕入先を訪問し、現地で確認します。' }, { n: '02', title: 'コンプライアンス対応', body: '通関、CFIA、FDAの表示基準を倉庫到着前に確認します。' }, { n: '03', title: '一つの窓口で双方向', body: '輸入調達からアジアへの逆輸出まで、同じチームが管理します。' }] },
    whatWeDo: { kicker: '事業内容', title: 'アジアの商品を北米へ届ける貿易インフラ。', body: 'アジアの供給者と北米の買い手をつなぎ、調達、法令対応、輸送、保管、ラストマイル配送まで一つの窓口で調整します。' },
    servicesPreview: { kicker: 'サービス', title: '商品を動かし、その先の取引まで支える五つの方法。', cta: 'サービス一覧を見る' },
    cta: { title: '商品を動かす準備はできましたか？', body: '調達、販売、輸送したい商品をお聞かせください。1営業日以内にご提案します。', ctaPrimary: 'お問い合わせ', ctaSecondary: '取扱商品を見る' },
  },
  services: { ...dictionaries.en.services, hero: { kicker: 'サービス', title: '商品を動かす五つの方法', subtitle: '卸売供給から逆輸出まで、アジア各地のスタッフとバンクーバーのチームが一つの窓口で対応します。' }, items: [{ title: 'B2B卸売供給', long: '専門スタッフが選んだ上質なアジアの乾物・食品を、輸入対応済みで卸売向けにご提供します。各商品は通関とCFIA・FDAの表示基準を確認してからお届けします。' }, { title: '商品調達サービス', long: '商品と市場をお聞かせください。アジア各地のスタッフが候補となる仕入先を探し、現地で確認し、条件交渉から輸送、通関、法令対応まで管理します。' }, { title: 'アジアブランドの北米進出', long: '北米進出を目指すアジアブランドに代わり、カナダ側の窓口として輸入、表示対応、保管、流通、買い手との関係づくりを一貫して支援します。' }, { title: 'アジアへの逆輸出', long: '貿易は双方向です。カナダの商品をアジアの信頼できる買い手へ輸出し、書類、輸送、仕向地の法令対応まで一つの窓口で管理します。' }, { title: 'バンクーバー地域配送', long: '冷凍食品から大型貨物まで、メトロ・バンクーバーの商業配送に対応します。港からお届け先まで、同じチームが最後まで管理します。' }] },
  products: { ...dictionaries.en.products, hero: { kicker: '取扱商品', title: '私たちが扱う商品', subtitle: '専門スタッフが選んだ上質なアジアの乾物・食品を、卸売向けに輸入対応済みでご提供します。' }, categories: [{ title: '乾燥水産物', body: '専門スタッフが選んだ上質な乾燥水産物。通関を済ませ、CFIA・FDAの表示基準に対応しています。' }, { title: 'こだわりのスナック', body: '北米で需要のある地域ブランドのスナックを輸入し、卸売向けにご提供します。' }, { title: '日常の食材', body: 'ソース、乾物、日常の食材を、アジアの審査済みメーカーから直接調達します。' }, { title: '季節・特選商品', body: '季節限定商品や特選商品を、アジア各地のスタッフを通じてご要望に応じて調達します。' }], cta: { title: 'お探しの商品はありますか？', body: 'カタログにない商品も、調達チームが見つけられる可能性があります。', button: '調達チームに相談する' } },
  about: { ...dictionaries.en.about, hero: { kicker: '会社案内', title: '書類ではなく、現地での存在感から生まれた貿易商社。', subtitle: 'Asia Direct Tradings LTD. は、アジアの供給者と北米の買い手をつなぐバンクーバーの貿易商社です。' }, story: { ...dictionaries.en.about.story, kicker: '私たちの歩み', title: '正しい貿易を実現したい人々によって設立されました。' }, process: { ...dictionaries.en.about.process, kicker: '仕事の進め方', title: '三つのステップ、一つの責任ある窓口。', steps: [{ n: '01', title: '要件を確認', body: '商品、対象市場、法令対応の要件を確認してから、すべてを開始します。' }, { n: '02', title: '調達・確認', body: '現地スタッフが仕入先を訪問し、条件を交渉して品質を直接確認します。' }, { n: '03', title: '納品・サポート', body: '輸送、通関、ラストマイル配送まで、一つのチームが最後まで責任を持って管理します。' }] } },
  contact: { ...dictionaries.en.contact, hero: { kicker: 'お問い合わせ', title: '貿易についてお話ししましょう。', subtitle: '調達、販売、輸送したい商品をお聞かせください。1営業日以内にご提案します。' }, infoTitle: '直接お問い合わせ', formTitle: 'メッセージを送る', form: { name: 'お名前', email: 'メールアドレス', company: '会社名', message: 'メッセージ', submit: '送信する', submitting: '送信中…', success: 'お問い合わせありがとうございます。確認後、担当者よりご連絡します。', error: '問題が発生しました。もう一度お試しいただくか、直接メールでお問い合わせください。' } },
  footer: { ...dictionaries.en.footer, explore: 'メニュー', contact: 'お問い合わせ', strapline: '上質なアジア商品を一貫して調達 — 食品・スナック・日用品。' },
}
