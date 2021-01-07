// 提问量板块
(function () {
  const conTiwen = document.getElementsByClassName("con-tiwen")[0];
  const myCharts = echarts.init(conTiwen);

  const conTiwenOption = {
    legend: {
      orient: "vertical",
      left: "45%",
      top: "35%",
      z: 10,
      itemWidth: 8,
      itemHeight: 8, //修改icon图形大小
      icon: "circle",
      itemGap: 20,
      data: [
        {
          name: "一天后 |",
        },
        {
          name: "两天后 |",
        },
        {
          name: "三天后 |",
        },
      ],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        center: ["25%", "50%"], // 调整图像的位置
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        itemStyle: {
          borderWidth: 5,
          borderColor: "#fff",
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: "一天后 |" },
          { value: 310, name: "两天后 |" },
          { value: 234, name: "三天后 |" },
          { value: 135, name: "" },
          { value: 1548, name: "" },
          { value: 555, name: "" },
        ],
      },
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    graphic: {
      elements: [
        {
          type: "text",
          // id: "",
          left: "18%",
          top: "40%",
          z: 1,
          style: {
            text: "提问量：1050",
          },
        },
        {
          type: "text",
          // id: "",
          left: "18%",
          top: "50%",
          z: 1,
          style: {
            text: "回复量：1000",
          },
        },
        {
          type: "text",
          // id: "",
          left: "18%",
          top: "60%",
          z: 1,
          style: {
            text: "比例：95%",
          },
        },
      ],
    },
  };
  myCharts.setOption(conTiwenOption);
})();

// 常见问题访问量
(function () {
  const conAlways = document.getElementsByClassName("con-always")[0];
  const myCharts = echarts.init(conAlways);

  const conAlwaysOption = {
    xAxis: {
      type: "category",
      data: [
        "业务办理",
        "编码技术",
        "产品信息通报",
        "法规与标准",
        "条码质量",
        "条码技术应用",
        "其他",
      ],
      axisTick: {
        show: true, //是否显示刻度
        alignWithLabel: true,
        lineStyle: {
          color: "#D9D9D9",
        },
      },
      axisLabel: {
        interval: 0, //横轴信息全部显示
        fontSize: 14,
        margin: 25, // 刻度标签与轴线之间的距离
      },
    },
    yAxis: {
      type: "value",
      // y轴的字体样式
      axisLabel: {
        show: true, //这行代码控制着坐标轴y轴的文字是否显示
        textStyle: {
          color: "#000000", //y轴上的字体颜色
          fontSize: "12", // y轴字体大小
        },
      },
      // 控制网格线是否显示
      splitLine: {
        show: true, // 网格线是否显示
        //  改变样式
        lineStyle: {
          color: "#D9D9D9", // 修改网格线颜色
          type: "dashed", //网格线的类型
          width: 1,
        },
      },
    },
    series: [
      {
        show: true,
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        barWidth: "24",
        itemStyle: {
          normal: {
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "#000000",
                fontSize: 14,
              },
            },
            color: "rgba(24, 144, 255, 0.847058823529412)",
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      textStyle: {
        fontSize: 14,
        color: "red",
      },
      axisPointer: {
        type: "none",
      },
    },
  };
  myCharts.setOption(conAlwaysOption);
})();

// 视频观看统计
(function () {
  const conWatch = document.getElementsByClassName("con-watch")[0];
  const myCharts = echarts.init(conWatch);

  const conWatchOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    legend: {
      data: ["qiyeshu", "guankancishu"],
      bottom: "0",
      icon: "line",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2020-10-10",
        "2020-10-11",
        "2020-10-12",
        "2020-10-13",
        "2020-10-14",
        "2020-10-15",
        "2020-10-16",
      ],
      axisLabel: {
        interval: 0, //横轴信息全部显示
      },
    },
    yAxis: {
      type: "value",
      // 控制网格线是否显示
      splitLine: {
        show: true, // 网格线是否显示
        //  改变样式
        lineStyle: {
          color: "#D9D9D9", // 修改网格线颜色
          type: "dashed", //网格线的类型
          width: 1,
        },
      },
    },
    series: [
      {
        name: "qiyeshu",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210],
        symbol: "circle", //设定为实心点
        symbolSize: 7, //设定实心点的大小
        center: ["100%", "10%"],
        itemStyle: {
          normal: {
            color: "green",
            borderWidth: 1,
            lineStyle: {
              color: "green",
            },
            borderColor: "#fff",
          },
          emphasis: {
            // 鼠标经过时：
            shadowBlur: 5,
            shadowColor: "green",
          },
        },
      },
      {
        name: "guankancishu",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310],
        symbol: "circle", //设定为实心点
        symbolSize: 7, //设定实心点的大小
        center: ["100%", "10%"],
        itemStyle: {
          normal: {
            color: "blue",
            borderWidth: 1,
            lineStyle: {
              color: "blue",
            },
            borderColor: "#fff",
          },
          emphasis: {
            // 鼠标经过时：
            shadowBlur: 5,
            shadowColor: "blue",
          },
        },
      },
    ],
    grid: {
      // x: 20,
      y: 20,
      // x2: 40,
      y2: 60,
    },
  };
  myCharts.setOption(conWatchOption);
})();

