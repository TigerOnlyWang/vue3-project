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
      res: [
        { title: "首页", path: "/index" ,component:'index'},
        { title: "统计管理", path: "/census",component:'census' },
        { title: "财务管理", path: "/finanace" ,component:'finanace'},
        { title: "产品管理", path: "/product" ,component:'product'},
        { title: "订单管理", path: "/order" ,component:'order'},
        { title: "会员管理", path: "/member",component:'member' },
      ],
    },
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
        { title: "首页", path: "/index" ,component:'index'},
        { title: "统计管理", path: "/census",component:'census' },
        { title: "财务管理", path: "/finanace" ,component:'finanace'},
        { title: "产品管理", path: "/product" ,component:'product'},
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
        { title: "首页", path: "/index" ,component:'index'},
        { title: "统计管理", path: "/census",component:'census' },
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
        { title: "首页", path: "/index" ,component:'index'},
        { title: "统计管理", path: "/census",component:'census' },
        { title: "财务管理", path: "/finanace" ,component:'finanace'},
        { title: "产品管理", path: "/product" ,component:'product'},
        { title: "订单管理", path: "/order" ,component:'order'},
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
        { title: "首页", path: "/index" ,component:'index'},
        { title: "财务管理", path: "/finanace" ,component:'finanace'},
        { title: "产品管理", path: "/product" ,component:'product'},
        { title: "订单管理", path: "/order" ,component:'order'},
        { title: "会员管理", path: "/member",component:'member' },
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
app.listen(5000, () => {
  console.log("服务器已启动");
});
