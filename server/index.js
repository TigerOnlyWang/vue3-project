//引入express框架
const express = require("express");
//引入token
const jwt = require("jsonwebtoken");
//实例化express
app = express();
const person = [
  {
    id: "420000200212253072",
    account: "郑刚",
    password: "123456",
    date: "2020-11-05",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 19,
      tatol: 18,
      pageSize: 10,
      res: [
        { title: "商品管理", path: "/home", component: "index", icon: "Menu" },
        {
          title: "统计管理",
          path: "/home/census",
          component: "census",
          icon: "Document",
        },
        {
          title: "财务管理",
          path: "/home/finanace",
          component: "finanace",
          icon: "Setting",
        },
        {
          title: "产品管理",
          path: "/home/product",
          component: "product",
          icon: "Setting",
        },
        {
          title: "订单管理",
          path: "/home/order",
          component: "order",
          icon: "Setting",
        },
        {
          title: "会员管理",
          path: "/home/member",
          component: "member",
          icon: "Location",
        },
      ],
    },
    data: [
      {
        cid: "1004",
        title: "床",
        price: 300,
        num: 23,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要300!带回家!",
      },
      {
        cid: "1005",
        title: "洗衣机",
        price: 600,
        num: 6,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要600!带回家!",
      },
      {
        cid: "1006",
        title: "垃圾桶",
        price: 25,
        num: 530,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要25!带回家!",
      },
      {
        cid: "1007",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1008",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1009",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1010",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1011",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1012",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1013",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1014",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1015",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1016",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1017",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1018",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1019",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1020",
        title: "华为电脑",
        price: 79,
        num: 99,
        category: "电脑",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1021",
        title: "小米",
        price: 79,
        num: 99,
        category: "手机",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
    ],
  },
  {
    id: "120000201304104879",
    account: "杨敏",
    password: "123456",
    date: "2017-09-18",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 20,
      res: [
        { title: "商品管理", path: "/home", component: "index" },
        { title: "统计管理", path: "/home/census", component: "census" },
        { title: "财务管理", path: "/home/finanace", component: "finanace" },
        { title: "产品管理", path: "/home/product", component: "product" },
      ],
    },
  },
  {
    id: "640000199512297566",
    account: "杨勇",
    password: "123456",
    date: "1989-12-02",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 22,
      res: [
        {
          title: "商品管理",
          path: "/home",
          component: "index",
          meta: { isShow: true },
        },
        { title: "统计管理", path: "/home/census", component: "census" },
      ],
    },
  },
  {
    id: "330000198503187966",
    account: "汪杰",
    password: "123456",
    date: "1991-12-24",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 23,
      res: [
        { title: "商品管理", path: "/home", component: "index" },
        { title: "统计管理", path: "/home/census", component: "census" },
        { title: "财务管理", path: "/home/finanace", component: "finanace" },
        { title: "产品管理", path: "/home/product", component: "product" },
        { title: "订单管理", path: "/home/order", component: "order" },
      ],
    },
  },
  {
    id: "440000198407136224",
    account: "武霞",
    password: "123456",
    date: "2007-06-07",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 21,
      res: [
        { title: "商品管理", path: "/home", component: "index" },
        { title: "财务管理", path: "/home/finanace", component: "finanace" },
        { title: "产品管理", path: "/home/product", component: "product" },
        { title: "订单管理", path: "/home/order", component: "order" },
        { title: "会员管理", path: "/home/member", component: "member" },
      ],
    },
  },
];
//解析body，不然req.body就是空对象
const bodyParser = require("body-parser");
//转换成json格式
app.use(bodyParser.json());
//通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded());
//跨域处理
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
//登录处理
app.post("/perinfo", (req, res) => {
  const { account, password } = req.body;
  const zhanghao = person.find((e) => e.account === account);
  const mima = person.find((e) => e.password === password);
  if (zhanghao && mima) {
    const token = jwt.sign(zhanghao, "chaojianquanmima", {
      expiresIn: "60y",
    });
    res.send({
      token,
      status: 2,
      msg: "登陆成功！",
    });
  } else {
    if (zhanghao) {
      res.send({
        status: 1,
        msg: "密码不正确",
      });
    } else {
      res.send({
        status: 0,
        msg: "没有此用户！",
      });
    }
  }
});
//登录后是否有token，传递数据
app.get("/getResources", (req, res) => {
  try {
    const { token } = req.headers;
    if (token) {
      const decodeToken = jwt.verify(token, "chaojianquanmima");
      res.send({
        data: decodeToken,
      });
    } else {
      res.send({
        msg: "token不存在！",
      });
    }
  } catch (error) {
    res.send({
      msg: "token无效",
    });
  }
});
//添加数据
app.post("/addShop", (req, res) => {
  const {userId,data} = req.body;
  person.forEach(e=>{
    if(e.id === userId){
      let cid = e.data.slice(-1,e.data.length)[0].cid
      e.data.push({...data,cid:++cid})
      console.log(e.data);
    }
  })
  res.send({
    status: 200,
    form:data
  });
});
app.listen(5000, () => {
  console.log("服务器已启动");
});
