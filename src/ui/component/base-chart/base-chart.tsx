import { ReactElement } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

const BaseChart: React.FC = (props): ReactElement => {
    return(
      <div className="flex">
        {props.children}
      </div>
    )
}

export default BaseChart