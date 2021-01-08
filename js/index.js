// 提问量板块 回答模块
(function () {
  const conTiwen = document.getElementsByClassName("con-answer")[0];
  const myCharts = echarts.init(conTiwen);

  const conTiwenOption = {
    title: {
      text: "回复问题响应快慢（次数）及占比",
      bottom: 8,
      left: "8%",
      textStyle: {
        fontSize: 14,
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
      },
    },
    legend: {
      orient: "vertical",
      left: "55%",
      top: "25%",
      z: 10,
      itemWidth: 8,
      fontSize: 14,
      itemHeight: 8, //修改icon图形大小
      icon: "circle",
      itemGap: 20,
      data: [
        {
          name: "1天内",
          fontSize: 14,
          value: "222",
        },
        {
          name: "2天内",
          fontSize: 14,
        },
        {
          name: "2天后",
          fontSize: 14,
        },
      ],
      formatter: function (value) {
        let count = 0,
          percentage = "";

        switch (value) {
          case "1天内": {
            count = 100;
            percentage = "20%";
            break;
          }
          case "2天内": {
            count = 200;
            percentage = "30%";
            break;
          }
          case "2天后": {
            count = 300;
            percentage = "40%";
            break;
          }
        }

        if (value.length > 4) {
          return value.substring(0, 4) + "..." + "{a|" + "|  20%" + "}" + "20";
        } else {
          return value + "{a|" + `|      ${percentage}` + "}" + `${count}次`;
        }
      },
      textStyle: {
        fontSize: 15,
        //在rich中给formatter添加个别字体颜色
        rich: {
          a: {
            color: "rgba(0, 0, 0, 0.427450980392157)",
            padding: [0, 30, 0, 5],
            fontSize: 14,
          },
        },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        center: ["27%", "42%"], // 调整图像的位置
        label: {
          normal: {
            show: false, //默认显示关闭,如果此处是true,则数据重叠
            // position: "center", //显示的位置,center是饼环图中间显示,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          borderWidth: 5,
          borderColor: "#fff",
        },
        animationEasing: "",
        data: [
          {
            value: 335,
            name: "1天内",
          },
          { value: 310, name: "2天内" },
          { value: 234, name: "2天后" },
          { value: 135, name: "" },
          { value: 1548, name: "" },
          { value: 555, name: "" },
        ],
      },
    ],
    graphic: {
      elements: [
        {
          type: "text",
          left: "18%",
          top: "30%",
          z: 1,
          style: {
            text: "提问量：1050",
            fontSize: 18,
          },
        },
        {
          type: "text",
          left: "18%",
          top: "40%",
          z: 1,
          style: {
            text: "回复量：1000",
            fontSize: 18,
          },
        },
        {
          type: "text",
          left: "18%",
          top: "50%",
          z: 1,
          style: {
            text: "比   例：95%",
            fontSize: 18,
          },
        },
      ],
    },
  };
  myCharts.setOption(conTiwenOption);
})();

// 提问量板块 追问模块
(function () {
  const conTiwen = document.getElementsByClassName("con-ask")[0];
  const myCharts = echarts.init(conTiwen);

  const conTiwenOption = {
    title: {
      text: "追问问题回复响应快慢（次数）及占比",
      bottom: 8,
      left: "8%",
      textStyle: {
        fontSize: 14,
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
      },
    },
    legend: {
      orient: "vertical",
      left: "55%",
      top: "25%",
      z: 10,
      itemWidth: 8,
      fontSize: 14,
      itemHeight: 8, //修改icon图形大小
      icon: "circle",
      itemGap: 20,
      data: [
        {
          name: "1天内",
          fontSize: 14,
          value: "222",
        },
        {
          name: "2天内",
          fontSize: 14,
        },
        {
          name: "2天后",
          fontSize: 14,
        },
      ],
      formatter: function (value) {
        let count = 0,
          percentage = "";

        switch (value) {
          case "1天内": {
            count = 100;
            percentage = "20%";
            break;
          }
          case "2天内": {
            count = 200;
            percentage = "30%";
            break;
          }
          case "2天后": {
            count = 300;
            percentage = "40%";
            break;
          }
        }

        if (value.length > 4) {
          return value.substring(0, 4) + "..." + "{a|" + "|  20%" + "}" + "20";
        } else {
          return value + "{a|" + `|      ${percentage}` + "}" + `${count}次`;
        }
      },
      textStyle: {
        fontSize: 15,
        //在rich中给formatter添加个别字体颜色
        rich: {
          a: {
            color: "rgba(0, 0, 0, 0.427450980392157)",
            padding: [0, 30, 0, 5],
            fontSize: 14,
          },
        },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        center: ["27%", "42%"], // 调整图像的位置
        label: {
          normal: {
            show: false, //默认显示关闭,如果此处是true,则数据重叠
            // position: "center", //显示的位置,center是饼环图中间显示,
          },
          emphasis: {
            show: false,
          },
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
          {
            value: 335,
            name: "1天内",
          },
          { value: 310, name: "2天内" },
          { value: 234, name: "2天后" },
          { value: 135, name: "" },
          { value: 1548, name: "" },
          { value: 555, name: "" },
        ],
      },
    ],
    graphic: {
      elements: [
        {
          type: "text",
          left: "18%",
          top: "30%",
          z: 1,
          style: {
            text: "提问量：1050",
            fontSize: 18,
          },
        },
        {
          type: "text",
          left: "18%",
          top: "40%",
          z: 1,
          style: {
            text: "回复量：1000",
            fontSize: 18,
          },
        },
        {
          type: "text",
          left: "18%",
          top: "50%",
          z: 1,
          style: {
            text: "比   例：95%",
            fontSize: 18,
          },
        },
      ],
    },
    // grid: {
    //   x: 10,
    //   y: 10,
    //   x2: 100,
    //   y2: 1000
    // }
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
      axisPointer: {
        type: "none",
      },
      formatter: function (val) {
        const html = `<span 
          style="
            display:inline-block;
            margin-right:5px;
            border-radius:10px;
            width:10px;
            height:10px;
            background-color:rgba(24, 144, 255, 0.847058823529412);
          "></span>
          <span style="font-size: 12px;">${val[0].name}</span>
          <span style="
            margin-left: 15px;
            font-size: 12px;
          ">${val[0].data}</span>
        `;
        return html;
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
      formatter(val) {
        const html = `
          <span style="font-size: 12px;">${val[0].name}</span>
          <p style="position: relative;">
            <span style="
              display: inline-block;
              width: 5px;
              height: 5px;
              margin-right: 5px;
              border-radius: 50%;
              background-color: green;
            "></span>
            <span style="font-size: 12px;">${val[0].seriesName}</span>
            <span style="
              position: absolute;
              right: 0;
              font-size: 12px;
            ">${val[0].data}</span>
          </p>
          <p>
            <span style="
              display: inline-block;
              width: 5px;
              height: 5px;
              margin-right: 5px;
              border-radius: 50%;
              background-color: blue;
            "></span>
            <span style="
              margin-right: 30px;
              font-size: 12px;
            ">${val[1].seriesName}</span>
            <span style="font-size: 12px;">${val[1].data}</span>
          </p>
        `;
        return html;
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
        fontSize: 16,
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
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
        fontSize: 16,
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
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
    title: {
      text: "参与企业数：40    测试次数：87",
      left: "center",
      top: 0,
      textStyle: {
        fontSize: 14,
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter(val) {
        const html = `
          <span style="font-size: 12px;">${val[0].name}</span>
          <p style="position: relative;">
            <span style="
              display: inline-block;
              width: 5px;
              height: 5px;
              margin-right: 5px;
              border-radius: 50%;
              background-color: green;
            "></span>
            <span style="font-size: 12px;">${val[0].seriesName}</span>
            <span style="
              position: absolute;
              right: 0;
              font-size: 12px;
            ">${val[0].data}</span>
          </p>
          <p>
            <span style="
              display: inline-block;
              width: 5px;
              height: 5px;
              margin-right: 5px;
              border-radius: 50%;
              background-color: blue;
            "></span>
            <span style="
              margin-right: 30px;
              font-size: 12px;
            ">${val[1].seriesName}</span>
            <span style="font-size: 12px;">${val[1].data}</span>
          </p>
        `;
        return html;
      },
    },
    legend: {
      data: ["qiyeshu", "ceshicishu"],
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
        stack: "qiyeshu",
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
        name: "ceshicishu",
        type: "line",
        stack: "guankancishu",
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
      top: "15%",
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
        fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
        fontWeight: 400,
        fontStyle: "normal",
        color: "rgba(0, 0, 0, 0.647058823529412)",
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
      formatter: function (val) {
        const html = `<span 
          style="
            display:inline-block;
            margin-right:5px;
            border-radius:5px;
            width:5px;
            height:5px;
            background-color:rgba(24, 144, 255, 0.847058823529412);
          "></span>
          <span style="font-size: 12px;">${val[0].name}</span>
          <span style="
            margin-left: 15px;
            font-size: 12px;
          ">${val[0].data}</span>
        `;
        return html;
      },
    },
  };
  myCharts.setOption(conStudyOption);
})();

// 活动板块
(function () {
  const conActive = document.getElementsByClassName("con-active")[0];
  const myCharts = echarts.init(conActive);

  const conActiveOption = {
    legend: {
      orient: "vertical",
      left: "45%",
      top: "25%",
      z: 10,
      itemWidth: 8,
      itemHeight: 8, //修改icon图形大小
      icon: "circle",
      itemGap: 20,
      data: [
        {
          name: "师资培训",
        },
        {
          name: "地市培训",
        },
        {
          name: "服务工作培训会",
        },
        {
          name: "基础培训",
        },
      ],
      formatter: function (value) {
        let count = 0,
          percentage = "";

        switch (value) {
          case "师资培训": {
            count = 100;
            percentage = "20%";
            break;
          }
          case "地市培训": {
            count = 200;
            percentage = "30%";
            break;
          }
          case "服务工作培训会": {
            count = 300;
            percentage = "40%";
            break;
          }
          case "基础培训": {
            count = 400;
            percentage = "50%";
            break;
          }
        }

        if (value === "服务工作培训会") {
          return value + "{a|" + `|     ${percentage}` + "}" + `${count}次`;
        } else {
          return (
            value + "{a|" + `|               ${percentage}` + "}" + `${count}次`
          );
        }
      },
      textStyle: {
        fontSize: 14,
        //在rich中给formatter添加个别字体颜色
        rich: {
          a: {
            color: "rgba(0, 0, 0, 0.647058823529412)",
            padding: [0, 30, 0, 5],
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            fontFamily: "'PingFangSC-Regular', 'PingFang SC'",
          },
        },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        center: ["25%", "50%"], // 调整图像的位置
        label: {
          normal: {
            show: false, //默认显示关闭,如果此处是true,则数据重叠
            // position: "center", //显示的位置,center是饼环图中间显示,
          },
          emphasis: {
            show: false,
          },
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
          { value: 335, name: "师资培训" },
          { value: 310, name: "地市培训" },
          { value: 234, name: "服务工作培训会" },
          { value: 135, name: "基础培训" },
          { value: 1548, name: "" },
          { value: 555, name: "" },
        ],
      },
    ],
    graphic: {
      elements: [
        {
          type: "text",
          left: "19%",
          top: "43%",
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
