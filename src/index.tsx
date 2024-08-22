import ReactDOM from 'react-dom/client';

import './index.css'
import { TermDepositCalculator } from './components/TermDepositCalculator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<TermDepositCalculator />);
