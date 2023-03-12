import { useEffect, useState } from "react";
import axios from "axios";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const ENDPOINT = "http://localhost:8000/chart";

const Charts = () => {
  const initialOptions: any = {
    chart: { type: "spline" },
    title: { text: "IoT 모니터링 Dashboard 개발" },
    subtitle: {
      text: "Irregular time data in Highcharts TS",
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e. %b",
        year: "%b",
      },
      yAxis: {
        title: {
          text: "Snow depth (m)",
        },
        min: 0,
      },
      title: {
        text: "Date",
      },
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
    },

    accessibility: {
      enabled: false,
    },

    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 2.5,
        },
      },
    },
    colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

    series: [],
  };

  const [options, setOptions] = useState<any>(initialOptions);

  const setData = async (id: string) => {
    try {
      const { data } = await axios.get(ENDPOINT + "/" + id);

      interface InputData {
        name: string;
        data: number[];
      }

      let tempSeries: InputData[] = [];

      data.data.forEach((item: { name: string; data: [] }) =>
        tempSeries.push({
          name: item.name,
          data: item.data,
        })
      );

      setOptions({
        ...initialOptions,
        series: tempSeries,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setData("1");
    return () => {
      setOptions(initialOptions);
    };
  }, []);

  return (
    <ChartsBlock>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartsBlock>
  );
};

const ChartsBlock = styled.div``;

export default Charts;
