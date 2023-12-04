"use client";
import { Card, AreaChart, Title } from "@tremor/react";
import { ChartsFormat } from "./ChartsSchema";

const Chart = ({ data, categories, colors, format }: ChartsFormat) => {
  const dataFormater = (number: number): string => `${number} ${format}`;
  return (
    <Card className="mt-6">
      <Title>
        {categories.length > 1
          ? categories.map((item, i) => {
              return i % 2 ? item : item + " & ";
            })
          : categories}
      </Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        categories={categories}
        index="time"
        colors={colors}
        minValue={0}
        valueFormatter={dataFormater}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default Chart;