// 视频观看统计右侧信息展示 .con-info-1
(function () {
  const conInfoOne = document.getElementsByClassName("con-info-1")[0];
  const myCharts = echarts.init(conInfoOne);

  const conInfoOneOption = {
    title: {
      text: "占所有注册企业",
      left: 38,
      top: 130,
      textStyle: {
        color: "rgba(0, 0, 0, 0.427450980392157)",
        fontSize: 12,
        fontWeight: 400,
        // fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
      },
    },
    graphic: {
      type: "text",
      left: "45",
      top: "170",
      z: 1,
      style: {
        text: "82%",
        fontSize: 28,
        color: "#000000",
        fontFamily: "'ArialMT', 'Arial'",
      },
    },
    legend: {
      orient: "vertical",
      left: 8,
      top: 90,
      icon: "none",
      data: ["注册企业"],
      textStyle: {
        //图例文字的样式
        color: "#000",
        fontWeight: 400,
        fontSize: 16,
        fontFamily: "PingFangSC-Regular, PingFang SC",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a}：{c}%",
    },
    color: ["#f6da22", "#bbe2e8"],
    series: [
      {
        name: "注册企业",
        type: "pie",
        radius: ["15%", "24%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
        },
        hoverAnimation: false,
        center: ["180", "150"],
        minAngle: 0, //最小角度
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 82,
            itemStyle: { color: "#99D5FD" },
          },
          {
            value: 18,
            itemStyle: { color: "#E9E9E9" },
          },
        ],
      },
    ],
  };
  myCharts.setOption(conInfoOneOption);
})();

// 视频观看统计右侧信息展示 .con-info-2
(function () {
  const conInfoTwo = document.getElementsByClassName("con-info-2")[0];
  const myCharts = echarts.init(conInfoTwo);

  const conInfoTwoOption = {
    title: {
      text: "占所有续展企业",
      left: 38,
      top: 130,
      textStyle: {
        color: "rgba(0, 0, 0, 0.427450980392157)",
        fontSize: 12,
        fontWeight: 400,
        // fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
      },
    },
    graphic: {
      type: "text",
      left: "45",
      top: "170",
      z: 1,
      style: {
        text: "45%",
        fontSize: 28,
        color: "#000000",
        fontFamily: "'ArialMT', 'Arial'",
      },
    },
    legend: {
      orient: "vertical",
      left: 8,
      top: 90,
      icon: "none",
      data: ["续展企业"],
      textStyle: {
        //图例文字的样式
        color: "#000",
        fontWeight: 400,
        fontSize: 16,
        fontFamily: "PingFangSC-Regular, PingFang SC",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a}：{c}%",
    },
    color: ["#f6da22", "#bbe2e8"],
    series: [
      {
        name: "续展企业",
        type: "pie",
        radius: ["15%", "24%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
        },
        hoverAnimation: false,
        center: ["180", "150"],
        minAngle: 0, //最小角度
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 82,
            itemStyle: { color: "#99D5FD" },
          },
          {
            value: 18,
            itemStyle: { color: "#E9E9E9" },
          },
        ],
      },
    ],
  };
  myCharts.setOption(conInfoTwoOption);
})();

