import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "../services/EngagementHelper";
import channels from "../utilities/channels.json";
import messageCountList from "../utilities/messages.json";
console.log(
  engagementHelper.engagementMessageOverTimeChartOptions(
    channels.channels,
    messageCountList.messageCountList
  )
);
const EngagementMessagesOverTime = () => {
  const options = {
    chart: {
      type: "spline",
      backgroundColor: "#22222c",
    },

    title: {
      style: { color: "#FFFFFF" },
      text: "Mercle Chart",
    },

    xAxis: {
      type: "datetime",
      tickInterval: 24 * 3600 * 1000,
      title: {
        style: { color: "#FFFFFF" },
        text: "Bucket Time",
      },
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
      dateTimeLabelFormats: {
        day: "%e, %b",
      },
    },

    yAxis: {
      gridLineWidth: 0,
      title: {
        style: { color: "#FFFFFF" },
        text: "Message Count",
      },
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br />",
      pointFormat: "{point.y} messages on {point.x:%e,%b}",
      backgroundColor: "0c0c0e",
      style: {
        color: "#FFFFFF",
        opacity: ".8",
      },
    },
    series: engagementHelper.engagementMessageOverTimeChartOptions(
      channels.channels,
      messageCountList.messageCountList
    ),

    legend: {
      itemStyle: {
        color: "white",
      },
    },
    
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
