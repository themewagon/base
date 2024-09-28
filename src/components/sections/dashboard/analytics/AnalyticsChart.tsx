import { useMemo } from 'react';
import { SxProps, useTheme } from '@mui/material';
import * as echarts from 'echarts/core';
import ReactEchart from 'components/base/ReactEchart';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
} from 'echarts/components';
import { fontFamily } from 'theme/typography';

echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  CanvasRenderer,
]);

interface AnalyticsChartProps {
  data: number[];
  sx?: SxProps;
}

const AnalyticsChart = ({ data, ...rest }: AnalyticsChartProps) => {
  const theme = useTheme();

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          radius: ['62%', '90%'],
          avoidLabelOverlap: false,
          startAngle: 90,
          label: {
            show: false,
          },
          data: [
            {
              value: 40,
              name: 'Category A',
              itemStyle: {
                borderRadius: [100, 100, 15, 15],
                color: theme.palette.secondary.main,
              },
            },
            {
              value: 60,
              name: '',
              itemStyle: {
                color: 'transparent',
              },
              tooltip: {
                show: false,
              },
            },
          ],
          z: 3,
        },
        {
          type: 'pie',
          radius: ['68%', '90%'],
          avoidLabelOverlap: false,
          startAngle: 88,
          label: {
            show: false,
          },
          data: [
            {
              value: 60,
              name: 'Category B',
              itemStyle: {
                borderRadius: [100, 100, 15, 15],
                color: theme.palette.warning.main,
              },
            },
            {
              value: 40,
              name: '',
              itemStyle: {
                color: 'transparent',
              },
              tooltip: {
                show: false,
              },
            },
          ],
          z: 2,
        },
        {
          type: 'pie',
          radius: ['72%', '90%'],
          avoidLabelOverlap: false,
          startAngle: 88,
          label: {
            show: false,
          },
          data: [
            {
              value: 80,
              name: 'Category C',
              itemStyle: {
                borderRadius: [100, 100, 15, 15],
                color: theme.palette.error.light,
              },
            },
            {
              value: 20,
              name: '',
              itemStyle: {
                color: 'transparent',
              },
              tooltip: {
                show: false,
              },
            },
          ],
          z: 1,
        },
        {
          type: 'pie',
          radius: ['78%', '90%'],
          silent: true,
          label: {
            show: false,
          },
          data: [
            {
              value: 1,
              name: '',
              itemStyle: {
                color: theme.palette.info.light,
              },
            },
          ],
          z: 0,
        },
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '80%',
            fontWeight: 800,
            textAlign: 'center',
            fontFamily: fontFamily.nunito,
            fontSize: theme.typography.h2.fontSize,
            fill: theme.palette.text.primary,
          },
        },
        {
          type: 'text',
          left: 'center',
          top: '57%',
          style: {
            text: 'Transactions',
            textAlign: 'center',
            fontFamily: fontFamily.nunito,
            fontSize: theme.typography.body1.fontSize,
            fill: theme.palette.neutral.darker,
          },
        },
      ],
    }),
    [theme, data],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default AnalyticsChart;
