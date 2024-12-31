import { Box, Typography } from '@mui/material'
import { 
  Area, 
  AreaChart,
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell, 
  Line, 
  LineChart, 
  Pie, 
  PieChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts'
import { ChartTooltip } from './components/ChartTooltip'
import { GlassmorphicContainer } from './components/GlassmorphicContainer'
import { FinancialChartProps } from './types'

const DEFAULT_COLORS = {
  positive: '#00FFFF',
  negative: '#FF00FF'
}

export function FinancialChart({
  data,
  type,
  title,
  dataKey,
  xAxisKey,
  colors = [DEFAULT_COLORS.positive, DEFAULT_COLORS.negative],
}: FinancialChartProps) {
  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 20, right: 30, left: 0, bottom: 5 },
    }

    switch (type) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey={dataKey} fill={colors[0]} />
          </BarChart>
        )

      case 'pie':
        return (
          <PieChart {...commonProps}>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={xAxisKey}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index % colors.length]} 
                />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip />} />
          </PieChart>
        )

      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              fill={colors[0]} 
              stroke={colors[0]} 
            />
          </AreaChart>
        )

      default: // line
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={colors[0]} 
            />
          </LineChart>
        )
    }
  }
  
  return (
    <GlassmorphicContainer>
      {title && (
        <Typography
          variant="h6"
          sx={{
            color: '#EEEEEE',
            mb: 2,
            fontFamily: 'Roboto, Arial',
            textAlign: 'center'
          }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </Box>
    </GlassmorphicContainer>
  )
}