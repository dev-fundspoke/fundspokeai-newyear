import { Grid } from '@mui/material'
import { FinancialChart } from '../FinancialChart/FinancialChart'
import { ChartTitle } from './components/ChartTitle'
import { ChartsContainer, SectionContainer } from './components/SectionContainer'
import { investmentData, revenueData } from './data'

export function ChartsSection() {
  return (
    <SectionContainer>
      <ChartsContainer>
        <Grid item xs={12} md={6}>
          <ChartTitle>Revenue vs Expenses</ChartTitle>
          <FinancialChart
            data={revenueData}
            type="line"
            title=""
            dataKey="revenue"
            xAxisKey="month"
            yAxisKey="revenue"
            colors={['#00FFFF', '#FF00FF']}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartTitle>Investment Breakdown</ChartTitle>
          <FinancialChart
            data={investmentData}
            type="pie"
            title=""
            dataKey="value"
            xAxisKey="category"
            yAxisKey="value"
            colors={['#00FFFF', '#33CCCC', '#66FFFF', '#99FFFF']}
          />
        </Grid>

        <Grid item xs={12}>
          <ChartTitle>Monthly Revenue Trend</ChartTitle>
          <FinancialChart
            data={revenueData}
            type="area"
            title=""
            dataKey="revenue"
            xAxisKey="month"
            yAxisKey="revenue"
            colors={['#00FFFF']}
          />
        </Grid>
      </ChartsContainer>
    </SectionContainer>
  )
}