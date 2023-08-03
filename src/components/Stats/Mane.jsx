import Statistic from "./Statistics";
import statistics from "../../data.json";
import { Wrap, Section, Title } from './Statistics.Styled'

const StatisticName = () => {
    return (
        

        <Section className="statistics">
        <Title className="title">Upload stats</Title>
    
        <Wrap className="stat-list">
          {statistics.map((statistic, index) => (
         <Statistic 
         index = {index}
         key = {statistic.id}
         label = {statistic.label}
         percentage = {statistic.percentage}
         />
        ))}
          </Wrap>
        </Section>
    )
}

export default StatisticName;