// 测试板块
(function () {
  const conTest = document.getElementsByClassName("con-test")[0];
  const myCharts = echarts.init(conTest);

  const conTestOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    legend: {
      data: ["qiyeshu", "guankancishu"],
      bottom: "0",
      icon: "line",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2020-10-10",
        "2020-10-11",
        "2020-10-12",
        "2020-10-13",
        "2020-10-14",
        "2020-10-15",
        "2020-10-16",
      ],
      axisLabel: {
        interval: 0, //横轴信息全部显示
      },
    },
    yAxis: {
      type: "value",
      // 控制网格线是否显示
      splitLine: {
        show: true, // 网格线是否显示
        //  改变样式
        lineStyle: {
          color: "#D9D9D9", // 修改网格线颜色
          type: "dashed", //网格线的类型
          width: 1,
        },
      },
    },
    series: [
      {
        name: "qiyeshu",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210],
        symbol: "circle", //设定为实心点
        symbolSize: 7, //设定实心点的大小
        center: ["100%", "10%"],
        itemStyle: {
          normal: {
            color: "green",
            borderWidth: 1,
            lineStyle: {
              color: "green",
            },
            borderColor: "#fff",
          },
          emphasis: {
            // 鼠标经过时：
            shadowBlur: 5,
            shadowColor: "green",
          },
        },
      },
      {
        name: "guankancishu",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310],
        symbol: "circle", //设定为实心点
        symbolSize: 7, //设定实心点的大小
        center: ["100%", "10%"],
        itemStyle: {
          normal: {
            color: "blue",
            borderWidth: 1,
            lineStyle: {
              color: "blue",
            },
            borderColor: "#fff",
          },
          emphasis: {
            // 鼠标经过时：
            shadowBlur: 5,
            shadowColor: "blue",
          },
        },
      },
    ],
    grid: {
      y: 20,
      y2: 60,
    },
  };
  myCharts.setOption(conTestOption);
})();

// 测试板块下方注册企业饼图
(function () {
  const conRigester = document.getElementsByClassName("con-rigester")[0];
  const myCharts = echarts.init(conRigester);

  const conRigesterOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "20%",
      icon: "circle",
      bottom: 10,
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 13,
      data: ["6分以下", "6-8分", "8分以上"],
    },
    graphic: {
      type: "text",
      right: "5%",
      top: "center",
      z: 1,
      style: {
        text: "注册企业数：42\n\n\n占所有注册企业：20%",
        fontSize: 14,
        color: "#000000",
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
      },
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["35%", "45%"],
        hoverAnimation: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#fff",
        },
        data: [
          {
            value: "30.00",
            name: "6分以下",
            itemStyle: {
              color: "#3AA0FF",
            },
          },
          {
            value: "65.00",
            name: "6-8分",
            itemStyle: {
              color: "#36CBCB",
            },
          },
          {
            value: "5.00",
            name: "8分以上",
            itemStyle: {
              color: "#4ECB73",
            },
          },
        ],
        label: {
          formatter: "{b}：{c}%",
        },
      },
    ],
  };
  myCharts.setOption(conRigesterOption);
})();

// 测试板块下方续展企业饼图
(function () {
  const conXuzhan = document.getElementsByClassName("con-xuzhan")[0];
  const myCharts = echarts.init(conXuzhan);

  const conXuzhanOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "20%",
      icon: "circle",
      bottom: 10,
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 13,
      data: ["6分以下", "6-8分", "8分以上"],
    },
    graphic: {
      type: "text",
      right: "5%",
      top: "center",
      z: 1,
      style: {
        text: "续展企业数：42\n\n\n占所有续展企业：20%",
        fontSize: 14,
        color: "#000000",
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
      },
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["35%", "45%"],
        hoverAnimation: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#fff",
        },
        data: [
          {
            value: "30.00",
            name: "6分以下",
            itemStyle: {
              color: "#3AA0FF",
            },
          },
          {
            value: "65.00",
            name: "6-8分",
            itemStyle: {
              color: "#36CBCB",
            },
          },
          {
            value: "5.00",
            name: "8分以上",
            itemStyle: {
              color: "#4ECB73",
            },
          },
        ],
        label: {
          formatter: "{b}：{c}%",
        },
      },
    ],
  };
  myCharts.setOption(conXuzhanOption);
})();

// 学习资料板块
(function () {
  const conStudy = document.getElementsByClassName("con-study")[0];
  const myCharts = echarts.init(conStudy);

  const conStudyOption = {
    xAxis: {
      type: "category",
      data: [
        "业务办理",
        "产品编码与符号",
        "法规与标准",
        "条码应用",
        "产品介绍",
        "其他",
      ],
      axisTick: {
        show: true, //是否显示刻度
        alignWithLabel: true,
        lineStyle: {
          color: "#D9D9D9",
        },
      },
      axisLabel: {
        interval: 0, //横轴信息全部显示
        fontSize: 14,
        margin: 20, // 刻度标签与轴线之间的距离
      },
      axisLine: {
        //这是x轴文字颜色
        lineStyle: {
          color: "rgba(0, 0, 0, 0.647058823529412)",
          fontSize: 14,
        },
      },
    },
    yAxis: {
      type: "value",
      // y轴的字体样式
      axisLabel: {
        show: true, //这行代码控制着坐标轴y轴的文字是否显示
        textStyle: {
          color: "#000000", //y轴上的字体颜色
          fontSize: "12", // y轴字体大小
        },
      },
      // 控制网格线是否显示
      splitLine: {
        show: true, // 网格线是否显示
        //  改变样式
        lineStyle: {
          color: "#D9D9D9", // 修改网格线颜色
          type: "dashed", //网格线的类型
          width: 1,
        },
      },
    },
    series: [
      {
        show: true,
        data: [120, 200, 150, 80, 70, 110],
        type: "bar",
        barWidth: "24",
        itemStyle: {
          normal: {
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "#000000",
                fontSize: 14,
              },
            },
            color: "rgba(24, 144, 255, 0.847058823529412)",
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
  };
  myCharts.setOption(conStudyOption);
})();

// 通知板块
(function () {
  const conActive = document.getElementsByClassName("con-active")[0];
  const myCharts = echarts.init(conActive);

  const conActiveOption = {
    legend: {
      orient: "vertical",
      left: "45%",
      top: "35%",
      z: 10,
      itemWidth: 8,
      itemHeight: 8, //修改icon图形大小
      icon: "circle",
      itemGap: 20,
      data: [
        {
          name: "一天后 |",
        },
        {
          name: "两天后 |",
        },
        {
          name: "三天后 |",
        },
      ],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        center: ["25%", "50%"], // 调整图像的位置
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        itemStyle: {
          borderWidth: 5,
          borderColor: "#fff",
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: "一天后 |" },
          { value: 310, name: "两天后 |" },
          { value: 234, name: "三天后 |" },
          { value: 135, name: "" },
          { value: 1548, name: "" },
          { value: 555, name: "" },
        ],
      },
    ],
    // 问题: tooltip 一直没有?
    tooltip: {
      show: true,
      trigger: "item",
    },
    graphic: {
      elements: [
        {
          type: "text",
          left: "20%",
          top: "40%",
          z: 1,
          style: {
            text: "活动总数\n  1000",
            fontSize: 18,
          },
        },
      ],
    },
  };
  myCharts.setOption(conActiveOption);
})();
